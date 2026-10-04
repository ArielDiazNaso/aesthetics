/**
 * X AESTHETICS STUDIO — INTERACTIVE CLIENT EXPERIENCE
 * Boutique Beauty Studio · Mar del Plata, Argentina
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 01. SOURCE OF TRUTH SERVICES DATA
  // Full verified service menu organized into elegant categories
  // ------------------------------------------------------------------------
  const SERVICES_DATA = [
    // MANICURÍA / UÑAS
    {
      id: 'unas-manicuria',
      title: 'Manicuria',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Belleza y acondicionamiento integral de cutículas, limado anatómico y nutrición para tus manos.'
    },
    {
      id: 'unas-belleza-manos',
      title: 'Belleza de manos',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Cuidado completo con hidratación profunda, exfoliación suave y acabado natural pulido.'
    },
    {
      id: 'unas-esculpidas-poligel',
      title: 'Esculpidas en poligel',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Extensión y esculpido estructural con poligel, combinando la flexibilidad del gel con la resistencia acrílica.'
    },
    {
      id: 'unas-esculpidas-escultoricas',
      title: 'Esculpidas escultóricas',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Esculpido avanzado con moldes para lograr una arquitectura perfecta, curvas C y ápice estilizado.'
    },
    {
      id: 'unas-kapping',
      title: 'Kapping',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Capa protectora de refuerzo en gel o acrílico que previene quiebres y permite el crecimiento natural de tu uña.'
    },
    {
      id: 'unas-manos-tradicional',
      title: 'Manos: esmaltado tradicional',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Esmaltado clásico de secado al aire con esmaltes de alta pigmentación y brillo espejo.'
    },
    {
      id: 'unas-nailart-basico',
      title: 'Nail art básico',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Detalles minimalistas sutiles: micro-líneas, puntos, contrastes geométricos o francesita clásica.'
    },
    {
      id: 'unas-nailart-complejo',
      title: 'Nail art complejo',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Diseños elaborados a mano alzada, degradés, efectos cromados, carey o apliques en varias uñas.'
    },
    {
      id: 'unas-nailart-full',
      title: 'Nail art full',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Composición artística editorial completa en las diez uñas con técnicas mixtas, texturas y pedrería.'
    },
    {
      id: 'unas-retirado-tradicional',
      title: 'Retirado de esmaltado tradicional',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Remoción suave y acondicionamiento con aceites esenciales nutritivos.'
    },
    {
      id: 'unas-retirado-uv',
      title: 'Retirado servicio UV',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Remoción profesional de esmalte semipermanente o gel preservando la integridad de la placa ungueal.'
    },
    {
      id: 'unas-semipermanente',
      title: 'Semipermanente',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Esmaltado de larga duración curado en cabina LED/UV con acabado brillante e impecable por semanas.'
    },
    {
      id: 'unas-service-acrilico',
      title: 'Service esculpidas en acrílico',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Mantenimiento periódico, rebalance de ápice, relleno de crecimiento y sellado perimetral.'
    },
    {
      id: 'unas-service-poligel',
      title: 'Service esculpidas en poligel',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Nivelación, reposicionamiento morfológico y renovación estética de tus uñas de poligel.'
    },
    {
      id: 'unas-service-escultoricas',
      title: 'Service escultóricas',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Rebalance técnico de precisión para estructuras escultóricas complejas.'
    },
    {
      id: 'unas-servicio-especial-13',
      title: 'Servicio especial -13',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Cuidado delicado y esmaltado adaptado especialmente para menores de 13 años.'
    },
    {
      id: 'unas-softgel',
      title: 'Soft gel',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'Tips de gel completos ultraligeros adheridos con gel constructor para un alargamiento rápido y natural.'
    },
    {
      id: 'unas-esculpidas-acrilico',
      title: 'Uñas esculpidas en acrílico',
      category: 'unas',
      categoryLabel: 'Uñas & Manicuría',
      description: 'El clásico por excelencia de máxima firmeza, esculpido meticulosamente según tu forma deseada.'
    },

    // PIES / PEDICURÍA
    {
      id: 'pies-belleza-spa',
      title: 'Belleza de pies completa con spa',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Exfoliación profunda, tratamiento de durezas, mascarilla revitalizante, masaje y acabado perfecto.'
    },
    {
      id: 'pies-combo-1',
      title: 'Combo 1: semi manos y semi pies',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Servicio integral combinado de esmaltado semipermanente de alta duración para manos y pies.'
    },
    {
      id: 'pies-manicuria-rusa',
      title: 'Manicuría rusa',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Técnica en seco con torno de alta precisión que limpia el área perimetral logrando un esmaltado al ras.'
    },
    {
      id: 'pies-pedicuria',
      title: 'Pedicuría',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Cuidado estético integral del pie: corte y limado correcto de uñas, pulido y acondicionamiento.'
    },
    {
      id: 'pies-pedicuria-semi',
      title: 'Pedicuría + esmaltado semipermanente',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Pedicuría completa con esmaltado semipermanente curado en cabina para máxima duración.'
    },
    {
      id: 'pies-nailart-full',
      title: 'Pies: nail art full',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Diseño artístico completo y personalizado en uñas de pies para combinar con tus looks.'
    },
    {
      id: 'pies-retirado-semi',
      title: 'Pies: retirado semipermanente',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Retiro no invasivo del esmalte semipermanente con hidratación de la placa ungueal.'
    },
    {
      id: 'pies-retirado-tradicional',
      title: 'Pies: retirado tradicional',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Remoción de esmalte tradicional y acondicionamiento podológico.'
    },
    {
      id: 'pies-reconstruccion',
      title: 'Reconstrucción',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Reconstrucción estética y anatómica de uñas dañadas o con alteraciones morfológicas.'
    },
    {
      id: 'pies-semi-pies',
      title: 'Semipermanente en pies',
      category: 'pies',
      categoryLabel: 'Pies & Pedicuría',
      description: 'Esmaltado en gel duradero con brillo inalterable para tus pies.'
    },

    // MIRADA & CEJAS
    {
      id: 'mirada-asesoria-micro',
      title: 'Asesoría microblanding',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Consulta morfológica previa, diseño visagista y análisis de tono para determinar el trazo perfecto.'
    },
    {
      id: 'mirada-extensiones-volumen',
      title: 'Extensión de pestañas: volumen',
      category: 'pestanas',
      secondaryCategory: 'mirada',
      categoryLabel: 'Mirada & Pestañas',
      description: 'Técnica de abanicos livianos aplicados pelo a pelo para dar densidad, espesor y apertura a tu mirada.'
    },
    {
      id: 'mirada-henna',
      title: 'Henna',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Tinte vegetal botánico que colorea tanto el vello como la piel, generando un efecto sombra definido.'
    },
    {
      id: 'mirada-kapping-poli',
      title: 'Kapping en poli o acrílico',
      category: 'mirada',
      categoryLabel: 'Mirada & Tratamientos',
      description: 'Tratamiento técnico especializado de refuerzo.'
    },
    {
      id: 'mirada-laminado',
      title: 'Laminado',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Direccionamiento y fijación del vello natural para lograr un marco de cejas peinado, dócil y con volumen visual.'
    },
    {
      id: 'mirada-lifting-con-tinte',
      title: 'Lifting con tinte',
      category: 'pestanas',
      secondaryCategory: 'mirada',
      categoryLabel: 'Mirada & Pestañas',
      description: 'Elevación y curvatura duradera desde la raíz complementada con tinte negro intenso para mirada abierta.'
    },
    {
      id: 'mirada-lifting-sin-tinte',
      title: 'Lifting sin tinte',
      category: 'pestanas',
      secondaryCategory: 'mirada',
      categoryLabel: 'Mirada & Pestañas',
      description: 'Arqueado natural y levantamiento de tus propias pestañas sin aporte de pigmento adicional.'
    },
    {
      id: 'mirada-microblanding',
      title: 'Microblanding',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Micropigmentación semipermanente trazo a trazo que simula pelos reales para redefinir y poblar tus cejas.'
    },
    {
      id: 'mirada-combo-1',
      title: 'Mirada: combo 1 perfilado + laminado + lifting',
      category: 'mirada',
      secondaryCategory: 'pestanas',
      categoryLabel: 'Mirada & Pestañas',
      description: 'El tratamiento estrella integral: diseño de cejas, fijación de volumen y curvatura intensa de pestañas.'
    },
    {
      id: 'mirada-correccion',
      title: 'Mirada: corrección de mala praxis',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Evaluación personalizada, rectificación o neutralización de trabajos previos de cejas o pestañas.'
    },
    {
      id: 'mirada-retirado-colega',
      title: 'Mirada: retirado de otro colega',
      category: 'pestanas',
      secondaryCategory: 'mirada',
      categoryLabel: 'Mirada & Pestañas',
      description: 'Remoción cuidada y segura de extensiones de pestañas colocadas en otros establecimientos.'
    },
    {
      id: 'mirada-service',
      title: 'Mirada: service',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Mantenimiento programado para preservar la forma, curvatura y frescura de tus tratamientos de mirada.'
    },
    {
      id: 'mirada-perfilado-henna',
      title: 'Perfilado + henna',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Diseño visagista de cejas a medida complementado con sombreado de henna botánica.'
    },
    {
      id: 'mirada-perfilado-cera',
      title: 'Perfilado con cera',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Limpieza y definición precisa de los contornos de tus cejas mediante cera hipoalergénica delicada.'
    },
    {
      id: 'mirada-perfilado-express',
      title: 'Perfilado express',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Alineación ágil y prolija respetando la forma y armonía natural de tus cejas.'
    },
    {
      id: 'mirada-perfilado-full',
      title: 'Perfilado full',
      category: 'mirada',
      categoryLabel: 'Mirada & Cejas',
      description: 'Diseño morfológico completo con pinza de precisión, recorte milimétrico y definición profunda.'
    },

    // PESTAÑAS (Específicos)
    {
      id: 'pestanas-tinte',
      title: 'Tinte de pestañas',
      category: 'pestanas',
      categoryLabel: 'Pestañas',
      description: 'Pigmentación profunda desde la base para resaltar el largo y grosor de tus pestañas sin máscara de pestañas.'
    },

    // MAQUILLAJE
    {
      id: 'maquillaje-social',
      title: 'Maquillaje',
      category: 'maquillaje',
      categoryLabel: 'Maquillaje',
      description: 'Maquillaje profesional para eventos, fiestas, novias y producciones, diseñado para destacar tu belleza única.'
    },

    // TRATAMIENTOS COSMETOLÓGICOS & LABIOS
    {
      id: 'cosmetologia-limpieza-facial',
      title: 'Limpieza facial',
      category: 'tratamientos',
      categoryLabel: 'Cosmetología Facial',
      description: 'Higiene facial profunda, descongestión de poros, exfoliación suave, hidratación y luminosidad para tu piel.'
    },
    {
      id: 'tratamientos-hidralips',
      title: 'Hidralips',
      category: 'tratamientos',
      categoryLabel: 'Tratamientos & Labios',
      description: 'Tratamiento de regeneración e hidratación profunda que aporta tersura, frescura y volumen natural a tus labios.'
    }
  ];

  // ------------------------------------------------------------------------
  // 02. GALLERY DATA (The 12 Real Nail Photographs)
  // ------------------------------------------------------------------------
  const GALLERY_DATA = [
    {
      src: './assets/uñas8.png',
      title: 'Merlot & Carey 3D',
      technique: 'Técnica mixta con carey profundo, anillos metálicos dorados esculpidos y acabado merlot ultra-brillante.',
      tag: '01 · Signature Art'
    },
    {
      src: './assets/uñas2.png',
      title: 'Glazed Pearl Chrome',
      technique: 'Silueta stiletto cromada efecto perla con brazalete de micro-strass y anillo de sello artesanal.',
      tag: '02 · Haute Glaze'
    },
    {
      src: './assets/uñas6.png',
      title: 'Sheer Noir Couture',
      technique: 'Trazos orgánicos ahumados sobre fondo translúcido nude, estilo editorial de pasarela.',
      tag: '03 · Editorial Noir'
    },
    {
      src: './assets/uñas3.png',
      title: 'Champagne Metallic Chrome',
      technique: 'Esmaltado metálico en tono champagne con micro-líneas geométricas y joyería dorada.',
      tag: '04 · Metallic Satin'
    },
    {
      src: './assets/uñas9.png',
      title: 'Graphic French Noir',
      technique: 'Francesita gráfica fluida en negro azabache sobre base nude traslúcida impecable.',
      tag: '05 · Modern Graphic'
    },
    {
      src: './assets/uñas10.png',
      title: 'Gotas de Agua 3D en Mate',
      technique: 'Relieve de rocío hiperrealista con textura dimensional sobre base alabastro esmerilada.',
      tag: '06 · 3D Textures'
    },
    {
      src: './assets/uñas12.png',
      title: 'Pearl Stars & Merlot',
      technique: 'Composición con estrellas esculpidas de perlas 3D, animal print carey y tips merlot.',
      tag: '07 · Mixed Media'
    },
    {
      src: './assets/uñas7.png',
      title: 'Celestial Constellations',
      technique: 'Estrellas celestiales dibujadas a mano alzada con micro-esferas plateadas sobre base lechosa.',
      tag: '08 · Celestial Star'
    },
    {
      src: './assets/uñas5.png',
      title: 'Multi-Cristales Facetados',
      technique: 'Pedrería facetada multicolor distribuida con armonía sobre esmaltado nude translúcido.',
      tag: '09 · Fine Jewelry'
    },
    {
      src: './assets/uñas11.png',
      title: 'Golden Starburst',
      technique: 'Destellos astrales dorados con gemas centrales sobre silueta stiletto alargada.',
      tag: '10 · Astral Gems'
    },
    {
      src: './assets/uñas4.png',
      title: 'Micro Polka Dots',
      technique: 'Puntillismo geométrico minimalista en negro sobre tono rosa velado.',
      tag: '11 · Minimalist Line'
    },
    {
      src: './assets/uñas1.png',
      title: 'Burgundy Pinstripes',
      technique: 'Líneas verticales bordeaux finas sobre base perlada satinada con acabado espejo.',
      tag: '12 · Pinstripes'
    }
  ];

  // Constant URLs
  const BOOKING_URL = 'https://aestheticstudio.sinturno.com/';
  const WHATSAPP_BASE = 'https://wa.me/5492234226717';

  // Helper to build WhatsApp message
  function getWhatsAppUrl(messageText) {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(messageText)}`;
  }

  // ------------------------------------------------------------------------
  // 03. SERVICES FILTER & SEARCH ENGINE
  // ------------------------------------------------------------------------
  const servicesContainer = document.getElementById('services-container');
  const servicesMeta = document.getElementById('services-meta');
  const noResultsMessage = document.getElementById('no-results-message');
  const searchInput = document.getElementById('service-search');
  const searchClearBtn = document.getElementById('search-clear');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const tabButtons = document.querySelectorAll('.tab-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  // Utility to normalize search strings (removes accents/tildes)
  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function renderServices() {
    const normQuery = normalizeText(searchQuery);

    const filtered = SERVICES_DATA.filter(service => {
      // Category match
      let matchesCategory = false;
      if (currentCategory === 'all') {
        matchesCategory = true;
      } else if (service.category === currentCategory || service.secondaryCategory === currentCategory) {
        matchesCategory = true;
      }

      // Search match
      let matchesSearch = true;
      if (normQuery.trim() !== '') {
        const titleNorm = normalizeText(service.title);
        const descNorm = normalizeText(service.description);
        const catNorm = normalizeText(service.categoryLabel);
        matchesSearch = titleNorm.includes(normQuery) || descNorm.includes(normQuery) || catNorm.includes(normQuery);
      }

      return matchesCategory && matchesSearch;
    });

    // Update Meta text
    if (normQuery.trim() !== '') {
      servicesMeta.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'servicio' : 'servicios'} para "${searchQuery}"`;
    } else if (currentCategory === 'all') {
      servicesMeta.textContent = `Mostrando todos los servicios disponibles (${filtered.length})`;
    } else {
      const activeTab = document.querySelector(`.tab-btn[data-category="${currentCategory}"] span`);
      const catName = activeTab ? activeTab.textContent : 'esta categoría';
      servicesMeta.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'servicio' : 'servicios'} en ${catName}`;
    }

    if (filtered.length === 0) {
      servicesContainer.innerHTML = '';
      noResultsMessage.hidden = false;
      return;
    }

    noResultsMessage.hidden = true;

    // Render cards
    servicesContainer.innerHTML = filtered.map(service => {
      const waMsg = `Hola, quería consultar por el servicio de ${service.title}`;
      const waLink = getWhatsAppUrl(waMsg);

      return `
        <article class="service-card" data-category="${service.category}">
          <div class="service-top">
            <span class="service-cat-badge">${service.categoryLabel}</span>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
          </div>
          <div class="service-actions">
            <a href="${BOOKING_URL}" 
               class="btn-book-service" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Reservar turno para ${service.title}">
              <span>Reservar</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a href="${waLink}" 
               class="btn-wa-service" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Consultar por WhatsApp sobre ${service.title}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.101-.477-.15-.677.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.234-.244-.588-.493-.508-.677-.518-.176-.009-.376-.011-.577-.011-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.123 3.242 5.144 4.547.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.579-.087 1.78-.727 2.03-1.43.251-.703.251-1.304.176-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.765.46 3.486 1.334 5.006L2 22l5.143-1.349C8.618 21.493 10.3 22 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z"/>
              </svg>
              <span>Consultar</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Update counts in tabs
  function updateTabCounts() {
    const counts = {
      all: SERVICES_DATA.length,
      unas: SERVICES_DATA.filter(s => s.category === 'unas').length,
      pies: SERVICES_DATA.filter(s => s.category === 'pies').length,
      mirada: SERVICES_DATA.filter(s => s.category === 'mirada' || s.secondaryCategory === 'mirada').length,
      pestanas: SERVICES_DATA.filter(s => s.category === 'pestanas' || s.secondaryCategory === 'pestanas').length,
      maquillaje: SERVICES_DATA.filter(s => s.category === 'maquillaje').length,
      tratamientos: SERVICES_DATA.filter(s => s.category === 'tratamientos').length
    };

    for (const [key, val] of Object.entries(counts)) {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = val;
    }
  }

  // Handle Tab Switch
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      currentCategory = btn.getAttribute('data-category');
      renderServices();
    });
  });

  // Handle Live Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.hidden = searchQuery.trim() === '';
      }
      renderServices();
    });
  }

  // Handle Search Clear
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.hidden = true;
      searchInput.focus();
      renderServices();
    });
  }

  // Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        if (searchClearBtn) searchClearBtn.hidden = true;
      }
      currentCategory = 'all';
      tabButtons.forEach(b => {
        const isAll = b.getAttribute('data-category') === 'all';
        b.classList.toggle('active', isAll);
        b.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      renderServices();
    });
  }

  // Allow clicking on visual categories (Section 03) to filter services and jump
  document.querySelectorAll('[data-filter-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const targetCat = trigger.getAttribute('data-filter-target');
      const targetTab = document.querySelector(`.tab-btn[data-category="${targetCat}"]`);
      if (targetTab) {
        targetTab.click();
        const servicesSection = document.getElementById('servicios');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Allow footer links to trigger category filter
  document.querySelectorAll('[data-footer-filter]').forEach(link => {
    link.addEventListener('click', () => {
      const targetCat = link.getAttribute('data-footer-filter');
      const targetTab = document.querySelector(`.tab-btn[data-category="${targetCat}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // Initial Services Render
  updateTabCounts();
  renderServices();

  // ------------------------------------------------------------------------
  // 04. EDITORIAL FULLSCREEN LIGHTBOX
  // ------------------------------------------------------------------------
  const lightboxDialog = document.getElementById('lightbox-dialog');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxWaBtn = document.getElementById('lightbox-wa-btn');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let activeIndex = 0;

  function openLightbox(index) {
    if (!lightboxDialog) return;
    activeIndex = (index + GALLERY_DATA.length) % GALLERY_DATA.length;
    const item = GALLERY_DATA[activeIndex];

    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.technique;
    lightboxCounter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(GALLERY_DATA.length).padStart(2, '0')}`;

    const waMsg = `Hola, vi el diseño "${item.title}" en la galería de la web y quería consultar para hacérmelo.`;
    lightboxWaBtn.href = getWhatsAppUrl(waMsg);

    if (typeof lightboxDialog.showModal === 'function') {
      lightboxDialog.showModal();
    } else {
      lightboxDialog.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxDialog) return;
    if (typeof lightboxDialog.close === 'function') {
      lightboxDialog.close();
    } else {
      lightboxDialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  function showNext() {
    openLightbox(activeIndex + 1);
  }

  function showPrev() {
    openLightbox(activeIndex - 1);
  }

  // Attach click to masonry gallery items
  document.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-gallery-index'), 10);
      if (!isNaN(idx)) {
        openLightbox(idx);
      }
    });

    // Keyboard support for gallery cards
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Ver diseño en detalle`);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(item.getAttribute('data-gallery-index'), 10);
        if (!isNaN(idx)) openLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  // Close on backdrop click
  if (lightboxDialog) {
    lightboxDialog.addEventListener('click', (e) => {
      if (e.target === lightboxDialog) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox
  window.addEventListener('keydown', (e) => {
    if (lightboxDialog && lightboxDialog.open) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    }
  });

  // Touch Swipe for mobile lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightboxDialog) {
    lightboxDialog.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxDialog.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        showNext(); // Swiped left -> next image
      } else {
        showPrev(); // Swiped right -> prev image
      }
    }
  }

  // ------------------------------------------------------------------------
  // 05. MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ------------------------------------------------------------------------
  // 06. MOBILE PERSISTENT STICKY BAR
  // Appears after scrolling past the hero section
  // ------------------------------------------------------------------------
  const mobileStickyBar = document.getElementById('mobile-sticky-bar');
  const heroSection = document.getElementById('hero');

  function updateStickyBar() {
    if (!mobileStickyBar || !heroSection) return;
    const heroRect = heroSection.getBoundingClientRect();
    const passedHero = heroRect.bottom < 100;

    if (passedHero) {
      mobileStickyBar.classList.add('is-visible');
    } else {
      mobileStickyBar.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateStickyBar, { passive: true });
  updateStickyBar();

  // ------------------------------------------------------------------------
  // 07. ACTIVE NAVIGATION ON SCROLL (IntersectionObserver)
  // ------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const observedSections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, observerOptions);

  observedSections.forEach(section => sectionObserver.observe(section));

  // Dynamic Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 08. SCROLL REVEAL ANIMATIONS
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-right, .reveal-stagger > *');
  
  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.05
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  revealElements.forEach(el => revealObserver.observe(el));

});
