
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const ModosArmado = () => {
  const breadcrumbItems = [
    { label: 'Panel de Alarma', href: '/panel-alarma' },
    { label: 'Modos de armado parcial y total' }
  ];

  const articleTags = [
    'Panel de Alarma',
    'Armado Total',
    'Armado Parcial',
    'Sensores',
    'Configuración',
    'Zonas'
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Modos de armado parcial y total</h1>
          </div>
          
          <ArticleTags tags={articleTags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Tipos de Armado del Sistema ADT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Conoce las diferencias entre los modos de armado para usar tu sistema de manera óptima.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Armado Total (Away)</h2>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-red-800 mb-2">Características:</h3>
                  <ul className="space-y-2 list-disc list-inside text-red-700">
                    <li>Activa TODOS los sensores del sistema</li>
                    <li>Incluye sensores de movimiento interiores</li>
                    <li>Sensores de puertas y ventanas</li>
                    <li>Detectores de humo y gases</li>
                    <li>Botones de pánico</li>
                  </ul>
                </div>
                <p><strong>Cuándo usar:</strong> Al salir completamente del hogar o local comercial.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Armado Parcial (Stay)</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Características:</h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>Activa solo sensores perimetrales</li>
                    <li>Puertas y ventanas protegidas</li>
                    <li>Sensores de movimiento DESACTIVADOS</li>
                    <li>Detectores de humo activos</li>
                    <li>Botones de pánico activos</li>
                  </ul>
                </div>
                <p><strong>Cuándo usar:</strong> Al dormir o estar en casa pero querer proteger el perímetro.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configuración de Zonas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Zonas Interiores</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Detectores de movimiento</li>
                      <li>• Sensores de vibración</li>
                      <li>• Detectores de rotura</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Zonas Perimetrales</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Contactos magnéticos</li>
                      <li>• Sensores de puertas</li>
                      <li>• Detectores de ventanas</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Tip Importante:</h3>
                <p>Puedes personalizar qué zonas se activan en cada modo. Contacta a soporte técnico para configuraciones especiales.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModosArmado;
