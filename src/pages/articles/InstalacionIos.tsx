
import React from 'react';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const InstalacionIos = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Instalación en iOS' }
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
            <Smartphone className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Instalación en iOS</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Guía de Instalación para iPhone y iPad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Descarga e instala la aplicación ADT Chile en tu dispositivo iOS siguiendo esta guía paso a paso.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Requisitos del Sistema</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>iOS 12.0 o posterior</li>
                  <li>iPhone 6s o más reciente</li>
                  <li>iPad (5ª generación) o más reciente</li>
                  <li>Al menos 100 MB de espacio libre</li>
                  <li>Apple ID activo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Instalación desde App Store</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la App Store en tu dispositivo iOS</li>
                  <li>Toca la pestaña "Buscar" en la parte inferior</li>
                  <li>Escribe "ADT Chile" en la barra de búsqueda</li>
                  <li>Selecciona la aplicación oficial de ADT Chile</li>
                  <li>Toca "Obtener" para iniciar la descarga</li>
                  <li>Confirma con Face ID, Touch ID o tu contraseña</li>
                  <li>Espera a que se complete la instalación</li>
                  <li>Toca "Abrir" para lanzar la aplicación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configuración de Permisos</h2>
                <p className="mb-3">Al abrir la app por primera vez, se solicitarán permisos para:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Notificaciones:</strong> Para recibir alertas de seguridad</li>
                  <li><strong>Ubicación:</strong> Para funciones de geolocalización</li>
                  <li><strong>Cámara:</strong> Para escanear códigos QR de configuración</li>
                  <li><strong>Face ID/Touch ID:</strong> Para acceso seguro y rápido</li>
                </ul>
              </section>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Consejo:</h3>
                <p className="text-blue-700">Acepta todos los permisos para aprovechar al máximo las funcionalidades de seguridad de la aplicación.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstalacionIos;
