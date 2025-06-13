
import React from 'react';
import { ArrowLeft, Monitor, Shield, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const TiposMonitoreo = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: 'Tipos de monitoreo disponibles' }
  ];

  const tags = ['Monitoreo 24/7', 'Servicios ADT', 'Seguridad', 'Videovigilancia', 'Emergencias'];

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
            <Monitor className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Tipos de monitoreo disponibles</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Modalidades de Monitoreo ADT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                ADT Chile ofrece diferentes tipos de monitoreo para adaptarse a las necesidades específicas de cada cliente, desde hogares hasta grandes empresas.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Monitoreo Básico</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Monitoreo 24/7 Estándar
                  </h3>
                  <p className="text-muted-foreground mb-3">Supervisión constante de tu sistema de alarma con respuesta inmediata ante cualquier activación.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Monitoreo continuo de sensores de intrusión</li>
                    <li>• Verificación telefónica en caso de alarma</li>
                    <li>• Contacto con autoridades cuando sea necesario</li>
                    <li>• Registro completo de eventos</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Monitoreo Premium</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4 bg-gradient-to-r from-accent/5 to-primary/5">
                  <h3 className="font-semibold mb-2">Monitoreo con Videovigilancia</h3>
                  <p className="text-muted-foreground text-sm mb-3">Incluye verificación visual mediante cámaras de seguridad conectadas.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Verificación visual de alarmas</li>
                    <li>• Grabación automática de eventos</li>
                    <li>• Acceso remoto a cámaras</li>
                    <li>• Almacenamiento en la nube</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Monitoreo de Pánico</h3>
                  <p className="text-muted-foreground text-sm mb-3">Botones de pánico para emergencias médicas o de seguridad personal.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Botones de pánico inalámbricos</li>
                    <li>• Respuesta inmediata sin verificación</li>
                    <li>• Contacto directo con servicios de emergencia</li>
                    <li>• Seguimiento médico si es necesario</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Monitoreo Especializado</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Monitoreo de Incendio</h3>
                  <p className="text-muted-foreground text-sm">Detectores de humo y calor conectados a la central de monitoreo.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Monitoreo Médico</h3>
                  <p className="text-muted-foreground text-sm">Sistemas de alerta médica para adultos mayores o personas con condiciones especiales.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Monitoreo Ambiental</h3>
                  <p className="text-muted-foreground text-sm">Detección de inundaciones, fugas de gas y otros riesgos ambientales.</p>
                </div>
              </div>
            </section>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Contacta a un Asesor</h3>
                  <p className="text-sm mb-3">Nuestros especialistas te ayudarán a elegir el tipo de monitoreo más adecuado para tu situación.</p>
                  <div className="space-y-1 text-sm">
                    <div><strong>Teléfono:</strong> 600 123 4567</div>
                    <div><strong>WhatsApp:</strong> +56 9 8765 4321</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TiposMonitoreo;
