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
      { key: 'car', label: 'Carro', type: 'single', path: 'specifications.car' },
      { key: 'size', label: 'Medida', type: 'single', path: 'specifications.size' },
    ]
  };

  let activeFilters = {};
  let searchQuery = '';
  let filteredProducts = [...catalog.products];

  const brandTitleEl = document.getElementById('brandTitle');
  const searchInput = document.getElementById('searchInput');
  const filtersContainerEl = document.getElementById('categoryFilters');
  const resultsCountEl = document.getElementById('resultsCount');
  const productsGridEl = document.getElementById('productsGrid');
  const noResultsEl = document.getElementById('noResults');
  const modalEl = document.getElementById('productModal');
  const modalBodyEl = document.getElementById('modalBody');
  const modalCloseEl = document.getElementById('modalClose');
  const mobileFilterBtn = document.getElementById('mobileFilterBtn');
  const filterBadge = document.getElementById('filterBadge');
  const filterDrawer = document.getElementById('filterDrawer');
  const filterDrawerContent = document.getElementById('filterDrawerContent');
  const filterDrawerClose = document.getElementById('filterDrawerClose');
  const filterDrawerBackdrop = document.getElementById('filterDrawerBackdrop');
  const filterApplyBtn = document.getElementById('filterApplyBtn');

  function loadFiltersFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterConfig = FILTER_CONFIG[brand.type] || [];

    activeFilters = {};

    filterConfig.forEach(config => {
      const values = urlParams.getAll(config.key);
      if (values.length > 0) {
        activeFilters[config.key] = new Set(values);
      }
    });

    return activeFilters;
  }

  function syncFiltersToUrl() {
    const urlParams = new URLSearchParams();

    urlParams.set('brand', brandId);

    Object.keys(activeFilters).forEach(key => {
      const values = activeFilters[key];
      if (values && values.size > 0) {
        values.forEach(value => {
          urlParams.append(key, value);
        });
      }
    });

    const newUrl = window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({ filters: activeFilters }, '', newUrl);
  }

  function applyFiltersFromUrl() {
    loadFiltersFromUrl();
    updateFilterBadge();
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

    if (advancedFilters.length > 0) {
      const advancedCounts = advancedFilters.reduce((acc, config) => {
        const values = filterValues[config.key];
        if (values) acc[config.key] = values.length;
        return acc;
      }, {});
      const totalOptions = Object.values(advancedCounts).reduce((a, b) => a + b, 0);

      html += `
        <div class="filter-section advanced-filters-section">
          <details class="advanced-filters-dropdown">
            <summary class="advanced-filters-header">
              <h3 class="filters-title">Filtros Avanzados</h3>
              <span class="advanced-filters-count">${totalOptions} opciones</span>
              <svg class="advanced-filters-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </summary>
            <div class="advanced-filters-content">
              ${advancedFilters.map(config => {
        const values = filterValues[config.key];
        if (!values || values.length === 0) return '';
        const sectionCounts = counts[config.key] || {};
        return `
                  <div class="filter-section">
                    <h4 class="filters-subtitle">${config.label}</h4>
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
      }).join('')}
            </div>
          </details>
        </div>
      `;
    }

    return html;
  }

  function renderFilters() {
    const filterConfig = FILTER_CONFIG[brand.type] || [];
    const filterValues = extractFilterValues(catalog.products, filterConfig);

    const allCounts = {};
    filterConfig.forEach(config => {
      allCounts[config.key] = countFilterValues(catalog.products, filterConfig, config.key);
    });

    const filtersHtml = buildFilterHtml(filterConfig, filterValues, allCounts);

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
    if (!resultsCountEl) {
      const countEl = filtersContainerEl.querySelector('.results-count span');
      if (countEl) countEl.textContent = filteredProducts.length;
    } else {
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
    if (type === 'oil') {
      const specs = [];
      if (product.specifications?.viscosity) specs.push(product.specifications.viscosity);
      if (product.specifications?.api?.length) specs.push(...product.specifications.api.slice(0, 2));
      if (product.specifications?.acea?.length) specs.push(...product.specifications.acea.slice(0, 1));
      return specs;
    } else {
      const specs = [];
      if (product.specifications?.size) specs.push(product.specifications.size);
      if (product.specifications?.season) specs.push(product.specifications.season);
      if (product.specifications?.speedRating) specs.push(product.specifications.speedRating);
      return specs;
    }
  }

  function applyFilters() {
    const filterConfig = FILTER_CONFIG[brand.type] || [];

    filteredProducts = catalog.products.filter(product => {
      if (searchQuery) {
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

      if (product.specifications?.viscosity) {
        specsData.push({ label: 'Viscosidad SAE', value: product.specifications.viscosity });
      }
      if (product.specifications?.api?.length) {
        specsData.push({ label: 'API', value: product.specifications.api.join(', ') });
      }
      if (product.specifications?.acea?.length) {
        specsData.push({ label: 'ACEA', value: product.specifications.acea.join(', ') });
      }
      if (product.specifications?.ilsac?.length) {
        specsData.push({ label: 'ILSAC', value: product.specifications.ilsac.join(', ') });
      }
      if (product.specifications?.jaso?.length) {
        specsData.push({ label: 'JASO', value: product.specifications.jaso.join(', ') });
      }
      if (product.specifications?.nmma?.length) {
        specsData.push({ label: 'NMMA', value: product.specifications.nmma.join(', ') });
      }
      if (product.specifications?.oem?.length) {
        specsData.push({ label: 'OEM', value: product.specifications.oem.join(', ') });
      }
      if (product.specifications?.compatibility?.length) {
        specsData.push({ label: 'Compatibilidad', value: product.specifications.compatibility.join(', ') });
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

      if (product.specifications?.size) {
        specsData.push({ label: 'Medida', value: product.specifications.size });
      }
      if (product.specifications?.season) {
        specsData.push({ label: 'Temporada', value: product.specifications.season });
      }
      if (product.specifications?.speedRating) {
        specsData.push({ label: 'Índice de Velocidad', value: product.specifications.speedRating });
      }
      if (product.specifications?.loadIndex) {
        specsData.push({ label: 'Índice de Carga', value: product.specifications.loadIndex });
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
      renderProducts();
    });

    filtersContainerEl.addEventListener('click', (e) => {
      handleFilterClick(e, filtersContainerEl);
    });

    filterDrawerContent.addEventListener('click', (e) => {
      handleFilterClick(e, filterDrawerContent);
    });

    mobileFilterBtn.addEventListener('click', openFilterDrawer);
    filterDrawerClose.addEventListener('click', closeFilterDrawer);
    filterDrawerBackdrop.addEventListener('click', closeFilterDrawer);
    filterApplyBtn.addEventListener('click', closeFilterDrawer);

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
