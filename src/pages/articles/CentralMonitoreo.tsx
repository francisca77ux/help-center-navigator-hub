
import React from 'react';
import { ArrowLeft, Building, Users, Shield, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const CentralMonitoreo = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: 'Central de monitoreo ADT' }
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
            <Building className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Central de monitoreo ADT</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Centro de Operaciones ADT Chile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                La Central de Monitoreo ADT es el corazón de nuestro servicio de seguridad, donde un equipo altamente capacitado supervisa tu propiedad las 24 horas del día.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Características de Nuestra Central</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Ubicación Estratégica
                  </h3>
                  <p className="text-muted-foreground text-sm">Central principal ubicada en Santiago con centros de respaldo en regiones para garantizar continuidad operacional.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Personal Especializado
                  </h3>
                  <p className="text-muted-foreground text-sm">Operadores certificados con entrenamiento continuo en protocolos de emergencia y manejo de crisis.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Operación 24/7/365
                  </h3>
                  <p className="text-muted-foreground text-sm">Funcionamiento ininterrumpido todos los días del año, incluyendo feriados y situaciones de emergencia.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Tecnología de Vanguardia</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Sistemas Redundantes</h3>
                  <p className="text-sm text-muted-foreground">Múltiples sistemas de comunicación y energía de respaldo para garantizar operación continua.</p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Protocolos Automatizados</h3>
                  <p className="text-sm text-muted-foreground">Sistemas automatizados que agilizan la respuesta y minimizan los tiempos de reacción.</p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Integración con Autoridades</h3>
                  <p className="text-sm text-muted-foreground">Conexión directa con Carabineros, Bomberos y servicios de emergencia médica.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Certificaciones y Estándares</h2>
              <div className="bg-accent/10 p-6 rounded-lg">
                <ul className="space-y-2 text-sm">
                  <li>• Certificación ISO 9001 para gestión de calidad</li>
                  <li>• Cumplimiento de normativas de seguridad nacionales</li>
                  <li>• Auditorías regulares de procesos y procedimientos</li>
                  <li>• Capacitación continua del personal operativo</li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CentralMonitoreo;
