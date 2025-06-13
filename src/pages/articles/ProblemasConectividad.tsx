
import React from 'react';
import { ArrowLeft, Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const ProblemasConectividad = () => {
  const breadcrumbItems = [
    { label: 'Soporte', href: '/soporte' },
    { label: 'Problemas de conectividad' }
  ];

  const tags = ['Soporte Técnico', 'Conectividad', 'WiFi', 'Configuración', 'Diagnóstico'];

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
            <Wifi className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Problemas de conectividad</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Solucionar Problemas de Conexión</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Resuelve problemas de conectividad en tu sistema ADT para mantener la comunicación con la central de monitoreo.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Conectividad</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">WiFi</h4>
                    <p className="text-sm text-muted-foreground">Conexión por red inalámbrica</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Ethernet</h4>
                    <p className="text-sm text-muted-foreground">Conexión por cable de red</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Celular</h4>
                    <p className="text-sm text-muted-foreground">Respaldo por red móvil</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Problemas WiFi</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Diagnóstico</h4>
                    <ol className="space-y-1 list-decimal list-inside text-sm">
                      <li>Verifica si otros dispositivos se conectan al WiFi</li>
                      <li>Comprueba la distancia entre el panel y el router</li>
                      <li>Revisa si la red WiFi aparece en el panel</li>
                      <li>Confirma que la contraseña WiFi sea correcta</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Soluciones</h4>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Reinicia el router y espera 2 minutos</li>
                      <li>Acerca el panel al router durante la configuración</li>
                      <li>Verifica que la red sea de 2.4GHz (no 5GHz)</li>
                      <li>Elimina y vuelve a agregar la red WiFi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Problemas de Red Celular</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Síntomas Comunes</h4>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Panel muestra "Sin señal celular"</li>
                      <li>Comunicaciones intermitentes con la central</li>
                      <li>Demoras en el envío de alertas</li>
                      <li>App móvil no se conecta al sistema</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pasos de Solución</h4>
                    <ol className="space-y-1 list-decimal list-inside text-sm">
                      <li>Verifica la intensidad de señal en el panel</li>
                      <li>Reposiciona la antena celular (si es externa)</li>
                      <li>Reinicia el módulo celular desde el panel</li>
                      <li>Contacta a soporte para verificar la cuenta celular</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Pruebas de Conectividad</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Prueba Manual</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Ve a Configuración → Red</li>
                      <li>Selecciona "Probar Conexión"</li>
                      <li>Espera el resultado de la prueba</li>
                      <li>Anota cualquier código de error</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Prueba Automática</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>El sistema prueba cada 24 horas</li>
                      <li>Recibirás alerta si hay fallas</li>
                      <li>Revisa el historial de pruebas</li>
                      <li>Programa pruebas adicionales</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Códigos de Error de Red</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-red-50 border-l-4 border-red-500 rounded">
                    <span className="font-mono">NET001</span>
                    <span className="text-sm">Sin conexión a internet</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <span className="font-mono">NET002</span>
                    <span className="text-sm">Señal WiFi débil</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
                    <span className="font-mono">NET003</span>
                    <span className="text-sm">Falla en módulo celular</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <span className="font-mono">NET004</span>
                    <span className="text-sm">Timeout de comunicación</span>
                  </div>
                </div>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Importante:</h3>
                <p>Un sistema sin conectividad no puede comunicarse con la central de monitoreo. Si no puedes resolver el problema, contacta soporte técnico inmediatamente.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProblemasConectividad;
