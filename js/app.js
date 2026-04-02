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

  const FILTER_CONFIG = {
    oil: [
      { key: 'category', label: 'Categoría', type: 'single' },
      { key: 'line', label: 'Línea', type: 'single', path: 'line' },
      { key: 'presentations', label: 'Presentaciones', type: 'multi', path: 'presentations' },
      { key: 'viscosity', label: 'Viscosidad SAE', type: 'single', path: 'specifications.viscosity' },
    ],
    tires: [
      { key: 'car', label: 'Carro', type: 'multi', path: 'specifications.cars' },
      { key: 'size', label: 'Medida', type: 'multi', path: 'specifications.sizes' },
    ]
  };

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
  const sizeSuggestionsEl = document.getElementById('sizeSuggestions') || null;

  function loadFiltersFromUrl() {
    const filterConfig = FILTER_CONFIG[brand.type] || [];

    activeFilters = {};

    filterConfig.forEach(config => {
      const values = urlParams.getAll(config.key);
      if (values.length > 0) {
        activeFilters[config.key] = new Set(values);
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
    applyFilters();
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
    applyFilters();
    renderProducts();
    bindEvents();
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }

  function extractFilterValues(products, filterConfig) {
    const filterValues = {};

    filterConfig.forEach(config => {
      const values = new Set();

      products.forEach(product => {
        let value;

        if (config.path) {
          value = getNestedValue(product, config.path);
        } else {
          value = product[config.key];
        }

        if (Array.isArray(value)) {
          value.forEach(v => {
            if (v && typeof v === 'string' && v.trim()) {
              values.add(v.trim());
            }
          });
        } else if (value && typeof value === 'string' && value.trim()) {
          values.add(value.trim());
        } else if (typeof value === 'boolean') {
          values.add(value ? 'Sí' : 'No');
        }
      });

      const sortedValues = Array.from(values).sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b, 'es');
      });

      filterValues[config.key] = sortedValues;
    });

    console.log('Extracted Filter Values:', filterValues);
    return filterValues;
  }

  function countFilterValues(products, filterConfig, filterKey) {
    const counts = {};
    const config = filterConfig.find(c => c.key === filterKey);
    if (!config) return {};

    products.forEach(product => {
      let value;
      if (config.path) {
        value = getNestedValue(product, config.path);
      } else {
        value = product[config.key];
      }

      if (Array.isArray(value)) {
        value.forEach(v => {
          if (v && typeof v === 'string' && v.trim()) {
            counts[v.trim()] = (counts[v.trim()] || 0) + 1;
          }
        });
      } else if (value && typeof value === 'string' && value.trim()) {
        const val = value.trim();
        counts[val] = (counts[val] || 0) + 1;
      } else if (typeof value === 'boolean') {
        const val = value ? 'Sí' : 'No';
        counts[val] = (counts[val] || 0) + 1;
      }
    });

    return counts;
  }

  function buildFilterHtml(filterConfig, filterValues, counts) {
    const basicFilters = filterConfig.filter(f => !f.advanced);
    const advancedFilters = filterConfig.filter(f => f.advanced);
    let html = '';

    basicFilters.forEach(config => {
      const values = filterValues[config.key];
      if (!values || values.length === 0) return;

      const sectionCounts = counts[config.key] || {};

      html += `
        <div class="filter-section">
          <h3 class="filters-title">${config.label}</h3>
          <div class="filter-options" data-filter="${config.key}">
            ${values.map(value => `
              <div class="filter-item ${activeFilters[config.key]?.has(value) ? 'active' : ''}" data-value="${escapeHtml(value)}">
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

    // if (advancedFilters.length > 0) {
    //   const advancedCounts = advancedFilters.reduce((acc, config) => {
    //     const values = filterValues[config.key];
    //     if (values) acc[config.key] = values.length;
    //     return acc;
    //   }, {});
    //   const totalOptions = Object.values(advancedCounts).reduce((a, b) => a + b, 0);

    //   html += `
    //     <div class="filter-section advanced-filters-section">
    //       <details class="advanced-filters-dropdown">
    //         <summary class="advanced-filters-header">
    //           <h3 class="filters-title">Filtros Avanzados</h3>
    //           <span class="advanced-filters-count">${totalOptions} opciones</span>
    //           <svg class="advanced-filters-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    //             <polyline points="6 9 12 15 18 9"/>
    //           </svg>
    //         </summary>
    //         <div class="advanced-filters-content">
    //           ${advancedFilters.map(config => {
    //     const values = filterValues[config.key];
    //     if (!values || values.length === 0) return '';
    //     const sectionCounts = counts[config.key] || {};
    //     return `
    //               <div class="filter-section">
    //                 <h4 class="filters-subtitle">${config.label}</h4>
    //                 <div class="filter-options" data-filter="${config.key}">
    //                   ${values.map(value => `
    //                     <div class="filter-item ${activeFilters[config.key]?.has(value) ? 'active' : ''}" data-value="${escapeHtml(value)}">
    //                       <div class="category-checkbox">
    //                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
    //                           <polyline points="20 6 9 17 4 12"/>
    //                         </svg>
    //                       </div>
    //                       <span class="filter-label">${escapeHtml(value)}</span>
    //                       <span class="filter-count">${sectionCounts[value] || 0}</span>
    //                     </div>
    //                   `).join('')}
    //                 </div>
    //               </div>
    //             `;
    //   }).join('')}
    //         </div>
    //       </details>
    //     </div>
    //   `;
    // }

    return html;
  }

  function renderFilters() {
    if (!filtersContainerEl) return;

    const filterConfig = FILTER_CONFIG[brand.type] || [];
    const filterValues = extractFilterValues(catalog.products, filterConfig);

    const allCounts = {};
    filterConfig.forEach(config => {
      allCounts[config.key] = countFilterValues(catalog.products, filterConfig, config.key);
    });


    const filtersHtml = buildFilterHtml(filterConfig, filterValues, allCounts);

    filtersContainerEl.innerHTML = filtersHtml;

    if (filterDrawerContent) {
      filterDrawerContent.innerHTML = filtersHtml;
    }
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
    if (!resultsCountEl && filtersContainerEl) {
      const countEl = filtersContainerEl.querySelector('.results-count span');
      if (countEl) countEl.textContent = filteredProducts.length;
    } else if (resultsCountEl) {
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
    const specKeys = type === 'oil' ? ['viscosity', 'api', 'acea'] : ['sizes', 'season', 'speedRating'];
    for (const key of specKeys) {
      const value = product.specifications[key];
      if (value) {
        if (Array.isArray(value)) {
          specs.push(value.splice(0, 2).join(', '));
        } else {
          specs.push(value);
        }
      }
    }
    return specs
  }

  function applyFilters() {
    const filterConfig = FILTER_CONFIG[brand.type] || [];

    filteredProducts = catalog.products.filter(product => {
      if (brand.type === 'tires') {
        if (!tireSearchFilter(product, searchQuery)) return false;
      } else if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          (product.description && product.description.toLowerCase().includes(searchLower)) ||
          (product.type && product.type.toLowerCase().includes(searchLower)) ||
          (product.line && product.line.toLowerCase().includes(searchLower));

        if (!matchesSearch) return false;
      }

      for (const config of filterConfig) {
        const activeValues = activeFilters[config.key];
        if (!activeValues || activeValues.size === 0) continue;

        let productValue;
        if (config.path) {
          productValue = getNestedValue(product, config.path);
        } else {
          productValue = product[config.key];
        }

        let matches = false;

        if (Array.isArray(productValue)) {
          const productValues = productValue.map(v => v.trim().toLowerCase());
          for (const activeVal of activeValues) {
            if (productValues.includes(activeVal.toLowerCase())) {
              matches = true;
              break;
            }
          }
        } else if (productValue && typeof productValue === 'string') {
          const productVal = productValue.trim().toLowerCase();
          for (const activeVal of activeValues) {
            if (productVal === activeVal.toLowerCase()) {
              matches = true;
              break;
            }
          }
        }

        if (!matches) return false;
      }

      return true;
    });
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
      if (brand.type === 'tires' && searchMode === 'tire') {
        renderSizeSuggestions(searchQuery);
      }
      applyFilters();
      renderProducts();
      syncFiltersToUrl();
    });

    if (brand.type === 'tires') {
      searchInput.addEventListener('focus', () => {
        if (searchMode === 'tire' && searchQuery) {
          renderSizeSuggestions(searchQuery);
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-filters')) {
          closeSizeSuggestions();
        }
      });

      if (sizeSuggestionsEl) {
        sizeSuggestionsEl.addEventListener('click', handleSuggestionClick);
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

  function tireSearchFilter(product, query) {
    if (!query) return true;

    const searchLower = query.toLowerCase();

    if (searchMode === 'car') {
      const cars = product.specifications?.cars || [];
      return cars.some(car => car.toLowerCase().includes(searchLower));
    } else {
      const sizes = product.specifications?.sizes;
      if (!sizes) return false;
      const sizeArray = Array.isArray(sizes) ? sizes : [sizes];
      return sizeArray.some(size => size.toLowerCase().includes(searchLower));
    }
  }

  function renderSizeSuggestions(query) {
    if (!query || searchMode !== 'tire') {
      if (sizeSuggestionsEl) {
        sizeSuggestionsEl.classList.remove('active');
        sizeSuggestionsEl.innerHTML = '';
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
      if (sizeSuggestionsEl) {
        sizeSuggestionsEl.classList.remove('active');
        sizeSuggestionsEl.innerHTML = '';
      }
      return;
    }

    if (sizeSuggestionsEl) {
      sizeSuggestionsEl.innerHTML = matchingSizes.map(size => {
        const highlighted = size.replace(new RegExp(`(${query})`, 'gi'), '<strong>$1</strong>');
        return `<div class="size-suggestion-item" data-size="${escapeHtml(size)}">${highlighted}</div>`;
      }).join('');
      sizeSuggestionsEl.classList.add('active');
    }
  }

  function handleSuggestionClick(e) {
    const item = e.target.closest('.size-suggestion-item');
    if (!item) return;

    const size = item.dataset.size;
    searchInput.value = size;
    searchQuery = size;
    renderSizeSuggestions('');
    applyFilters();
    renderProducts();
    syncFiltersToUrl();
  }

  function closeSizeSuggestions() {
    if (sizeSuggestionsEl) {
      sizeSuggestionsEl.classList.remove('active');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
