
import React from 'react';
import { ArrowLeft, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const MantenimientoPreventivo = () => {
  const breadcrumbItems = [
    { label: 'Soporte', href: '/soporte' },
    { label: 'Mantenimiento preventivo' }
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
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mantenimiento preventivo</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Mantén tu Sistema en Óptimas Condiciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Sigue estas recomendaciones para mantener tu sistema ADT funcionando correctamente y prolongar su vida útil.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Calendario de Mantenimiento</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-700">Mensual</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Prueba de activación total</li>
                      <li>Limpieza de sensores</li>
                      <li>Verificación de baterías</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-700">Trimestral</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Limpieza del panel</li>
                      <li>Prueba de comunicación</li>
                      <li>Actualización de contactos</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-purple-700">Semestral</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Revisión técnica completa</li>
                      <li>Actualización de firmware</li>
                      <li>Calibración de sensores</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Mantenimiento del Panel</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Limpieza exterior:</strong> Usa un paño húmedo con agua y jabón neutro</li>
                  <li><strong>Limpieza de teclado:</strong> Limpia las teclas con alcohol isopropílico</li>
                  <li><strong>Verificación de cables:</strong> Revisa que no haya cables sueltos o dañados</li>
                  <li><strong>Comprobación de luces:</strong> Verifica que todos los LEDs funcionen</li>
                  <li><strong>Prueba de sonido:</strong> Confirma que las alertas audibles sean claras</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Cuidado de Sensores</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Sensores de Movimiento</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Limpia la lente con paño de microfibra</li>
                      <li>Verifica que no haya obstrucciones</li>
                      <li>Prueba el rango de detección</li>
                      <li>Reemplaza la batería cada 2-3 años</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contactos Magnéticos</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Limpia con alcohol los contactos</li>
                      <li>Verifica la alineación del imán</li>
                      <li>Comprueba la distancia (máx. 2cm)</li>
                      <li>Revisa que estén bien fijados</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Pruebas Recomendadas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Prueba Semanal</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Arma el sistema</li>
                      <li>Activa un sensor manualmente</li>
                      <li>Verifica que suene la alarma</li>
                      <li>Desarma con tu código</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Prueba de Comunicación</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Presiona botón de pánico (si lo tienes)</li>
                      <li>Espera llamada de la central</li>
                      <li>Proporciona tu clave de cancelación</li>
                      <li>Confirma que todo funciona</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Checklist de Mantenimiento</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Panel limpio y sin daños</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Todos los sensores responden</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Baterías con carga suficiente</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Comunicación con central OK</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">App móvil funcionando</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">Beneficios del Mantenimiento</h3>
                <p className="text-green-700">Un sistema bien mantenido reduce falsas alarmas, aumenta la confiabilidad y extiende la vida útil de los equipos.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MantenimientoPreventivo;
