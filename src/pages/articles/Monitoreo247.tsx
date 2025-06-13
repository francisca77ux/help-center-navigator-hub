
import React from 'react';
import { ArrowLeft, Shield, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const Monitoreo247 = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: '¿Cómo funciona el monitoreo 24/7?' }
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
            <Clock className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">¿Cómo funciona el monitoreo 24/7?</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Sistema de Monitoreo Continuo ADT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                Nuestro sistema de monitoreo 24/7 garantiza que tu propiedad esté protegida las 24 horas del día, los 365 días del año, con tecnología de vanguardia y personal altamente capacitado.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Proceso de Monitoreo</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Detección de Señal</h3>
                    <p className="text-muted-foreground text-sm">Tu sistema de alarma envía automáticamente una señal a nuestra central cuando se activa cualquier sensor.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Recepción Inmediata</h3>
                    <p className="text-muted-foreground text-sm">Nuestros operadores reciben la alerta en menos de 30 segundos desde la activación.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Verificación</h3>
                    <p className="text-muted-foreground text-sm">Se realiza verificación telefónica contigo o con tus contactos de emergencia para confirmar la situación.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold">Respuesta</h3>
                    <p className="text-muted-foreground text-sm">Si es necesario, contactamos inmediatamente a Carabineros, Bomberos o servicios médicos.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Nuestra Central de Monitoreo</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Ubicación Estratégica
                  </h3>
                  <p className="text-muted-foreground text-sm">Central ubicada en Santiago con respaldo en otras ciudades principales del país.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Personal Especializado
                  </h3>
                  <p className="text-muted-foreground text-sm">Operadores certificados y entrenados en protocolos de emergencia.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Tecnología Redundante</h3>
                  <p className="text-muted-foreground text-sm">Sistemas de respaldo y múltiples vías de comunicación para garantizar continuidad.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Estadísticas de Respuesta</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
                    <div className="text-sm text-muted-foreground">Tiempo promedio de recepción de alarma</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-sm text-muted-foreground">Disponibilidad del sistema</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Días al año de operación</div>
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

export default Monitoreo247;
