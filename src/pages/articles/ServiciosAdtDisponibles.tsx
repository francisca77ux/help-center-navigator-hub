
import React from 'react';
import { ArrowLeft, Shield, CheckCircle, Phone, Monitor, Camera, Lock, Smartphone, Wifi } from 'lucide-react';
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

        <div className="space-y-8">
          <Card className="prose prose-lg max-w-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Servicios de Seguridad ADT Chile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-foreground font-medium">
                  ADT Chile es líder en servicios de seguridad y monitoreo en Chile, ofreciendo soluciones integrales para proteger tu hogar y negocio las 24 horas del día, los 7 días de la semana.
                </p>
              </div>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Monitor className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Servicios Principales de Monitoreo</h2>
                </div>
                
                <div className="grid gap-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Monitoreo 24/7</h3>
                      <p className="text-muted-foreground">Central de alarmas certificada que supervisa tu propiedad las 24 horas del día, todos los días del año.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Sistemas de Alarma Inteligente</h3>
                      <p className="text-muted-foreground">Equipos con sensores de movimiento, apertura de puertas y ventanas, y detectores especializados.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Respuesta Inmediata</h3>
                      <p className="text-muted-foreground">Protocolo de emergencia que incluye verificación y contacto con autoridades cuando sea necesario.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Camera className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Videovigilancia y Control Visual</h2>
                </div>
                
                <div className="space-y-4">
                  <p>Nuestro servicio de videovigilancia te permite monitorear tu propiedad en tiempo real:</p>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Cámaras de alta definición con visión nocturna</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Grabación en la nube y almacenamiento local</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Acceso remoto desde dispositivos móviles</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Detección inteligente de movimiento</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">ADT Smart Security - Tecnología Inteligente</h2>
                </div>
                
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg">
                  <p className="mb-4">
                    <strong>ADT Smart Security</strong> es nuestro servicio más avanzado que integra tecnología de última generación para brindarte control total sobre la seguridad de tu hogar.
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Características principales:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span className="text-sm">Control desde smartphone</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        <span className="text-sm">Conectividad inalámbrica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-primary" />
                        <span className="text-sm">Cerraduras inteligentes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automatización del hogar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold">Servicios Técnicos y Soporte</h2>
                
                <div class="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Instalación Profesional</h3>
                    <p className="text-muted-foreground text-sm">Técnicos certificados realizan la instalación sin costo adicional, incluyendo configuración y capacitación.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Mantenimiento Preventivo</h3>
                    <p className="text-muted-foreground text-sm">Revisiones periódicas programadas para asegurar el óptimo funcionamiento de todos los equipos.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Soporte Técnico 24/7</h3>
                    <p className="text-muted-foreground text-sm">Atención técnica disponible todos los días del año para resolver cualquier consulta o incidencia.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Garantía Integral</h3>
                    <p className="text-muted-foreground text-sm">Cobertura completa de equipos y servicio con reposición inmediata en caso de fallas.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">¿Por qué elegir ADT Chile?</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">+30</div>
                      <div className="text-sm text-muted-foreground">Años de experiencia en Chile</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoreo continuo</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Cobertura nacional</div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">¿Necesitas más información?</h3>
                    <p className="text-sm mb-3">Nuestros asesores están disponibles para ayudarte a elegir el plan de seguridad que mejor se adapte a tus necesidades.</p>
                    <div className="space-y-1 text-sm">
                      <div><strong>Teléfono:</strong> 600 123 4567</div>
                      <div><strong>WhatsApp:</strong> +56 9 8765 4321</div>
                      <div><strong>Email:</strong> info@adtchile.cl</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiciosAdtDisponibles;
