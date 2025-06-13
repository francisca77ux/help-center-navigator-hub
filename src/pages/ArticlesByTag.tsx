import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ArticlesByTag = () => {
  const { tag } = useParams<{ tag: string }>();
  const decodedTag = decodeURIComponent(tag || '');

  // Mapeo completo de artículos por etiqueta
  const articlesByTag: Record<string, Array<{ title: string; href: string; description: string }>> = {
    'Servicios ADT': [
      { title: 'Servicios ADT disponibles', href: '/articulo/servicios-adt-disponibles', description: 'Conoce todos los servicios de seguridad que ofrece ADT Chile' },
      { title: 'Servicios adicionales', href: '/articulo/servicios-adicionales', description: 'Servicios complementarios de videovigilancia y soporte técnico' },
      { title: 'Tipos de monitoreo disponibles', href: '/articulo/tipos-monitoreo', description: 'Modalidades de monitoreo para diferentes necesidades' },
      { title: '¿Qué es ADT Smart Security?', href: '/articulo/que-es-adt-smart-security', description: 'Plataforma inteligente de seguridad integral' },
    ],
    'Panel de Alarma': [
      { title: '¿Cómo activar mi sistema de alarma?', href: '/articulo/activar-sistema-alarma', description: 'Pasos para activar correctamente tu sistema ADT' },
      { title: '¿Cómo desactivar mi sistema de alarma?', href: '/articulo/desactivar-sistema-alarma', description: 'Procedimientos para desactivar tu alarma' },
      { title: 'Cambio de clave maestra', href: '/articulo/cambio-clave-maestra', description: 'Cómo cambiar la clave principal de tu sistema' },
      { title: 'Configuración de zonas', href: '/articulo/configuracion-zonas', description: 'Personaliza las zonas de tu sistema de alarma' },
      { title: 'Creación de códigos de usuario', href: '/articulo/codigos-usuario', description: 'Gestiona códigos para diferentes usuarios' },
    ],
    'App ADT': [
      { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo' },
      { title: 'Primer acceso a la app', href: '/articulo/primer-acceso-app', description: 'Configuración inicial de la aplicación' },
      { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu app con el sistema de alarma' },
      { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones' },
      { title: 'Control remoto del sistema', href: '/articulo/control-remoto-app', description: 'Controla tu alarma desde cualquier lugar' },
      { title: 'Visualización de eventos', href: '/articulo/visualizacion-eventos', description: 'Consulta el historial de eventos' },
    ],
    'Monitoreo 24/7': [
      { title: 'Central de monitoreo ADT', href: '/articulo/central-monitoreo', description: 'Centro de operaciones que supervisa tu seguridad' },
      { title: 'Monitoreo 24/7', href: '/articulo/monitoreo-24-7', description: 'Supervisión continua de tu sistema de seguridad' },
      { title: 'Tipos de monitoreo disponibles', href: '/articulo/tipos-monitoreo', description: 'Modalidades de monitoreo para diferentes necesidades' },
      { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Procedimientos de respuesta ante emergencias' },
    ],
    'Videovigilancia': [
      { title: 'Servicios adicionales', href: '/articulo/servicios-adicionales', description: 'Servicios complementarios de videovigilancia y soporte técnico' },
    ],
    'Soporte Técnico': [
      { title: 'Mi alarma no se activa', href: '/articulo/alarma-no-activa', description: 'Soluciones para problemas de activación' },
      { title: 'Problemas de conectividad', href: '/articulo/problemas-conectividad', description: 'Resuelve problemas de conexión del sistema' },
      { title: 'Sensores con mal funcionamiento', href: '/articulo/sensores-mal-funcionamiento', description: 'Diagnóstico y solución de sensores' },
    ],
    'Configuración': [
      { title: 'Configuración de zonas', href: '/articulo/configuracion-zonas', description: 'Personaliza las zonas de tu sistema de alarma' },
      { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones' },
      { title: 'Primer acceso a la app', href: '/articulo/primer-acceso-app', description: 'Configuración inicial de la aplicación' },
      { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu app con el sistema de alarma' },
    ],
    'Instalación': [
      { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo' },
      { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu app con el sistema de alarma' },
      { title: 'Primer acceso a la app', href: '/articulo/primer-acceso-app', description: 'Configuración inicial de la aplicación' },
    ],
    'Códigos': [
      { title: '¿Cómo activar mi sistema de alarma?', href: '/articulo/activar-sistema-alarma', description: 'Pasos para activar correctamente tu sistema ADT' },
      { title: '¿Cómo desactivar mi sistema de alarma?', href: '/articulo/desactivar-sistema-alarma', description: 'Procedimientos para desactivar tu alarma' },
      { title: 'Cambio de clave maestra', href: '/articulo/cambio-clave-maestra', description: 'Cómo cambiar la clave principal de tu sistema' },
      { title: 'Creación de códigos de usuario', href: '/articulo/codigos-usuario', description: 'Gestiona códigos para diferentes usuarios' },
    ],
    'Seguridad': [
      { title: '¿Cómo activar mi sistema de alarma?', href: '/articulo/activar-sistema-alarma', description: 'Pasos para activar correctamente tu sistema ADT' },
      { title: '¿Cómo desactivar mi sistema de alarma?', href: '/articulo/desactivar-sistema-alarma', description: 'Procedimientos para desactivar tu alarma' },
      { title: 'Cambio de clave maestra', href: '/articulo/cambio-clave-maestra', description: 'Cómo cambiar la clave principal de tu sistema' },
      { title: 'Creación de códigos de usuario', href: '/articulo/codigos-usuario', description: 'Gestiona códigos para diferentes usuarios' },
      { title: 'Tipos de monitoreo disponibles', href: '/articulo/tipos-monitoreo', description: 'Modalidades de monitoreo para diferentes necesidades' },
      { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Procedimientos de respuesta ante emergencias' },
    ],
    'Activación': [
      { title: '¿Cómo activar mi sistema de alarma?', href: '/articulo/activar-sistema-alarma', description: 'Pasos para activar correctamente tu sistema ADT' },
    ],
    'Desactivación': [
      { title: '¿Cómo desactivar mi sistema de alarma?', href: '/articulo/desactivar-sistema-alarma', description: 'Procedimientos para desactivar tu alarma' },
    ],
    'Registro': [
      { title: 'Primer acceso a la app', href: '/articulo/primer-acceso-app', description: 'Configuración inicial de la aplicación' },
    ],
    'Android': [
      { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo' },
    ],
    'iOS': [
      { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo' },
    ],
    'Descarga': [
      { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo' },
    ],
    'Notificaciones': [
      { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones' },
      { title: 'Visualización de eventos', href: '/articulo/visualizacion-eventos', description: 'Consulta el historial de eventos' },
    ],
    'Alertas': [
      { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones' },
    ],
    'Push': [
      { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones' },
    ],
    'Emergencias': [
      { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Conoce nuestros protocolos de respuesta ante emergencias' },
      { title: 'Tipos de monitoreo disponibles', href: '/articulo/tipos-monitoreo', description: 'Conoce los diferentes tipos de monitoreo que ofrecemos' }
    ],
    'Eventos': [
      { title: 'Visualización de eventos', href: '/articulo/visualizacion-eventos', description: 'Consulta el historial completo de eventos de tu sistema' }
    ],
    'Historial': [
      { title: 'Visualización de eventos', href: '/articulo/visualizacion-eventos', description: 'Consulta el historial completo de eventos de tu sistema' }
    ],
    'Protocolo': [
      { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Conoce nuestros protocolos de respuesta ante emergencias' }
    ],
    'Respuesta': [
      { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Conoce nuestros protocolos de respuesta ante emergencias' }
    ],
    'Sensores': [
      { title: 'Sensores con mal funcionamiento', href: '/articulo/sensores-mal-funcionamiento', description: 'Identifica y resuelve problemas comunes en sensores' }
    ],
    'Diagnóstico': [
      { title: 'Sensores con mal funcionamiento', href: '/articulo/sensores-mal-funcionamiento', description: 'Identifica y resuelve problemas comunes en sensores' },
      { title: 'Problemas de conectividad', href: '/articulo/problemas-conectividad', description: 'Resuelve problemas de conectividad en tu sistema ADT' }
    ],
    'Mantenimiento': [
      { title: 'Sensores con mal funcionamiento', href: '/articulo/sensores-mal-funcionamiento', description: 'Identifica y resuelve problemas comunes en sensores' },
      { title: 'Servicios adicionales', href: '/articulo/servicios-adicionales', description: 'Descubre nuestros servicios complementarios de seguridad' }
    ],
    'Conectividad': [
      { title: 'Problemas de conectividad', href: '/articulo/problemas-conectividad', description: 'Resuelve problemas de conectividad en tu sistema ADT' },
      { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT' }
    ],
    'WiFi': [
      { title: 'Problemas de conectividad', href: '/articulo/problemas-conectividad', description: 'Resuelve problemas de conectividad en tu sistema ADT' }
    ],
    'IoT': [
      { title: '¿Qué es ADT Smart Security?', href: '/articulo/que-es-adt-smart-security', description: 'Conoce nuestro sistema de seguridad más avanzado' }
    ],
    'Automatización': [
      { title: '¿Qué es ADT Smart Security?', href: '/articulo/que-es-adt-smart-security', description: 'Conoce nuestro sistema de seguridad más avanzado' }
    ],
    'Tecnología': [
      { title: '¿Qué es ADT Smart Security?', href: '/articulo/que-es-adt-smart-security', description: 'Conoce nuestro sistema de seguridad más avanzado' }
    ],
    'Cámaras IP': [
      { title: 'Servicios adicionales', href: '/articulo/servicios-adicionales', description: 'Descubre nuestros servicios complementarios de seguridad' }
    ],
    'Código QR': [
      { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu aplicación móvil con tu sistema de alarma ADT' }
    ]
  };

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
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <Link to={article.href} className="block">
                        <h3 className="text-xl font-semibold mb-2 text-primary hover:text-primary/80 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground">{article.description}</p>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <Tag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No se encontraron artículos</h2>
              <p className="text-muted-foreground">
                No hay artículos disponibles para la etiqueta "{decodedTag}".
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticlesByTag;
