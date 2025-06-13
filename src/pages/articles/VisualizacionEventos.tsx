
import React from 'react';
import { ArrowLeft, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const VisualizacionEventos = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Visualización de eventos' }
  ];

  const tags = ['App ADT', 'Eventos', 'Historial', 'Monitoreo', 'Notificaciones'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/app-adt" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a App ADT
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <History className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Visualización de eventos</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Historial y Monitoreo de Eventos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Consulta el historial completo de eventos de tu sistema de seguridad desde la aplicación móvil.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Eventos</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Eventos de Alarma</h4>
                      <p className="text-sm text-muted-foreground">Activaciones, intrusiones, pánico</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Eventos del Sistema</h4>
                      <p className="text-sm text-muted-foreground">Armado, desarmado, fallas técnicas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Eventos de Usuario</h4>
                      <p className="text-sm text-muted-foreground">Accesos, cambios de configuración</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Eventos de Mantenimiento</h4>
                      <p className="text-sm text-muted-foreground">Batería baja, pruebas, actualizaciones</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Acceder al Historial</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT Chile</li>
                  <li>Toca "Historial" en el menú principal</li>
                  <li>Selecciona el rango de fechas que deseas consultar</li>
                  <li>Filtra por tipo de evento si es necesario</li>
                  <li>Revisa la lista cronológica de eventos</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Información de Cada Evento</h2>
                <p className="mb-3">Cada evento muestra la siguiente información:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Fecha y hora exacta</strong> del evento</li>
                  <li><strong>Tipo de evento</strong> y descripción detallada</li>
                  <li><strong>Zona o dispositivo</strong> que generó el evento</li>
                  <li><strong>Usuario</strong> asociado (si aplica)</li>
                  <li><strong>Estado del sistema</strong> antes y después</li>
                  <li><strong>Acciones tomadas</strong> por la central de monitoreo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Filtros y Búsqueda</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Filtros Disponibles</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Por fecha (día, semana, mes)</li>
                      <li>Por tipo de evento</li>
                      <li>Por zona específica</li>
                      <li>Por usuario</li>
                      <li>Por nivel de prioridad</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opciones de Exportación</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Exportar a PDF</li>
                      <li>Enviar por email</li>
                      <li>Compartir eventos específicos</li>
                      <li>Programar reportes automáticos</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Tip Útil:</h3>
                <p className="text-blue-700">Revisa regularmente tu historial para identificar patrones de actividad y optimizar la configuración de tu sistema de seguridad.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualizacionEventos;
