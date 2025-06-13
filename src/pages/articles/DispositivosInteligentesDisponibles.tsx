
import React from 'react';
import { ArrowLeft, Smartphone, Camera, Lock, Thermometer, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const DispositivosInteligentesDisponibles = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: 'Dispositivos inteligentes disponibles' }
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
            <h1 className="text-4xl font-bold">Dispositivos inteligentes disponibles</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-primary" />
              Catálogo ADT Smart Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                Descubre la amplia gama de dispositivos inteligentes compatibles con ADT Smart Security para crear un hogar completamente conectado y seguro.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Cámaras y Videovigilancia</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" />
                    Cámaras Interiores HD
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Resolución 1080p Full HD</li>
                    <li>• Visión nocturna automática</li>
                    <li>• Audio bidireccional</li>
                    <li>• Detección de movimiento inteligente</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Cámaras Exteriores Resistentes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Resistencia IP65 para exteriores</li>
                    <li>• Visión nocturna hasta 30 metros</li>
                    <li>• Detección de movimiento por zonas</li>
                    <li>• Grabación continua o por eventos</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Control de Acceso</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Cerraduras Inteligentes
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apertura con código, tarjeta o app</li>
                    <li>• Historial de accesos</li>
                    <li>• Códigos temporales para invitados</li>
                    <li>• Bloqueo automático programable</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Sensores de Apertura</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Detección en puertas y ventanas</li>
                    <li>• Instalación sin cables</li>
                    <li>• Batería de larga duración</li>
                    <li>• Notificaciones en tiempo real</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Automatización del Hogar</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Iluminación Inteligente
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Control remoto de luces</li>
                    <li>• Programación de horarios</li>
                    <li>• Regulación de intensidad</li>
                    <li>• Simulación de presencia</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-primary" />
                    Termostatos Inteligentes
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Control de temperatura remoto</li>
                    <li>• Programación semanal</li>
                    <li>• Ahorro energético automático</li>
                    <li>• Integración con geolocalización</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Compatibilidad y Requisitos</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Conectividad</h3>
                    <ul className="text-sm space-y-1">
                      <li>• WiFi 2.4GHz y 5GHz</li>
                      <li>• Bluetooth Low Energy</li>
                      <li>• Z-Wave y Zigbee</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Aplicación</h3>
                    <ul className="text-sm space-y-1">
                      <li>• iOS 12.0 o superior</li>
                      <li>• Android 6.0 o superior</li>
                      <li>• Control unificado ADT Chile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DispositivosInteligentesDisponibles;
