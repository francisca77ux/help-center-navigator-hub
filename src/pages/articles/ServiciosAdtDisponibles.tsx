import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ServiciosAdtDisponibles = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: '¿Qué servicios ofrece ADT?' }
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">¿Qué servicios ofrece ADT?</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Servicios de Seguridad ADT Chile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              ADT Chile ofrece una amplia gama de servicios de seguridad diseñados para proteger tu hogar y negocio las 24 horas del día, los 7 días de la semana.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Servicios Principales</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Monitoreo 24/7 por central de alarmas certificada</li>
                  <li>Sistemas de alarma con sensores de movimiento y apertura</li>
                  <li>Videovigilancia con cámaras de alta definición</li>
                  <li>Control de acceso y cerraduras inteligentes</li>
                  <li>Automatización del hogar (domótica)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">ADT Smart Security</h2>
                <p>
                  Nuestro servicio más avanzado que incluye tecnología inteligente para el control total de tu seguridad desde cualquier lugar a través de la aplicación móvil ADT Chile.
                </p>
                <ul className="space-y-2 list-disc list-inside mt-3">
                  <li>Control remoto desde smartphone</li>
                  <li>Notificaciones en tiempo real</li>
                  <li>Integración con dispositivos inteligentes</li>
                  <li>Análisis de video con inteligencia artificial</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Servicios Técnicos</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Instalación profesional gratuita</li>
                  <li>Mantenimiento preventivo y correctivo</li>
                  <li>Soporte técnico 24/7</li>
                  <li>Garantía de equipos y servicio</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiciosAdtDisponibles;
