
import React from 'react';
import { ArrowLeft, AlertTriangle, Phone, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ProtocoloEmergencias = () => {
  const breadcrumbItems = [
    { label: 'Servicios ADT', href: '/servicios-adt' },
    { label: 'Protocolo de emergencias' }
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
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Protocolo de emergencias</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Procedimientos de Respuesta ADT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground">
                ADT Chile cuenta con protocolos de emergencia rigurosos y probados para garantizar una respuesta rápida y efectiva ante cualquier situación de riesgo.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Protocolo de Respuesta Inmediata</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Recepción de Alarma (&lt;30 segundos)</h3>
                    <p className="text-muted-foreground text-sm">La central recibe la señal de alarma y la clasifica según el tipo de emergencia.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Verificación (1-2 minutos)</h3>
                    <p className="text-muted-foreground text-sm">Intentos de contacto telefónico con el cliente y contactos de emergencia registrados.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Activación de Respuesta (2-5 minutos)</h3>
                    <p className="text-muted-foreground text-sm">Contacto inmediato con las autoridades competentes según el tipo de emergencia.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold">Seguimiento Continuo</h3>
                    <p className="text-muted-foreground text-sm">Monitoreo constante hasta la resolución completa del incidente.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Tipos de Emergencia</h2>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4 border-red-200 bg-red-50">
                  <h3 className="font-semibold mb-2 text-red-800">Intrusión</h3>
                  <p className="text-red-700 text-sm">Contacto inmediato con Carabineros y verificación visual si hay cámaras disponibles.</p>
                </div>

                <div className="border rounded-lg p-4 border-orange-200 bg-orange-50">
                  <h3 className="font-semibold mb-2 text-orange-800">Incendio</h3>
                  <p className="text-orange-700 text-sm">Alerta inmediata a Bomberos y evacuación de personas si es necesario.</p>
                </div>

                <div className="border rounded-lg p-4 border-blue-200 bg-blue-50">
                  <h3 className="font-semibold mb-2 text-blue-800">Emergencia Médica</h3>
                  <p className="text-blue-700 text-sm">Contacto directo con servicios médicos de emergencia y seguimiento del caso.</p>
                </div>

                <div className="border rounded-lg p-4 border-purple-200 bg-purple-50">
                  <h3 className="font-semibold mb-2 text-purple-800">Pánico</h3>
                  <p className="text-purple-700 text-sm">Respuesta inmediata sin verificación previa, contacto directo con autoridades.</p>
                </div>
              </div>
            </section>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Contactos de Emergencia</h3>
                  <p className="text-sm mb-3">Mantén actualizados tus datos de contacto y los de tus personas de confianza para una respuesta más eficiente.</p>
                  <div className="space-y-1 text-sm">
                    <div><strong>Central ADT:</strong> 600 123 4567</div>
                    <div><strong>Emergencias:</strong> 133 (Carabineros), 132 (Bomberos), 131 (SAMU)</div>
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

export default ProtocoloEmergencias;
