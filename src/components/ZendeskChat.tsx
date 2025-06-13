
import { useEffect } from 'react';

declare global {
  interface Window {
    zE?: any;
    zESettings?: any;
  }
}

const ZendeskChat = () => {
  useEffect(() => {
    // Configuración previa de Zendesk
    window.zESettings = {
      webWidget: {
        color: {
          theme: '#1e40af',
          launcher: '#1e40af',
          launcherText: '#ffffff',
          button: '#1e40af',
          header: '#1e40af',
          articleLinks: '#1e40af'
        },
        position: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        offset: {
          horizontal: '20px',
          vertical: '20px'
        },
        launcher: {
          chatLabel: {
            'es': 'Chat con ADT',
            '*': 'Chat with ADT'
          }
        },
        helpCenter: {
          suppress: false,
          title: {
            'es': 'Centro de Ayuda ADT',
            '*': 'ADT Help Center'
          }
        },
        chat: {
          suppress: false,
          title: {
            'es': 'Chat en Vivo',
            '*': 'Live Chat'
          },
          departments: {
            enabled: ['Soporte Técnico', 'Ventas', 'Facturación'],
            select: 'Soporte Técnico'
          }
        },
        talk: {
          suppress: true
        },
        contactForm: {
          suppress: false,
          title: {
            'es': 'Contactanos',
            '*': 'Contact Us'
          }
        }
      }
    };

    // Crear y agregar el script de Zendesk
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    // Reemplaza 'YOUR_ZENDESK_KEY' con tu clave real de Zendesk
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=YOUR_ZENDESK_KEY';
    script.async = true;
    
    document.head.appendChild(script);

    // Configuración cuando el widget esté listo
    script.onload = () => {
      if (window.zE) {
        // Configurar categorización automática basada en la página actual
        const currentPath = window.location.pathname;
        let category = 'General';
        let subcategory = '';
        
        if (currentPath.includes('/panel-alarma')) {
          category = 'Panel de Alarma';
          subcategory = 'Configuración y Uso';
        } else if (currentPath.includes('/app-adt')) {
          category = 'Aplicación ADT';
          subcategory = 'Instalación y Configuración';
        } else if (currentPath.includes('/servicios-adt')) {
          category = 'Servicios ADT';
          subcategory = 'Información General';
        } else if (currentPath.includes('/facturacion')) {
          category = 'Facturación';
          subcategory = 'Pagos y Consultas';
        } else if (currentPath.includes('/instalacion')) {
          category = 'Instalación';
          subcategory = 'Proceso de Instalación';
        } else if (currentPath.includes('/camaras-ip')) {
          category = 'Cámaras IP';
          subcategory = 'Configuración y Uso';
        } else if (currentPath.includes('/monitoreo')) {
          category = 'Monitoreo';
          subcategory = 'Central de Monitoreo 24/7';
        } else if (currentPath.includes('/soporte')) {
          category = 'Soporte Técnico';
          subcategory = 'Resolución de Problemas';
        }

        // Identificar usuario con información contextual
        window.zE('webWidget', 'identify', {
          name: 'Usuario ADT Chile',
          email: '',
        });

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
        window.zE('webWidget:on', 'open', () => {
          console.log('Zendesk widget opened from:', category);
        });

        window.zE('webWidget:on', 'close', () => {
          console.log('Zendesk widget closed');
        });
      }
    };

    // Cleanup cuando el componente se desmonte
    return () => {
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      // Limpiar configuraciones globales
      if (window.zESettings) {
        delete window.zESettings;
      }
    };
  }, []);

  return null;
};

export default ZendeskChat;
