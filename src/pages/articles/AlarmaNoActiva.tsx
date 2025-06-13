
import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const AlarmaNoActiva = () => {
  const breadcrumbItems = [
    { label: 'Soporte', href: '/soporte' },
    { label: 'Mi alarma no se activa' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/soporte" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Soporte
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mi alarma no se activa</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Solución a Problemas de Activación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Si tu sistema de alarma no se activa, sigue estos pasos para identificar y resolver el problema.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Causas Comunes</h2>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-800">Zonas Abiertas</h4>
                    <p className="text-sm text-red-600">Puertas o ventanas sin cerrar correctamente</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-800">Sensores con Falla</h4>
                    <p className="text-sm text-yellow-600">Dispositivos desconectados o con batería baja</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Problemas de Conectividad</h4>
                    <p className="text-sm text-blue-600">Falta de conexión a internet o red celular</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Pasos de Diagnóstico</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Verificar el Panel:</strong> Revisa si hay mensajes de error o luces de alerta</li>
                  <li><strong>Comprobar Zonas:</strong> Asegúrate de que todas las zonas muestren "LISTO"</li>
                  <li><strong>Revisar Sensores:</strong> Verifica que todos los dispositivos estén funcionando</li>
                  <li><strong>Comprobar Códigos:</strong> Asegúrate de usar el código correcto</li>
                  <li><strong>Verificar Energía:</strong> Confirma que el sistema tenga alimentación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Soluciones Inmediatas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Para Zonas Abiertas</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Cierra todas las puertas y ventanas</li>
                      <li>Verifica que los contactos magnéticos estén alineados</li>
                      <li>Limpia los sensores de polvo o suciedad</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Para Sensores con Falla</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Reemplaza baterías de sensores inalámbricos</li>
                      <li>Verifica conexiones de sensores cableados</li>
                      <li>Realiza una prueba de comunicación</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Códigos de Error Frecuentes</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="font-mono">E001</span>
                    <span className="text-sm">Zona 1 abierta - Puerta principal</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="font-mono">E002</span>
                    <span className="text-sm">Batería baja en sensor</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="font-mono">E003</span>
                    <span className="text-sm">Falla de comunicación</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="font-mono">E004</span>
                    <span className="text-sm">Panel sin energía principal</span>
                  </div>
                </div>
              </section>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">¿Persiste el Problema?</h3>
                <p className="text-red-700">Si después de seguir estos pasos tu alarma sigue sin activarse, contacta inmediatamente a nuestro soporte técnico 24/7 al 600 123 4567.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlarmaNoActiva;
