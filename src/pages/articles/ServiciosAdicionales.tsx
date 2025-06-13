
import React from 'react';
import { ArrowLeft, Plus, Camera, Wrench, Shield, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const ServiciosAdicionales = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: 'Servicios adicionales' }
  ];

  const tags = ['Servicios ADT', 'Videovigilancia', 'Mantenimiento', 'Cámaras IP', 'Soporte Técnico'];

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
            <Plus className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Servicios adicionales</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Servicios Complementarios ADT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                Además de nuestro servicio básico de monitoreo, ADT Chile ofrece una amplia gama de servicios adicionales para brindar una protección integral a tu hogar o empresa.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Servicios de Videovigilancia</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" />
                    Cámaras de Seguridad HD
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">Sistema de videovigilancia con grabación en alta definición y acceso remoto.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Cámaras interiores y exteriores</li>
                    <li>• Grabación en la nube</li>
                    <li>• Visualización remota 24/7</li>
                    <li>• Detección de movimiento inteligente</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Servicios Técnicos</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Mantenimiento Preventivo
                  </h3>
                  <p className="text-muted-foreground text-sm">Revisiones periódicas para garantizar el funcionamiento óptimo del sistema.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Actualización de Equipos</h3>
                  <p className="text-muted-foreground text-sm">Renovación y actualización de componentes para mantener la tecnología al día.</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Soporte Técnico 24/7</h3>
                  <p className="text-muted-foreground text-sm">Asistencia técnica disponible las 24 horas para resolver cualquier inconveniente.</p>
                </div>
              </div>
            </section>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Consulta por Servicios Adicionales</h3>
                  <p className="text-sm mb-3">Contacta a nuestros especialistas para conocer más sobre nuestros servicios complementarios.</p>
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

export default ServiciosAdicionales;
