
import React from 'react';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ControlRemotoApp = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Control remoto del sistema' }
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
            <h1 className="text-4xl font-bold">Control remoto del sistema</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Controla tu Sistema desde Cualquier Lugar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a usar todas las funciones de control remoto de tu sistema ADT desde la aplicación móvil.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Funciones Principales</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-700">Armar Sistema</h3>
                    <p className="text-sm">Activa tu alarma de forma total o parcial</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-red-700">Desarmar Sistema</h3>
                    <p className="text-sm">Desactiva la alarma al llegar a casa</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-700">Estado en Vivo</h3>
                    <p className="text-sm">Consulta el estado actual de tu sistema</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-purple-700">Control de Zonas</h3>
                    <p className="text-sm">Activa o desactiva zonas individuales</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Armado Remoto</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT en tu teléfono</li>
                  <li>Verifica que todas las zonas estén cerradas (sin alertas rojas)</li>
                  <li>Selecciona el tipo de armado:</li>
                  <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                    <li><strong>Total:</strong> Activa todas las zonas</li>
                    <li><strong>Parcial:</strong> Solo zonas perimetrales</li>
                    <li><strong>Nocturno:</strong> Configuración personalizada</li>
                  </ul>
                  <li>Toca "Armar" y confirma la acción</li>
                  <li>Recibirás confirmación cuando el sistema esté activo</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Desarmado Remoto</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la app antes de ingresar a tu hogar</li>
                  <li>Toca el botón "Desarmar" en la pantalla principal</li>
                  <li>Introduce tu PIN de seguridad o usa biometría</li>
                  <li>Confirma la desactivación</li>
                  <li>Verifica que el sistema muestre "Desarmado"</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Control de Dispositivos</h2>
                <p className="mb-3">Desde la app también puedes controlar:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Luces inteligentes conectadas</li>
                  <li>Cerraduras electrónicas</li>
                  <li>Cámaras de seguridad</li>
                  <li>Detectores de humo y monóxido</li>
                  <li>Sensores de temperatura</li>
                </ul>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Importante:</h3>
                <p>El control remoto requiere conexión a internet tanto en tu teléfono como en el sistema de alarma. Asegúrate de tener una conexión estable para un funcionamiento óptimo.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ControlRemotoApp;
