(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const brandId = urlParams.get('brand');

  if (!brandId) {
    window.location.href = 'index.html';
    return;
  }
  const brand = getBrand(brandId);
  if (!brand) {
    window.location.href = 'index.html';
    return;
  }

  const catalog = getCatalog(brandId);
  if (!catalog) {
    window.location.href = 'index.html';
    return;
  }

  FILTER_TYPE = {
    SB: 'search-based',
    CB: 'categories-based',
  }

  const FILTER_CONFIG = {
    oil: {
      filter_type: FILTER_TYPE.CB,
      func: oilSearch,
      params: [
        { key: 'category', label: 'Categoría', type: 'single' },
        { key: 'line', label: 'Línea', type: 'single', path: 'line' },
        { key: 'presentations', label: 'Presentaciones', type: 'multi', path: 'presentations' },
        { key: 'viscosity', label: 'Viscosidad SAE', type: 'single', path: 'specifications.viscosity' },
      ]
    },
    tires: {
      filter_type: FILTER_TYPE.SB,
      func: tireSearch,
      params:
        [
          { key: 'car', label: 'Carro', type: 'multi', path: 'specifications.cars' },
          { key: 'size', label: 'Medida', type: 'multi', path: 'specifications.sizes' },
        ]
    }
  };

  let mainConfig = FILTER_CONFIG[brand.type];
  let activeFilters = {};
  let searchQuery = '';
  let filteredProducts = [...catalog.products];
  let searchMode = 'car';

  const brandTitleEl = document.getElementById('brandTitle');
  const searchInput = document.getElementById('searchInput');
  const filtersContainerEl = document.getElementById('categoryFilters') || null;
  const productsGridEl = document.getElementById('productsGrid');
  const noResultsEl = document.getElementById('noResults');
  const modalEl = document.getElementById('productModal');
  const modalBodyEl = document.getElementById('modalBody');
  const modalCloseEl = document.getElementById('modalClose');
  const mobileFilterBtn = document.getElementById('mobileFilterBtn') || null;
  const filterBadge = document.getElementById('filterBadge') || null;
  const filterDrawer = document.getElementById('filterDrawer') || null;
  const filterDrawerContent = document.getElementById('filterDrawerContent') || null;
  const filterDrawerClose = document.getElementById('filterDrawerClose') || null;
  const filterDrawerBackdrop = document.getElementById('filterDrawerBackdrop') || null;
  const filterApplyBtn = document.getElementById('filterApplyBtn') || null;
  const tireFiltersEl = document.getElementById('tireFilters') || null;
  const suggestionsEl = document.getElementById('suggestions') || null;

  function loadFiltersFromUrl() {
    activeFilters = {};

    mainConfig.params.forEach(param => {
      const values = urlParams.getAll(param.key);
      if (values.length > 0) {
        activeFilters[param.key] = new Set(values);
      }
    });

    if (brand.type === 'tires') {
      const mode = urlParams.get('mode');
      if (mode === 'car' || mode === 'tire') {
        searchMode = mode;
      }
      const q = urlParams.get('q');
      if (q) {
        searchQuery = q;
        searchInput.value = q;
      }
    }

    return activeFilters;
  }

  function syncFiltersToUrl() {
    const urlParamsAux = new URLSearchParams();

    urlParamsAux.set('brand', brandId);

    Object.keys(activeFilters).forEach(key => {
      const values = activeFilters[key];
      if (values && values.size > 0) {
        values.forEach(value => {
          urlParamsAux.append(key, value);
        });
      }
    });

    if (brand.type === 'tires') {
      urlParamsAux.set('mode', searchMode);
      if (searchQuery) {
        urlParamsAux.set('q', searchQuery);
      }
    }

    const newUrl = window.location.pathname + '?' + urlParamsAux.toString();
    window.history.pushState({ filters: activeFilters, mode: searchMode, q: searchQuery }, '', newUrl);
  }

  function applyFiltersFromUrl() {
    loadFiltersFromUrl();
    updateFilterBadge();
    if (brand.type === 'tires') {
      updateTabsUI();
      updateSearchPlaceholder();
    }
    renderProducts();
    updateFilterUI();
  }

  function updateFilterUI() {
    document.querySelectorAll('.filter-item').forEach(item => {
      const filterKey = item.parentElement.dataset.filter;
      const value = item.dataset.value;

      if (activeFilters[filterKey] && activeFilters[filterKey].has(value)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function init() {
    if (catalog.brand.logoImage) {
      let logo = catalog.brand.logoImageWhite || catalog.brand.logoImageBlack || catalog.brand.logoImage;
      brandTitleEl.innerHTML = `<img src="${logo}" alt="${catalog.brand.name}" class="brand-title-logo">`;
    } else {
      brandTitleEl.textContent = catalog.brand.name;
    }
    loadFiltersFromUrl();
    renderFilters();
    updateFilterUI();
    if (brand.type === 'tires') {
      initTireSearch();
    }
    renderProducts();
    bindEvents();
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }

  function extractFilterValues() {
    const filterValues = {};

    mainConfig.params.forEach(param => {
      const values = {}
      const f = (value) => {
        if (value) {
          const key = typeof value === 'boolean' ? (value ? 'Si' : 'No') : value.trim();
          values[key] = (values[key] || 0) + 1;
        }
      }

      let fun;

      if (param.type === 'multi') {
        fun = (value) => {
          value.forEach(v => {
            f(v)
          })
        }
      } else {
        fun = f
      }

      catalog.products.forEach(product => {
        let value;

        if (param.path) {
          value = getNestedValue(product, param.path);
        } else {
          value = product[param.key];
        }

        fun(value)
      });
      filterValues[param.key] = values;
    });
    return filterValues
  }

  function buildFilterHtml(filterValues) {
    let html = '';
    const sortedValues = (array) => {
      return Array.from(array).sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b, 'es');
      })
    };

    mainConfig.params.forEach(param => {
      const keys = Object.keys(filterValues[param.key]);
      const values = sortedValues(keys);
      if (!values || values.length === 0) return;

      const sectionCounts = filterValues[param.key] || {};

      html += `
        <div class="filter-section">
          <h3 class="filters-title">${param.label}</h3>
          <div class="filter-options" data-filter="${param.key}">
            ${values.map(value => `
              <div class="filter-item ${activeFilters[param.key]?.has(value) ? 'active' : ''}" data-value="${escapeHtml(value)}">
                <div class="category-checkbox">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span class="filter-label">${escapeHtml(value)}</span>
                <span class="filter-count">${sectionCounts[value] || 0}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
    return html;
  }

  function renderFilters() {
    if (!(mainConfig.filter_type === FILTER_TYPE.CB)) return;

    const filterValues = extractFilterValues();
    const filtersHtml = buildFilterHtml(filterValues);

    filtersContainerEl.innerHTML = filtersHtml;
    filterDrawerContent.innerHTML = filtersHtml;
  }

  function updateFilterBadge() {
    let totalActive = 0;
    Object.values(activeFilters).forEach(set => {
      totalActive += set.size;
    });
    if (totalActive > 0) {
      filterBadge.textContent = totalActive;
      filterBadge.style.display = 'inline-flex';
    } else {
      filterBadge.style.display = 'none';
    }
  }

  function renderProducts() {
    applyFilters();
    const resultsCountEl = document.getElementById('resultsCount');
    if (resultsCountEl) {
      resultsCountEl.textContent = filteredProducts.length;
    }

    if (filteredProducts.length === 0) {
      productsGridEl.style.display = 'none';
      noResultsEl.style.display = 'flex';
      return;
    }

    productsGridEl.style.display = 'grid';
    noResultsEl.style.display = 'none';

    productsGridEl.innerHTML = filteredProducts.map((product, index) => {
      const specsList = getProductSpecsList(product, brand.type);
      const productImage = product.image ? `<img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-card-image" onerror="this.style.display='none'">` : '';

      return `
        <article class="product-card" data-id="${product.id}" style="animation-delay: ${Math.min(index * 0.05, 0.4)}s">
          ${productImage}
          <span class="product-category">${escapeHtml(product.category || 'General')}</span>
          <h3 class="product-name">${escapeHtml(product.name)}</h3>
          <p class="product-type">${escapeHtml(product.type || '')}</p>
          <div class="product-specs">
            ${specsList.slice(0, 3).map(spec => `<span class="spec-tag">${escapeHtml(String(spec))}</span>`).join('')}
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(card.dataset.id));
    });
  }

  function getProductSpecsList(product, type) {
    if (!product.specifications) return [];
    const specs = [];
    const specKeys = type === 'oil' ? ['viscosity', 'api', 'acea'] : ['cars', 'sizes'];
    for (const key of specKeys) {
      const value = product.specifications[key];
      if (value) {
        if (Array.isArray(value)) {
          specs.push(value.toSpliced(0, 2).join(', '));
        } else {
          specs.push(value);
        }
      }
    }
    return specs
  }

  function oilSearch(product) {
    const filterConfig = FILTER_CONFIG[brand.type].params || [];
    let passesFilters = true;

    for (const config of filterConfig) {
      const activeValues = activeFilters[config.key];
      if (!activeValues || activeValues.size === 0) continue;

      let productValue;
      let fun;

      const f = (value) => {
        if (value) {
          const productVal = typeof value === 'boolean' ? (value ? 'si' : 'no') : value.trim().toLowerCase();
          for (const activeVal of activeValues) {
            if (productVal === activeVal.toLowerCase()) {
              return true;
            }
          }
        }
        return false;
      }

      if (config.type === 'multi') {
        fun = (value) => {
          for (let v of value) {
            if (f(v)) {
              return true;
            }
          }
          return false;
        }
      } else {
        fun = f
      }

      if (config.path) {
        productValue = getNestedValue(product, config.path);
      } else {
        productValue = product[config.key];
      }
      
      passesFilters = passesFilters && fun(productValue)
    }

    if (searchQuery) {
      
      let searchLower = searchQuery.toLowerCase();
      let matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        (product.description && product.description.toLowerCase().includes(searchLower)) ||
        (product.type && product.type.toLowerCase().includes(searchLower)) ||
        (product.line && product.line.toLowerCase().includes(searchLower));
      passesFilters = passesFilters && matchesSearch;
    }

    return passesFilters;
  }

  function tireSearch(product) {
    if (!searchQuery) return true;
    let searchLower = searchQuery.toLowerCase();
    console.log('Searching for:', searchQuery, 'in product:', product.name);

    if (searchMode === 'car') {
      let cars = product.specifications?.cars || [];
      return cars.some(car => car.toLowerCase().includes(searchLower));
    } else {
      let sizes = product.specifications?.sizes || [];
      return sizes.some(size => size.toLowerCase().includes(searchLower));
    }
  }

  function applyFilters() {
    let filterer = FILTER_CONFIG[brand.type].func;
    filteredProducts = catalog.products.filter(filterer);
  }

  function openProductModal(productId) {
    const product = catalog.products.find(p => p.id === productId);
    if (!product) return;

    const specsHtml = renderModalSpecs(product, brand.type);
    const productImage = product.image ? `<img src="${product.image}" alt="${escapeHtml(product.name)}" class="modal-product-image" onerror="this.style.display='none'">` : '';

    modalBodyEl.innerHTML = `
      ${productImage}
      <span class="modal-category">${escapeHtml(product.category || 'General')}</span>
      <h2 class="modal-title">${escapeHtml(product.name)}</h2>
      <p class="modal-type">${escapeHtml(product.type || '')}</p>
      
      ${product.description ? `<p class="modal-description">${escapeHtml(product.description)}</p>` : ''}
      
      ${specsHtml}
      
      ${product.applications?.length ? `
        <div class="modal-section">
          <h4 class="modal-section-title">Aplicaciones</h4>
          <ul class="modal-list">
            ${product.applications.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${product.benefits?.length ? `
        <div class="modal-section">
          <h4 class="modal-section-title">Beneficios</h4>
          <ul class="modal-list">
            ${product.benefits.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${product.approvals?.length ? `
        <div class="modal-section">
          <h4 class="modal-section-title">Aprobaciones</h4>
          <ul class="modal-list">
            ${product.approvals.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${product.presentations?.length ? `
        <div class="modal-section">
          <h4 class="modal-section-title">Presentaciones</h4>
          <div class="presentations-list">
            ${product.presentations.map(p => `<span class="presentation-tag">${escapeHtml(p)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    `;

    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderModalSpecs(product, type) {
    if (type === 'oil') {
      const specsData = [];
      if (product.specifications) {
        for (const [key, value] of Object.entries(product.specifications)) {
          if (value && typeof value === 'string') {
            specsData.push({ label: ESP_ATTRIBUTES_OIL[key], value });
          } else if (Array.isArray(value) && value.length > 0) {
            specsData.push({ label: ESP_ATTRIBUTES_OIL[key], value: value.join(', ') });
          }
        }
      }

      if (!specsData.length) return '';

      return `
        <div class="modal-section">
          <h4 class="modal-section-title">Especificaciones</h4>
          <div class="modal-specs-grid">
            ${specsData.map(s => `
              <div class="spec-item">
                <span class="spec-label">${escapeHtml(s.label)}</span>
                <span class="spec-value">${escapeHtml(s.value)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      const specsData = [];
      if (product.specifications) {
        for (const [key, value] of Object.entries(product.specifications)) {
          if (value && typeof value === 'string') {
            specsData.push({ label: ESP_ATTRIBUTES_TIRE[key], value });
          } else if (Array.isArray(value) && value.length > 0) {
            specsData.push({ label: ESP_ATTRIBUTES_TIRE[key], value: value.join(', ') });
          }
        }
      }

      if (!specsData.length) return '';

      return `
        <div class="modal-section">
          <h4 class="modal-section-title">Especificaciones</h4>
          <div class="modal-specs-grid">
            ${specsData.map(s => `
              <div class="spec-item">
                <span class="spec-label">${escapeHtml(s.label)}</span>
                <span class="spec-value">${escapeHtml(s.value)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  function closeModal() {
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  function handleFilterClick(e, container) {
    const item = e.target.closest('.filter-item');
    if (!item) return;

    const filterKey = item.parentElement.dataset.filter;
    const value = item.dataset.value;

    if (!activeFilters[filterKey]) {
      activeFilters[filterKey] = new Set();
    }

    if (activeFilters[filterKey].has(value)) {
      activeFilters[filterKey].delete(value);
      item.classList.remove('active');
      if (activeFilters[filterKey].size === 0) {
        delete activeFilters[filterKey];
      }
    } else {
      activeFilters[filterKey].add(value);
      item.classList.add('active');
    }

    syncFiltersToUrl();
    updateFilterBadge();
    renderProducts();
  }

  function openFilterDrawer() {
    filterDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFilterDrawer() {
    filterDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  function bindEvents() {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (brand.type === 'tires') {
        if (searchMode === 'tire') {
          renderSizeSuggestions(searchQuery);
        } else if (searchMode === 'car') {
          renderCarSuggestions(searchQuery);
        }
      }
      renderProducts();
      syncFiltersToUrl();
    });

    if (brand.type === 'tires') {
      searchInput.addEventListener('focus', () => {
        if (searchMode === 'tire' && searchQuery) {
          renderSizeSuggestions(searchQuery);
        } else if (searchMode === 'car' && searchQuery) {
          renderCarSuggestions(searchQuery);
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-filters')) {
          closeSuggestions();
        }
      });

      if (suggestionsEl) {
        suggestionsEl.addEventListener('click', handleSuggestionClick);
      }
    }

    if (filtersContainerEl) {
      filtersContainerEl.addEventListener('click', (e) => {
        handleFilterClick(e, filtersContainerEl);
      });
    }

    if (filterDrawerContent) {
      filterDrawerContent.addEventListener('click', (e) => {
        handleFilterClick(e, filterDrawerContent);
      });
    }

    if (mobileFilterBtn) mobileFilterBtn.addEventListener('click', openFilterDrawer);
    if (filterDrawerClose) filterDrawerClose.addEventListener('click', closeFilterDrawer);
    if (filterDrawerBackdrop) filterDrawerBackdrop.addEventListener('click', closeFilterDrawer);
    if (filterApplyBtn) filterApplyBtn.addEventListener('click', closeFilterDrawer);

    modalCloseEl.addEventListener('click', closeModal);
    modalEl.querySelector('.modal-backdrop').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modalEl.classList.contains('active')) {
          closeModal();
        }
        if (filterDrawer.classList.contains('active')) {
          closeFilterDrawer();
        }
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
          dropdown.removeAttribute('open');
        });
      }
    });

    window.addEventListener('popstate', (e) => {
      applyFiltersFromUrl();
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Tire Search Functions
  function initTireSearch() {
    const searchTabs = document.querySelectorAll('.search-tab');
    if (tireFiltersEl) {
      tireFiltersEl.style.display = 'block';
    }
    updateSearchPlaceholder();
    updateTabsUI();

    searchTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mode = tab.dataset.tab;
        switchSearchMode(mode);
      });
    });
  }

  function switchSearchMode(mode) {
    searchMode = mode;
    updateTabsUI();
    updateSearchPlaceholder();
    syncFiltersToUrl();
  }

  function updateTabsUI() {
    document.querySelectorAll('.search-tab').forEach(tab => {
      if (tab.dataset.tab === searchMode) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function updateSearchPlaceholder() {
    if (searchMode === 'car') {
      searchInput.placeholder = 'Buscar por auto (ej. Toyota Corolla)...';
    } else {
      searchInput.placeholder = 'Buscar por medida (ej. 205/55 R17)...';
    }
  }

  function renderSizeSuggestions(query) {
    if (!query || searchMode !== 'tire') {
      if (suggestionsEl) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
      }
      return;
    }

    const sizesSet = new Set();
    catalog.products.forEach(product => {
      const sizes = product.specifications?.sizes;
      if (!sizes) return;
      const sizeArray = Array.isArray(sizes) ? sizes : [sizes];
      sizeArray.forEach(size => sizesSet.add(size));
    });

    const matchingSizes = [...sizesSet].filter(size =>
      size.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (matchingSizes.length === 0) {
      if (suggestionsEl) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
      }
      return;
    }

    if (suggestionsEl) {
      suggestionsEl.innerHTML = matchingSizes.map(size => {
        const highlighted = size.replace(new RegExp(`(${query})`, 'gi'), '<strong>$1</strong>');
        return `<div class="size-suggestion-item" data-size="${escapeHtml(size)}">${highlighted}</div>`;
      }).join('');
      suggestionsEl.classList.add('active');
    }
  }

  function renderCarSuggestions(query) {
    if (!query || searchMode !== 'car') {
      if (suggestionsEl) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
      }
      return;
    }

    const carsSet = new Set();
    catalog.products.forEach(product => {
      const cars = product.specifications?.cars;
      if (!cars) return;
      const carArray = Array.isArray(cars) ? cars : [cars];
      carArray.forEach(car => carsSet.add(car));
    });

    const matchingCars = [...carsSet].filter(car =>
      car.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (matchingCars.length === 0) {
      if (suggestionsEl) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
      }
      return;
    }

    if (suggestionsEl) {
      suggestionsEl.innerHTML = matchingCars.map(car => {
        const highlighted = car.replace(new RegExp(`(${query})`, 'gi'), '<strong>$1</strong>');
        return `<div class="size-suggestion-item" data-car="${escapeHtml(car)}">${highlighted}</div>`;
      }).join('');
      suggestionsEl.classList.add('active');
    }
  }

  function handleSuggestionClick(e) {
    const sizeItem = e.target.closest('.size-suggestion-item[data-size]');
    const carItem = e.target.closest('.size-suggestion-item[data-car]');

    if (sizeItem) {
      const size = sizeItem.dataset.size;
      searchInput.value = size;
      searchQuery = size;
      closeSuggestions();
      renderProducts();
      syncFiltersToUrl();
    } else if (carItem) {
      const car = carItem.dataset.car;
      searchInput.value = car;
      searchQuery = car;
      closeSuggestions();
      renderProducts();
      syncFiltersToUrl();
    }
  }

  function closeSuggestions() {
    if (suggestionsEl) {
      suggestionsEl.classList.remove('active');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
