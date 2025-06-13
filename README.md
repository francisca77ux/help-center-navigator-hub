
# Centro de Ayuda ADT Chile - Tema Zendesk

Este es un tema personalizado para Zendesk Guide diseñado específicamente para ADT Chile.

## Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y escritorio
- **Integración con Zendesk Widget**: Chat en vivo contextual según la página
- **Búsqueda Avanzada**: Funcionalidad de búsqueda mejorada
- **Categorización Inteligente**: Organización clara de contenido por servicios
- **Estilos Personalizados**: Diseño coherente con la marca ADT Chile

## Estructura del Tema

```
/
├── templates/
│   ├── document_head.hbs     # Meta tags y configuración
│   ├── header.hbs            # Cabecera del sitio
│   ├── footer.hbs            # Pie de página
│   ├── home_page.hbs         # Página principal
│   ├── category_page.hbs     # Página de categoría
│   ├── article_page.hbs      # Página de artículo
│   └── search_results.hbs    # Resultados de búsqueda
├── assets/
│   └── style.css            # Estilos personalizados
├── script.js                # JavaScript personalizado
├── manifest.json            # Configuración del tema
└── README.md               # Documentación
```

## Instalación

1. **Preparar archivos**: Comprimir todos los archivos en un ZIP
2. **Subir a Zendesk**: Ir a Admin → Guide → Personalizar diseño → Importar tema
3. **Configurar ajustes**: Establecer valores en la configuración del tema
4. **Publicar**: Activar el nuevo tema

## Configuración

### Ajustes del Tema

- **zendesk_widget_key**: Clave del widget de Zendesk para chat
- **primary_color**: Color principal del tema (#1e40af por defecto)
- **show_contact_numbers**: Mostrar números de contacto
- **main_phone**: Teléfono principal (600 123 4567)
- **whatsapp_number**: Número de WhatsApp (+56 9 8765 4321)
- **contact_email**: Email de contacto (info@adtchile.cl)

### Categorías Soportadas

El tema está optimizado para estas categorías de ADT Chile:

- 🛡️ **Panel de Alarma**: Configuración y uso del panel
- 📱 **App ADT**: Aplicación móvil
- ⚙️ **Servicios ADT**: Información sobre servicios
- 💳 **Facturación**: Pagos y consultas
- 🔧 **Instalación**: Proceso de instalación
- 📹 **Cámaras IP**: Videovigilancia
- 👁️ **Monitoreo**: Central de monitoreo 24/7
- 🛠️ **Soporte**: Soporte técnico

## Funcionalidades

### Widget de Zendesk Contextual

El tema configura automáticamente el widget de Zendesk con:
- Categorización automática según la página visitada
- Pre-llenado de formularios con contexto
- Etiquetas para mejor organización de tickets
- Colores personalizados de marca ADT

### Búsqueda Inteligente

- Validación de consultas mínimas
- Resultados organizados por categoría
- Snippets destacados de contenido relevante
- Sugerencias cuando no hay resultados

### Analytics y Tracking

- Seguimiento de clics en categorías
- Tracking de artículos visitados
- Monitoreo de consultas de búsqueda
- Eventos del widget de Zendesk

## Personalización

### Colores

Los colores principales se pueden modificar en `style.css`:

```css
:root {
  --primary-color: #1e40af;
  --primary-hover: #1d4ed8;
  --secondary-color: #64748b;
  /* ... más variables */
}
```

### Iconos

Los iconos se asignan automáticamente según el contenido usando emojis:
- 🔑 Activación/códigos
- 📱 Aplicación móvil
- 💳 Pagos/facturación
- 📹 Cámaras/video
- ⚠️ Problemas/errores

### Handlebars Helpers

El tema incluye helpers personalizados:
- `{{is a b}}`: Comparación de valores
- `{{contains str substr}}`: Verificar si contiene texto
- `{{current_year}}`: Año actual
- `{{format_date date}}`: Formatear fechas

## Soporte

Para soporte técnico del tema:
- Email: soporte@adtchile.cl
- Documentación: Ver archivos de plantillas
- Zendesk: Usar el widget de chat integrado

## Changelog

### v1.0.0
- Versión inicial del tema
- Diseño responsivo completo
- Integración con widget de Zendesk
- Funcionalidades de búsqueda y navegación
- Optimización para categorías ADT Chile

---

© 2024 ADT Chile - Todos los derechos reservados
