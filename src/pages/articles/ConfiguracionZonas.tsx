
import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ConfiguracionZonas = () => {
  const breadcrumbItems = [
    { label: 'Panel de Alarma', href: '/panel-alarma' },
    { label: 'Configuración de zonas' }
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
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Configuración de zonas</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Configuración de Zonas del Sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a configurar y personalizar las zonas de tu sistema de alarma ADT.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Zonas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Zona de Entrada/Salida</h3>
                    <p className="text-sm text-muted-foreground">Permite tiempo para activar/desactivar</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Zona Instantánea</h3>
                    <p className="text-sm text-muted-foreground">Activa la alarma inmediatamente</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Zona Interior</h3>
                    <p className="text-sm text-muted-foreground">Solo activa en modo total</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Zona 24 Horas</h3>
                    <p className="text-sm text-muted-foreground">Siempre activa (humo, pánico)</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Programación de Zonas</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa el código maestro + [8]</li>
                  <li>Presiona [001] para zona 1 (o el número correspondiente)</li>
                  <li>Selecciona el tipo de zona:</li>
                  <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                    <li>[01] = Entrada/Salida</li>
                    <li>[03] = Instantánea</li>
                    <li>[04] = Interior</li>
                    <li>[08] = 24 Horas</li>
                  </ul>
                  <li>Presiona [#] para confirmar</li>
                  <li>Repite para cada zona</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Personalización Avanzada</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Bypass de Zonas</h4>
                    <p className="text-blue-700 text-sm">Permite omitir temporalmente una zona específica sin afectar el resto del sistema.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Nombres de Zonas</h4>
                    <p className="text-green-700 text-sm">Asigna nombres descriptivos como "Puerta Principal", "Ventana Sala", etc.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Tiempos de Respuesta</h4>
                    <p className="text-purple-700 text-sm">Configura diferentes tiempos de entrada y salida según la zona.</p>
                  </div>
                </div>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Consejo del Técnico:</h3>
                <p>Para configuraciones complejas, contacta a nuestro servicio técnico. Una configuración incorrecta puede generar falsas alarmas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfiguracionZonas;
