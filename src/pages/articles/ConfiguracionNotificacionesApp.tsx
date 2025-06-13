
import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ConfiguracionNotificacionesApp = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Configuración de notificaciones' }
  ];

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
            <Bell className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Configuración de notificaciones</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Personaliza tus Alertas y Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Configura las notificaciones de tu app ADT para recibir alertas importantes en tiempo real.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Notificaciones</h2>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-800">Alertas de Seguridad</h4>
                    <p className="text-sm text-red-600">Activación de alarmas, intrusiones, emergencias</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Estado del Sistema</h4>
                    <p className="text-sm text-blue-600">Armado/desarmado, fallas de conectividad</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-800">Mantenimiento</h4>
                    <p className="text-sm text-green-600">Batería baja, revisiones programadas</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configuración Paso a Paso</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la app ADT y ve a "Configuración"</li>
                  <li>Selecciona "Notificaciones" en el menú</li>
                  <li>Activa las notificaciones push en tu dispositivo</li>
                  <li>Personaliza cada tipo de alerta:</li>
                  <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                    <li>Sonido de notificación</li>
                    <li>Vibración</li>
                    <li>Mostrar en pantalla bloqueada</li>
                    <li>Prioridad de la notificación</li>
                  </ul>
                  <li>Configura horarios de silencio si lo deseas</li>
                  <li>Guarda los cambios</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configuración Avanzada</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Notificaciones de email:</strong> Recibe alertas también en tu correo</li>
                  <li><strong>SMS de respaldo:</strong> Mensajes de texto para alertas críticas</li>
                  <li><strong>Contactos de emergencia:</strong> Notifica automáticamente a familiares</li>
                  <li><strong>Geolocalización:</strong> Alertas basadas en tu ubicación</li>
                </ul>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Recomendación:</h3>
                <p>Mantén activadas las alertas de seguridad críticas. Puedes silenciar notificaciones menos importantes durante la noche, pero nunca las de emergencia.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfiguracionNotificacionesApp;
