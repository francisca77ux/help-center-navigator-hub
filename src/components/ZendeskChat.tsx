
import { useEffect } from 'react';

declare global {
  interface Window {
    zE?: any;
  }
}

const ZendeskChat = () => {
  useEffect(() => {
    // Configuración de Zendesk Chat
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=YOUR_ZENDESK_KEY';
    script.async = true;
    
    // Agregar el script al head del documento
    document.head.appendChild(script);

    // Configuración inicial cuando el widget esté listo
    script.onload = () => {
      if (window.zE) {
        window.zE('webWidget', 'configure', {
          display: {
            helpCenter: {
              suppress: false
            },
            chat: {
              suppress: false
            },
            talk: {
              suppress: true
            }
          },
          color: {
            theme: '#1e40af', // Color primario de la aplicación
            launcher: '#1e40af',
            launcherText: '#ffffff',
            button: '#1e40af',
            resultLists: '#1e40af',
            header: '#1e40af',
            articleLinks: '#1e40af'
          },
          position: {
            horizontal: 'right',
            vertical: 'bottom'
          }
        });

        // Configurar etiquetas para categorización
        window.zE('webWidget', 'identify', {
          name: 'Usuario ADT Chile',
          email: '',
        });

        // Configurar campos personalizados basados en la página actual
        const currentPath = window.location.pathname;
        let category = 'General';
        
        if (currentPath.includes('/panel-alarma')) {
          category = 'Panel de Alarma';
        } else if (currentPath.includes('/app-adt')) {
          category = 'Aplicación ADT';
        } else if (currentPath.includes('/servicios-adt')) {
          category = 'Servicios ADT';
        } else if (currentPath.includes('/facturacion')) {
          category = 'Facturación';
        } else if (currentPath.includes('/instalacion')) {
          category = 'Instalación';
        } else if (currentPath.includes('/camaras-ip')) {
          category = 'Cámaras IP';
        } else if (currentPath.includes('/monitoreo')) {
          category = 'Monitoreo';
        } else if (currentPath.includes('/soporte')) {
          category = 'Soporte Técnico';
        }

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
            value: `Consulta desde la sección: ${category}`,
            readOnly: false
          }
        });
      }
    };

    // Cleanup cuando el componente se desmonte
    return () => {
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default ZendeskChat;
