import React from 'react';
import { ArrowLeft, Download, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const DescargaAppAdt = () => {
  const breadcrumbItems = [
    { label: 'Aplicación ADT', href: '/app-adt' },
    { label: 'Descarga de la aplicación ADT Chile' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/app-adt" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Aplicación ADT
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Download className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Descarga de la aplicación ADT Chile</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Instalación de la App ADT Chile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Descarga e instala la aplicación oficial ADT Chile para controlar tu sistema de seguridad desde cualquier lugar.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Descarga para Android</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre Google Play Store en tu dispositivo Android</li>
                  <li>Busca "ADT Chile" en la barra de búsqueda</li>
                  <li>Selecciona la aplicación oficial de ADT Chile</li>
                  <li>Presiona "Instalar" para descargar la app</li>
                  <li>Espera a que se complete la instalación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Descarga para iOS</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre App Store en tu iPhone o iPad</li>
                  <li>Busca "ADT Chile" en la sección de búsqueda</li>
                  <li>Encuentra la aplicación oficial de ADT Chile</li>
                  <li>Toca "Obtener" para descargar la aplicación</li>
                  <li>Usa Touch ID, Face ID o tu contraseña para confirmar</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Requisitos del Sistema</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Android</h3>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Android 6.0 o superior</li>
                      <li>Conexión a internet (WiFi o datos móviles)</li>
                      <li>Al menos 50 MB de espacio libre</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">iOS</h3>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>iOS 12.0 o superior</li>
                      <li>Conexión a internet (WiFi o celular)</li>
                      <li>Al menos 50 MB de espacio libre</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="font-semibold text-accent-foreground mb-2 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Próximos Pasos
                </h3>
                <p>Una vez instalada la aplicación, necesitarás configurarla con tus credenciales de cliente ADT. Si no tienes tus datos de acceso, contacta a nuestro servicio al cliente.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DescargaAppAdt;
