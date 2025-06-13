
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const SearchResults = () => {
  const { query } = useParams<{ query: string }>();
  const searchQuery = decodeURIComponent(query || '');

  // Base de datos de artículos para búsqueda
  const allArticles = [
    { title: 'Servicios ADT disponibles', href: '/articulo/servicios-adt-disponibles', description: 'Conoce todos los servicios de seguridad que ofrece ADT Chile', tags: ['Servicios ADT', 'Monitoreo', 'Instalación'] },
    { title: '¿Cómo activar mi sistema de alarma?', href: '/articulo/activar-sistema-alarma', description: 'Pasos para activar correctamente tu sistema ADT', tags: ['Panel de Alarma', 'Activación', 'Códigos'] },
    { title: '¿Cómo desactivar mi sistema de alarma?', href: '/articulo/desactivar-sistema-alarma', description: 'Procedimientos para desactivar tu alarma', tags: ['Panel de Alarma', 'Desactivación', 'Códigos'] },
    { title: 'Cambio de clave maestra', href: '/articulo/cambio-clave-maestra', description: 'Cómo cambiar la clave principal de tu sistema', tags: ['Panel de Alarma', 'Códigos', 'Configuración'] },
    { title: 'Configuración de zonas', href: '/articulo/configuracion-zonas', description: 'Personaliza las zonas de tu sistema de alarma', tags: ['Panel de Alarma', 'Configuración'] },
    { title: 'Creación de códigos de usuario', href: '/articulo/codigos-usuario', description: 'Gestiona códigos para diferentes usuarios', tags: ['Panel de Alarma', 'Códigos', 'Configuración'] },
    { title: 'Descarga de la aplicación ADT Chile', href: '/articulo/descarga-app-adt', description: 'Instala la app oficial en tu dispositivo', tags: ['App ADT', 'Descarga', 'Android', 'iOS'] },
    { title: 'Primer acceso a la app', href: '/articulo/primer-acceso-app', description: 'Configuración inicial de la aplicación', tags: ['App ADT', 'Configuración', 'Registro'] },
    { title: 'Vinculación con tu sistema', href: '/articulo/vinculacion-sistema', description: 'Conecta tu app con el sistema de alarma', tags: ['App ADT', 'Configuración', 'Conectividad'] },
    { title: 'Configuración de notificaciones', href: '/articulo/configuracion-notificaciones-app', description: 'Personaliza alertas y notificaciones', tags: ['App ADT', 'Notificaciones', 'Configuración'] },
    { title: 'Control remoto del sistema', href: '/articulo/control-remoto-app', description: 'Controla tu alarma desde cualquier lugar', tags: ['App ADT', 'Control Remoto'] },
    { title: 'Visualización de eventos', href: '/articulo/visualizacion-eventos', description: 'Consulta el historial de eventos', tags: ['App ADT', 'Eventos', 'Historial'] },
    { title: 'Mi alarma no se activa', href: '/articulo/alarma-no-activa', description: 'Soluciones para problemas de activación', tags: ['Soporte Técnico', 'Panel de Alarma'] },
    { title: 'Problemas de conectividad', href: '/articulo/problemas-conectividad', description: 'Resuelve problemas de conexión del sistema', tags: ['Soporte Técnico', 'Conectividad', 'WiFi'] },
    { title: 'Sensores con mal funcionamiento', href: '/articulo/sensores-mal-funcionamiento', description: 'Diagnóstico y solución de sensores', tags: ['Soporte Técnico', 'Sensores', 'Diagnóstico'] },
    { title: 'Central de monitoreo ADT', href: '/articulo/central-monitoreo', description: 'Centro de operaciones que supervisa tu seguridad', tags: ['Monitoreo 24/7', 'Central de Monitoreo'] },
    { title: 'Monitoreo 24/7', href: '/articulo/monitoreo-24-7', description: 'Supervisión continua de tu sistema de seguridad', tags: ['Monitoreo 24/7', 'Servicios ADT'] },
    { title: 'Tipos de monitoreo disponibles', href: '/articulo/tipos-monitoreo', description: 'Modalidades de monitoreo para diferentes necesidades', tags: ['Monitoreo 24/7', 'Servicios ADT'] },
    { title: 'Protocolo de emergencias', href: '/articulo/protocolo-emergencias', description: 'Procedimientos de respuesta ante emergencias', tags: ['Monitoreo 24/7', 'Emergencias'] },
    { title: '¿Qué es ADT Smart Security?', href: '/articulo/que-es-adt-smart-security', description: 'Plataforma inteligente de seguridad integral', tags: ['Servicios ADT', 'Tecnología'] },
    { title: 'Servicios adicionales', href: '/articulo/servicios-adicionales', description: 'Servicios complementarios de videovigilancia y soporte técnico', tags: ['Servicios ADT', 'Videovigilancia'] }
  ];

  // Filtrar artículos que contengan la palabra buscada
  const filteredArticles = allArticles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.description.toLowerCase().includes(searchLower) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: `Búsqueda: ${searchQuery}` }
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
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Resultados de búsqueda</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-2">
            Buscando: <span className="font-semibold">"{searchQuery}"</span>
          </p>
          <p className="text-sm text-muted-foreground">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <Link to={article.href} className="block">
                        <h3 className="text-xl font-semibold mb-2 text-primary hover:text-primary/80 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{article.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No se encontraron resultados</h2>
              <p className="text-muted-foreground mb-4">
                No encontramos artículos que contengan "{searchQuery}".
              </p>
              <p className="text-sm text-muted-foreground">
                Intenta con otras palabras clave o navega por nuestras categorías.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
