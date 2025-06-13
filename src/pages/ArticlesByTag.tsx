
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ArticlesByTag = () => {
  const { tag } = useParams<{ tag: string }>();
  
  // Mapeo de artículos por etiquetas
  const articlesByTag: Record<string, Array<{title: string, href: string, description: string}>> = {
    'Android': [
      {
        title: 'Instalación en Android',
        href: '/articulo/instalacion-android',
        description: 'Guía completa para instalar la app ADT en dispositivos Android'
      }
    ],
    'Instalación': [
      {
        title: 'Instalación en Android',
        href: '/articulo/instalacion-android',
        description: 'Guía completa para instalar la app ADT en dispositivos Android'
      },
      {
        title: 'Instalación en iOS',
        href: '/articulo/instalacion-ios',
        description: 'Guía completa para instalar la app ADT en dispositivos iOS'
      },
      {
        title: 'Vinculación con tu sistema',
        href: '/articulo/vinculacion-sistema',
        description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT'
      }
    ],
    'Monitoreo 24/7': [
      {
        title: 'Central de monitoreo ADT',
        href: '/articulo/central-monitoreo',
        description: 'Conoce nuestra central de monitoreo y sus características'
      },
      {
        title: 'Monitoreo 24/7',
        href: '/articulo/monitoreo-24-7',
        description: 'Información sobre nuestro servicio de monitoreo continuo'
      },
      {
        title: 'Tipos de monitoreo disponibles',
        href: '/articulo/tipos-monitoreo',
        description: 'Conoce los diferentes tipos de monitoreo que ofrecemos'
      },
      {
        title: 'Protocolo de emergencias',
        href: '/articulo/protocolo-emergencias',
        description: 'Conoce nuestros protocolos de respuesta ante emergencias'
      }
    ],
    'Pagos': [
      {
        title: 'Medios de pago disponibles',
        href: '/articulo/medios-pago-disponibles',
        description: 'Conoce todas las opciones de pago disponibles'
      }
    ],
    'Panel de Alarma': [
      {
        title: 'Modos de armado parcial y total',
        href: '/articulo/modos-armado',
        description: 'Aprende sobre los diferentes modos de armado'
      },
      {
        title: 'Activar sistema de alarma',
        href: '/articulo/activar-sistema-alarma',
        description: 'Guía para activar tu sistema de alarma correctamente'
      },
      {
        title: 'Desactivar sistema de alarma',
        href: '/articulo/desactivar-sistema-alarma',
        description: 'Guía para desactivar tu sistema de alarma'
      },
      {
        title: 'Sensores con mal funcionamiento',
        href: '/articulo/sensores-mal-funcionamiento',
        description: 'Identifica y resuelve problemas comunes en sensores'
      }
    ],
    'Configuración': [
      {
        title: 'Instalación en Android',
        href: '/articulo/instalacion-android',
        description: 'Guía completa para instalar la app ADT en dispositivos Android'
      },
      {
        title: 'Modos de armado parcial y total',
        href: '/articulo/modos-armado',
        description: 'Aprende sobre los diferentes modos de armado'
      },
      {
        title: 'Configuración de zonas',
        href: '/articulo/configuracion-zonas',
        description: 'Aprende a configurar las zonas de tu sistema'
      },
      {
        title: 'Vinculación con tu sistema',
        href: '/articulo/vinculacion-sistema',
        description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT'
      },
      {
        title: 'Problemas de conectividad',
        href: '/articulo/problemas-conectividad',
        description: 'Resuelve problemas de conectividad en tu sistema ADT'
      }
    ],
    'Seguridad': [
      {
        title: 'Central de monitoreo ADT',
        href: '/articulo/central-monitoreo',
        description: 'Conoce nuestra central de monitoreo y sus características'
      },
      {
        title: 'Protocolo de emergencias',
        href: '/articulo/protocolo-emergencias',
        description: 'Conoce nuestros protocolos de respuesta ante emergencias'
      },
      {
        title: 'Tipos de monitoreo disponibles',
        href: '/articulo/tipos-monitoreo',
        description: 'Conoce los diferentes tipos de monitoreo que ofrecemos'
      },
      {
        title: '¿Qué servicios ofrece ADT?',
        href: '/articulo/servicios-adt-disponibles',
        description: 'Conoce todos los servicios de seguridad que ADT ofrece'
      }
    ],
    'Servicios ADT': [
      {
        title: '¿Qué servicios ofrece ADT?',
        href: '/articulo/servicios-adt-disponibles',
        description: 'Conoce todos los servicios de seguridad que ADT ofrece'
      },
      {
        title: 'Servicios adicionales',
        href: '/articulo/servicios-adicionales',
        description: 'Descubre nuestros servicios complementarios de seguridad'
      },
      {
        title: 'Tipos de monitoreo disponibles',
        href: '/articulo/tipos-monitoreo',
        description: 'Conoce los diferentes tipos de monitoreo que ofrecemos'
      },
      {
        title: '¿Qué es ADT Smart Security?',
        href: '/articulo/que-es-adt-smart-security',
        description: 'Conoce nuestro sistema de seguridad más avanzado'
      }
    ],
    'App ADT': [
      {
        title: 'Vinculación con tu sistema',
        href: '/articulo/vinculacion-sistema',
        description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT'
      },
      {
        title: 'Visualización de eventos',
        href: '/articulo/visualizacion-eventos',
        description: 'Consulta el historial completo de eventos de tu sistema'
      }
    ],
    'Videovigilancia': [
      {
        title: 'Servicios adicionales',
        href: '/articulo/servicios-adicionales',
        description: 'Descubre nuestros servicios complementarios de seguridad'
      },
      {
        title: 'Tipos de monitoreo disponibles',
        href: '/articulo/tipos-monitoreo',
        description: 'Conoce los diferentes tipos de monitoreo que ofrecemos'
      },
      {
        title: '¿Qué servicios ofrece ADT?',
        href: '/articulo/servicios-adt-disponibles',
        description: 'Conoce todos los servicios de seguridad que ADT ofrece'
      }
    ],
    'Soporte Técnico': [
      {
        title: 'Sensores con mal funcionamiento',
        href: '/articulo/sensores-mal-funcionamiento',
        description: 'Identifica y resuelve problemas comunes en sensores'
      },
      {
        title: 'Problemas de conectividad',
        href: '/articulo/problemas-conectividad',
        description: 'Resuelve problemas de conectividad en tu sistema ADT'
      },
      {
        title: 'Servicios adicionales',
        href: '/articulo/servicios-adicionales',
        description: 'Descubre nuestros servicios complementarios de seguridad'
      }
    ],
    'Smart Security': [
      {
        title: '¿Qué es ADT Smart Security?',
        href: '/articulo/que-es-adt-smart-security',
        description: 'Conoce nuestro sistema de seguridad más avanzado'
      },
      {
        title: '¿Qué servicios ofrece ADT?',
        href: '/articulo/servicios-adt-disponibles',
        description: 'Conoce todos los servicios de seguridad que ADT ofrece'
      }
    ],
    'Emergencias': [
      {
        title: 'Protocolo de emergencias',
        href: '/articulo/protocolo-emergencias',
        description: 'Conoce nuestros protocolos de respuesta ante emergencias'
      },
      {
        title: 'Tipos de monitoreo disponibles',
        href: '/articulo/tipos-monitoreo',
        description: 'Conoce los diferentes tipos de monitoreo que ofrecemos'
      }
    ],
    'Eventos': [
      {
        title: 'Visualización de eventos',
        href: '/articulo/visualizacion-eventos',
        description: 'Consulta el historial completo de eventos de tu sistema'
      }
    ],
    'Historial': [
      {
        title: 'Visualización de eventos',
        href: '/articulo/visualizacion-eventos',
        description: 'Consulta el historial completo de eventos de tu sistema'
      }
    ],
    'Notificaciones': [
      {
        title: 'Visualización de eventos',
        href: '/articulo/visualizacion-eventos',
        description: 'Consulta el historial completo de eventos de tu sistema'
      }
    ],
    'Protocolo': [
      {
        title: 'Protocolo de emergencias',
        href: '/articulo/protocolo-emergencias',
        description: 'Conoce nuestros protocolos de respuesta ante emergencias'
      }
    ],
    'Respuesta': [
      {
        title: 'Protocolo de emergencias',
        href: '/articulo/protocolo-emergencias',
        description: 'Conoce nuestros protocolos de respuesta ante emergencias'
      }
    ],
    'Sensores': [
      {
        title: 'Sensores con mal funcionamiento',
        href: '/articulo/sensores-mal-funcionamiento',
        description: 'Identifica y resuelve problemas comunes en sensores'
      }
    ],
    'Diagnóstico': [
      {
        title: 'Sensores con mal funcionamiento',
        href: '/articulo/sensores-mal-funcionamiento',
        description: 'Identifica y resuelve problemas comunes en sensores'
      },
      {
        title: 'Problemas de conectividad',
        href: '/articulo/problemas-conectividad',
        description: 'Resuelve problemas de conectividad en tu sistema ADT'
      }
    ],
    'Mantenimiento': [
      {
        title: 'Sensores con mal funcionamiento',
        href: '/articulo/sensores-mal-funcionamiento',
        description: 'Identifica y resuelve problemas comunes en sensores'
      },
      {
        title: 'Servicios adicionales',
        href: '/articulo/servicios-adicionales',
        description: 'Descubre nuestros servicios complementarios de seguridad'
      }
    ],
    'Conectividad': [
      {
        title: 'Problemas de conectividad',
        href: '/articulo/problemas-conectividad',
        description: 'Resuelve problemas de conectividad en tu sistema ADT'
      },
      {
        title: 'Vinculación con tu sistema',
        href: '/articulo/vinculacion-sistema',
        description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT'
      }
    ],
    'WiFi': [
      {
        title: 'Problemas de conectividad',
        href: '/articulo/problemas-conectividad',
        description: 'Resuelve problemas de conectividad en tu sistema ADT'
      }
    ],
    'IoT': [
      {
        title: '¿Qué es ADT Smart Security?',
        href: '/articulo/que-es-adt-smart-security',
        description: 'Conoce nuestro sistema de seguridad más avanzado'
      }
    ],
    'Automatización': [
      {
        title: '¿Qué es ADT Smart Security?',
        href: '/articulo/que-es-adt-smart-security',
        description: 'Conoce nuestro sistema de seguridad más avanzado'
      }
    ],
    'Tecnología': [
      {
        title: '¿Qué es ADT Smart Security?',
        href: '/articulo/que-es-adt-smart-security',
        description: 'Conoce nuestro sistema de seguridad más avanzado'
      }
    ],
    'Cámaras IP': [
      {
        title: 'Servicios adicionales',
        href: '/articulo/servicios-adicionales',
        description: 'Descubre nuestros servicios complementarios de seguridad'
      }
    ],
    'Código QR': [
      {
        title: 'Vinculación con tu sistema',
        href: '/articulo/vinculacion-sistema',
        description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT'
      }
    ]
  };

  const decodedTag = decodeURIComponent(tag || '');
  const articles = articlesByTag[decodedTag] || [];

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: `Etiqueta: ${decodedTag}` }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Tag className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Artículos con etiqueta: {decodedTag}</h1>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <Link to={article.href} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Link 
                    to={article.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Leer artículo
                    <ArrowLeft className="h-3 w-3 ml-1 rotate-180" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Tag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No hay artículos con esta etiqueta</h2>
              <p className="text-muted-foreground">
                No encontramos artículos que contengan la etiqueta "{decodedTag}".
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticlesByTag;
