
import React from 'react';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const InstalacionAndroid = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Instalación en Android' }
  ];

  const articleTags = [
    'Android',
    'Instalación',
    'Google Play Store',
    'Aplicación Móvil',
    'Configuración',
    'Permisos'
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
            <h1 className="text-4xl font-bold">Instalación en Android</h1>
          </div>
          
          <ArticleTags tags={articleTags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Guía de Instalación para Android</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Instala la aplicación ADT Chile en tu dispositivo Android siguiendo estos pasos detallados.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Requisitos del Sistema</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Android 6.0 (API nivel 23) o superior</li>
                  <li>Al menos 100 MB de espacio libre</li>
                  <li>Conexión a internet estable</li>
                  <li>Cuenta de Google activa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Instalación desde Google Play Store</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación "Play Store" en tu dispositivo</li>
                  <li>Toca el ícono de búsqueda en la parte superior</li>
                  <li>Escribe "ADT Chile" y presiona buscar</li>
                  <li>Selecciona la app oficial con el logo de ADT</li>
                  <li>Toca "Instalar" para iniciar la descarga</li>
                  <li>Espera a que se complete la instalación automáticamente</li>
                  <li>Toca "Abrir" para iniciar la aplicación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Permisos Necesarios</h2>
                <p className="mb-3">La aplicación solicitará los siguientes permisos:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Ubicación:</strong> Para servicios de geolocalización</li>
                  <li><strong>Cámara:</strong> Para escanear códigos QR</li>
                  <li><strong>Notificaciones:</strong> Para alertas del sistema</li>
                  <li><strong>Almacenamiento:</strong> Para guardar configuraciones</li>
                </ul>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Próximo Paso:</h3>
                <p>Una vez instalada, necesitarás configurar la aplicación con tus credenciales de cliente ADT para comenzar a usar todas las funcionalidades.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstalacionAndroid;
