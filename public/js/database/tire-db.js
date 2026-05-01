const TireDB = (function() {
  let tireSizes = null;
  let carsData = null;
  let compatibilityData = null;
  let isLoaded = false;

  async function loadData() {
    if (isLoaded) return;
    
    try {
      const [sizesRes, carsRes, compRes] = await Promise.all([
        fetch('./js/database/tire-sizes.json'),
        fetch('./js/database/cars.json'),
        fetch('./js/database/compatibility.json')
      ]);
      
      tireSizes = (await sizesRes.json()).sizes;
      carsData = (await carsRes.json()).brands;
      compatibilityData = (await compRes.json()).compatibility;
      isLoaded = true;
    } catch (error) {
      console.error('Error loading tire database:', error);
    }
  }

  function parseCarQuery(query) {
    const lower = query.toLowerCase();
    const result = { brand: null, model: null, year: null, trim: null };
    
    const yearMatch = lower.match(/\b(19|20)\d{2}\b/);
    if (yearMatch) {
      result.year = parseInt(yearMatch[0], 10);
    }

    const words = lower.replace(/\b(19|20)\d{2}\b/g, '').trim().split(/\s+/).filter(w => w.length > 1);
    return { ...result, searchWords: words };
  }

  function findMatchingCars(query) {
    const parsed = parseCarQuery(query);
    const matches = [];

    carsData.forEach(brand => {
      const brandMatch = parsed.searchWords.some(w => brand.name.toLowerCase().includes(w)) || 
                        (parsed.searchWords.length === 0 && brand.name.toLowerCase().startsWith(parsed.searchWords[0] || ''));
      
      if (brandMatch || !parsed.searchWords.length) {
        brand.models.forEach(model => {
          const modelMatch = parsed.searchWords.some(w => model.name.toLowerCase().includes(w));
          
          if (brandMatch && modelMatch || parsed.searchWords.length <= 1) {
            model.years.forEach(year => {
              if (parsed.year && parsed.year !== year) return;
              
              model.trims.forEach(trim => {
                const trimMatch = parsed.trim ? trim.toLowerCase().includes(parsed.trim.toLowerCase()) : true;
                if (trimMatch) {
                  matches.push({
                    brand: brand.name,
                    brandId: brand.id,
                    model: model.name,
                    modelId: model.id,
                    year: year,
                    trim: trim,
                    display: `${brand.name} ${model.name} ${year} ${trim}`
                  });
                }
              });
            });
          }
        });
      }
    });

    return matches.slice(0, 20);
  }

  function getCompatibleSizes(brandId, modelId, year, trim) {
    if (!isLoaded) return [];
    
    const matching = compatibilityData.filter(c => {
      if (c.brandId !== brandId || c.modelId !== modelId) return false;
      if (year && !c.years.includes(year)) return false;
      if (trim && !c.trims.includes(trim)) return false;
      return true;
    });

    const sizeIds = [...new Set(matching.map(m => m.sizeId))];
    
    return tireSizes
      .filter(s => sizeIds.includes(s.id))
      .map(s => s.display);
  }

  function getCompatibleSizeIds(brandId, modelId, year, trim) {
    if (!isLoaded) return [];
    
    const matching = compatibilityData.filter(c => {
      if (c.brandId !== brandId || c.modelId !== modelId) return false;
      if (year && !c.years.includes(year)) return false;
      if (trim && !c.trims.includes(trim)) return false;
      return true;
    });

    return [...new Set(matching.map(m => m.sizeId))];
  }

  function getSizeById(id) {
    return tireSizes.find(s => s.id === id);
  }

  function searchSizes(query) {
    if (!isLoaded) return [];
    const lower = query.toLowerCase();
    return tireSizes
      .filter(s => s.display.toLowerCase().includes(lower))
      .map(s => s.display);
  }

  function getCarsForSize(sizeDisplay) {
    if (!isLoaded) return [];
    
    const size = tireSizes.find(s => s.display === sizeDisplay);
    if (!size) return [];

    const matching = compatibilityData.filter(c => c.sizeId === size.id);
    const cars = [];

    matching.forEach(comp => {
      const brand = carsData.find(b => b.id === comp.brandId);
      if (!brand) return;
      
      const model = brand.models.find(m => m.id === comp.modelId);
      if (!model) return;

      comp.years.forEach(year => {
        comp.trims.forEach(trim => {
          cars.push({
            brand: brand.name,
            brandId: brand.id,
            model: model.name,
            modelId: model.id,
            year: year,
            trim: trim,
            display: `${brand.name} ${model.name} ${year} ${trim}`
          });
        });
      });
    });

    return [...new Set(cars.map(c => c.display))];
  }

  function getCarsForSizeIds(sizeIds) {
    if (!isLoaded || !Array.isArray(sizeIds) || sizeIds.length === 0) return [];
    
    const cars = new Set();
    
    sizeIds.forEach(sizeId => {
      const matching = compatibilityData.filter(c => c.sizeId === sizeId);
      
      matching.forEach(comp => {
        const brand = carsData.find(b => b.id === comp.brandId);
        if (!brand) return;
        
        const model = brand.models.find(m => m.id === comp.modelId);
        if (!model) return;

        cars.add(`${brand.name} ${model.name}`);
      });
    });

    return Array.from(cars).sort();
  }

  function getAllCarDisplays() {
    if (!isLoaded) return [];
    
    const displays = [];
    carsData.forEach(brand => {
      brand.models.forEach(model => {
        model.years.forEach(year => {
          model.trims.forEach(trim => {
            displays.push({
              brand: brand.name,
              brandId: brand.id,
              model: model.name,
              modelId: model.id,
              year: year,
              trim: trim,
              display: `${brand.name} ${model.name} ${year} ${trim}`
            });
          });
        });
      });
    });
    return displays;
  }

  function searchCarsAdvanced(brand, model, year, trim) {
    if (!isLoaded) return [];
    
    return carsData
      .filter(b => !brand || b.name.toLowerCase().includes(brand.toLowerCase()) || b.id === brand)
      .flatMap(b => b.models.filter(m => !model || m.name.toLowerCase().includes(model.toLowerCase()) || m.id === model))
      .flatMap(m => {
        const yearMatch = m.years.filter(y => !year || y === year);
        return yearMatch.map(y => ({
          brand: carsData.find(b => b.models.includes(m)).name,
          brandId: carsData.find(b => b.models.includes(m)).id,
          model: m.name,
          modelId: m.id,
          year: y,
          trims: m.trims.filter(t => !trim || t.toLowerCase().includes(trim.toLowerCase())),
          display: `${carsData.find(b => b.models.includes(m)).name} ${m.name} ${y}`
        }));
      })
      .filter(c => !trim || c.trims.length > 0)
      .slice(0, 30);
  }

  return {
    init: loadData,
    isReady: () => isLoaded,
    parseCarQuery,
    findMatchingCars,
    getCompatibleSizes,
    getCompatibleSizeIds,
    getSizeById,
    searchSizes,
    getCarsForSize,
    getCarsForSizeIds,
    getAllCarDisplays,
    searchCarsAdvanced
  };
})();