
import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const SensoresMalFuncionamiento = () => {
  const breadcrumbItems = [
    { label: 'Soporte', href: '/soporte' },
    { label: 'Sensores con mal funcionamiento' }
  ];

  const tags = ['Soporte Técnico', 'Sensores', 'Diagnóstico', 'Panel de Alarma', 'Mantenimiento'];

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
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Sensores con mal funcionamiento</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Diagnóstico y Solución de Sensores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Identifica y resuelve problemas comunes en sensores de tu sistema de seguridad ADT.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Sensores</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Sensores de Puerta/Ventana</h4>
                    <p className="text-sm text-muted-foreground">Detectan apertura de accesos</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Detectores de Movimiento</h4>
                    <p className="text-sm text-muted-foreground">PIR para detección de intrusos</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Detectores de Humo</h4>
                    <p className="text-sm text-muted-foreground">Protección contra incendios</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Sensores de Rotura</h4>
                    <p className="text-sm text-muted-foreground">Detectan rotura de cristales</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Síntomas de Mal Funcionamiento</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Falsas alarmas frecuentes</li>
                  <li>Sensor no responde cuando debería activarse</li>
                  <li>LED del sensor parpadea de forma anormal</li>
                  <li>Panel muestra zona en falla o supervisión</li>
                  <li>Batería baja en sensores inalámbricos</li>
                  <li>Pérdida de comunicación con el panel</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Diagnóstico Paso a Paso</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Identificar el sensor:</strong> Revisa qué zona reporta problemas en el panel</li>
                  <li><strong>Inspección visual:</strong> Busca daños físicos, suciedad o desalineación</li>
                  <li><strong>Prueba de activación:</strong> Activa manualmente el sensor para ver su respuesta</li>
                  <li><strong>Verificar alimentación:</strong> Comprueba el estado de la batería o conexión</li>
                  <li><strong>Revisar entorno:</strong> Elimina obstrucciones o interferencias</li>
                  <li><strong>Probar comunicación:</strong> Verifica la señal entre sensor y panel</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Soluciones Comunes</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Para Sensores de Puerta/Ventana</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Alinear correctamente el imán con el contacto</li>
                      <li>Limpiar los contactos con alcohol isopropílico</li>
                      <li>Verificar que la distancia no exceda 2 cm</li>
                      <li>Reemplazar batería si es inalámbrico</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Para PIR (Detectores de Movimiento)</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Limpiar la lente del detector con paño suave</li>
                      <li>Ajustar la sensibilidad si es regulable</li>
                      <li>Eliminar objetos que se muevan con el viento</li>
                      <li>Verificar que no apunte a fuentes de calor</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Cuándo Llamar al Técnico</h2>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-yellow-800">Contacta a soporte técnico si:</p>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>El sensor sigue fallando después de limpieza y ajustes</li>
                    <li>Hay daño físico visible en el dispositivo</li>
                    <li>Problemas de comunicación persisten</li>
                    <li>Múltiples sensores fallan simultáneamente</li>
                  </ul>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SensoresMalFuncionamiento;
