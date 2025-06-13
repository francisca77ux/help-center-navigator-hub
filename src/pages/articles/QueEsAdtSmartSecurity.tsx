
import React from 'react';
import { ArrowLeft, Smartphone, Wifi, Home, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const QueEsAdtSmartSecurity = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: '¿Qué es ADT Smart Security?' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/servicios-adt" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Servicios ADT
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">¿Qué es ADT Smart Security?</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Home className="h-6 w-6 text-primary" />
              La Evolución de la Seguridad Inteligente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground">
                ADT Smart Security es nuestro sistema de seguridad más avanzado que integra tecnología IoT (Internet de las Cosas) para brindarte control total sobre la seguridad y automatización de tu hogar desde cualquier lugar del mundo.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Características Principales</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    Control Móvil Total
                  </h3>
                  <p className="text-muted-foreground text-sm">Maneja tu sistema de seguridad desde tu smartphone con la aplicación ADT Chile, disponible para iOS y Android.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" />
                    Conectividad Inalámbrica
                  </h3>
                  <p className="text-muted-foreground text-sm">Todos los dispositivos se conectan vía WiFi o red celular, eliminando la necesidad de cableado complejo.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Automatización Inteligente
                  </h3>
                  <p className="text-muted-foreground text-sm">Programa rutinas automáticas que se activan según horarios, ubicación o eventos específicos.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Dispositivos Incluidos</h2>
              <div className="space-y-4">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Kit Básico Smart Security</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Panel de control táctil con WiFi</li>
                    <li>• Sensores de puertas y ventanas inalámbricos</li>
                    <li>• Detector de movimiento con cámara integrada</li>
                    <li>• Llaveros de activación/desactivación</li>
                    <li>• Sirena interior inalámbrica</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Dispositivos Opcionales</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Cámaras IP de alta definición</li>
                    <li>• Cerraduras inteligentes</li>
                    <li>• Detectores de humo inteligentes</li>
                    <li>• Sensores de inundación y temperatura</li>
                    <li>• Termostatos inteligentes</li>
                    <li>• Enchufes y interruptores inteligentes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Ventajas del Sistema</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Para tu Seguridad</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Notificaciones instantáneas</li>
                    <li>• Verificación visual con cámaras</li>
                    <li>• Control remoto total</li>
                    <li>• Historial de eventos</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Para tu Comodidad</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Automatización de rutinas</li>
                    <li>• Control de iluminación</li>
                    <li>• Gestión de temperatura</li>
                    <li>• Integración con asistentes virtuales</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Comparación con Sistema Tradicional</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left">Característica</th>
                      <th className="border border-border p-3 text-center">Sistema Tradicional</th>
                      <th className="border border-border p-3 text-center">ADT Smart Security</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Control remoto</td>
                      <td className="border border-border p-3 text-center">No</td>
                      <td className="border border-border p-3 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Notificaciones móviles</td>
                      <td className="border border-border p-3 text-center">No</td>
                      <td className="border border-border p-3 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Automatización</td>
                      <td className="border border-border p-3 text-center">No</td>
                      <td className="border border-border p-3 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Instalación</td>
                      <td className="border border-border p-3 text-center">Con cables</td>
                      <td className="border border-border p-3 text-center text-green-600">Inalámbrica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QueEsAdtSmartSecurity;
