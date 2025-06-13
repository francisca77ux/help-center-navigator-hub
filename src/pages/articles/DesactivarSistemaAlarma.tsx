
import React from 'react';
import { ArrowLeft, ShieldOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const DesactivarSistemaAlarma = () => {
  const breadcrumbItems = [
    { label: 'Panel de Alarma', href: '/panel-alarma' },
    { label: '¿Cómo desactivar mi sistema de alarma?' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/panel-alarma" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Panel de Alarma
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <ShieldOff className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">¿Cómo desactivar mi sistema de alarma?</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Desactivación del Sistema de Alarma ADT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a desactivar correctamente tu sistema de alarma ADT al llegar a tu hogar.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Desactivación desde el Panel</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa a tu hogar antes de que termine el tiempo de entrada (30 segundos)</li>
                  <li>Dirígete inmediatamente al panel de control</li>
                  <li>Ingresa tu código de usuario de 4 dígitos</li>
                  <li>Presiona la tecla "OFF" o "DESACTIVAR"</li>
                  <li>Escucharás 1 pitido largo confirmando la desactivación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Desactivación desde la App</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT Chile en tu smartphone</li>
                  <li>Inicia sesión con tus credenciales</li>
                  <li>Selecciona "Desactivar Sistema" en la pantalla principal</li>
                  <li>Confirma la desactivación con tu PIN o huella dactilar</li>
                  <li>Recibirás una notificación de confirmación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Desactivación por Control Remoto</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Presiona el botón "DESACTIVAR" en tu control remoto</li>
                  <li>Mantén presionado por 2 segundos</li>
                  <li>El LED del control parpadeará verde</li>
                  <li>Escucharás la confirmación desde el panel</li>
                </ol>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Recordatorio:</h3>
                <p>Si ingresas después del tiempo de entrada, la alarma se activará. Desactívala inmediatamente para evitar que se reporte a la central de monitoreo.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesactivarSistemaAlarma;
