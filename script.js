
// JavaScript para funcionalidad del Centro de Ayuda ADT

document.addEventListener('DOMContentLoaded', function() {
  
  // Configuración del widget de Zendesk
  if (window.zE && typeof zESettings !== 'undefined') {
    // Configurar categorización automática basada en la página actual
    const currentPath = window.location.pathname;
    let category = 'General';
    let subcategory = '';
    
    if (currentPath.includes('panel-alarma')) {
      category = 'Panel de Alarma';
      subcategory = 'Configuración y Uso';
    } else if (currentPath.includes('app-adt')) {
      category = 'Aplicación ADT';
      subcategory = 'Instalación y Configuración';
    } else if (currentPath.includes('servicios-adt')) {
      category = 'Servicios ADT';
      subcategory = 'Información General';
    } else if (currentPath.includes('facturacion')) {
      category = 'Facturación';
      subcategory = 'Pagos y Consultas';
    } else if (currentPath.includes('instalacion')) {
      category = 'Instalación';
      subcategory = 'Proceso de Instalación';
    } else if (currentPath.includes('camaras-ip')) {
      category = 'Cámaras IP';
      subcategory = 'Configuración y Uso';
    } else if (currentPath.includes('monitoreo')) {
      category = 'Monitoreo';
      subcategory = 'Central de Monitoreo 24/7';
    } else if (currentPath.includes('soporte')) {
      category = 'Soporte Técnico';
      subcategory = 'Resolución de Problemas';
    }

    // Pre-llenar formulario con contexto
    window.zE('webWidget', 'prefill', {
      name: {
        value: '',
        readOnly: false
      },
      email: {
        value: '',
        readOnly: false
      },
      message: {
        value: `Consulta desde: ${category} - ${subcategory}\n\nDescribe tu consulta aquí:`,
        readOnly: false
      }
    });

    // Configurar etiquetas para mejor categorización
    window.zE('webWidget', 'updateSettings', {
      webWidget: {
        chat: {
          tags: [category.toLowerCase().replace(/\s+/g, '-'), 'web-help-center']
        }
      }
    });

    // Eventos personalizados para tracking
    window.zE('webWidget:on', 'open', function() {
      console.log('Zendesk widget opened from:', category);
    });

    window.zE('webWidget:on', 'close', function() {
      console.log('Zendesk widget closed');
    });
  }

  // Funcionalidad de búsqueda mejorada
  const searchForms = document.querySelectorAll('form[action*="search"]');
  searchForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const query = form.querySelector('input[name="query"]').value.trim();
      if (query.length < 2) {
        e.preventDefault();
        alert('Por favor ingresa al menos 2 caracteres para buscar.');
      }
    });
  });

  // Votación de artículos
  const voteButtons = document.querySelectorAll('[data-vote]');
  voteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const articleId = this.getAttribute('data-article-id');
      const voteType = this.getAttribute('data-vote');
      
      // Aquí iría la lógica para enviar el voto a Zendesk
      fetch(`/api/v2/help_center/articles/${articleId}/votes.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vote: {
            value: voteType === 'up' ? 1 : -1
          }
        })
      })
      .then(response => response.json())
      .then(data => {
        this.style.opacity = '0.5';
        this.disabled = true;
        
        const message = voteType === 'up' ? 
          '¡Gracias por tu voto positivo!' : 
          'Gracias por tu feedback. Trabajaremos para mejorar este artículo.';
        
        const feedback = document.createElement('div');
        feedback.className = 'text-sm text-green-600 mt-2';
        feedback.textContent = message;
        this.parentNode.appendChild(feedback);
      })
      .catch(error => {
        console.error('Error al enviar voto:', error);
      });
    });
  });

  // Smooth scroll para enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Analytics tracking
  function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }

  // Track clicks en categorías
  const categoryLinks = document.querySelectorAll('[href*="/categories/"]');
  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('Navigation', 'Category Click', this.textContent.trim());
    });
  });

  // Track clicks en artículos
  const articleLinks = document.querySelectorAll('[href*="/articles/"]');
  articleLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('Content', 'Article Click', this.textContent.trim());
    });
  });

  // Track búsquedas
  const searchInputs = document.querySelectorAll('input[name="query"]');
  searchInputs.forEach(function(input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        trackEvent('Search', 'Search Query', this.value);
      }
    });
  });

});

// Helpers para Handlebars
if (typeof Handlebars !== 'undefined') {
  
  // Helper para comparar valores
  Handlebars.registerHelper('is', function(a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });

  // Helper para verificar si contiene texto
  Handlebars.registerHelper('contains', function(str, substr, options) {
    if (str && str.toLowerCase().includes(substr.toLowerCase())) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  // Helper para año actual
  Handlebars.registerHelper('current_year', function() {
    return new Date().getFullYear();
  });

  // Helper para formatear fechas
  Handlebars.registerHelper('format_date', function(date) {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

}
