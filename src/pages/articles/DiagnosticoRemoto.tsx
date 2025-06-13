
import React from 'react';
import { ArrowLeft, Monitor, Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const DiagnosticoRemoto = () => {
  const breadcrumbItems = [
    { label: 'Soporte', href: '/soporte' },
    { label: 'Diagnóstico Remoto' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/soporte" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Soporte
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Diagnóstico Remoto</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Servicio de Diagnóstico Remoto ADT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Nuestro servicio de diagnóstico remoto permite identificar y resolver problemas en tu sistema de seguridad sin necesidad de una visita técnica presencial.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">¿Qué es el Diagnóstico Remoto?</h2>
                <p className="mb-3">
                  Es un servicio técnico que permite a nuestros especialistas acceder de forma segura a tu sistema de alarma a través de conexión de internet para:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Revisar el estado de todos los componentes</li>
                  <li>Identificar fallas o mal funcionamiento</li>
                  <li>Realizar configuraciones y ajustes</li>
                  <li>Actualizar firmware cuando sea necesario</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Requisitos para el Servicio</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Panel de alarma con conectividad IP</li>
                  <li>Conexión a internet estable</li>
                  <li>Autorización del cliente para acceso remoto</li>
                  <li>Sistema ADT compatible con diagnóstico remoto</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Proceso de Diagnóstico</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Contacta a ADT solicitando diagnóstico remoto</li>
                  <li>Agenda cita con nuestro técnico especializado</li>
                  <li>En la hora acordada, autoriza el acceso remoto</li>
                  <li>El técnico realizará las pruebas necesarias</li>
                  <li>Recibirás un reporte detallado del diagnóstico</li>
                  <li>Se programará visita técnica si es necesario</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Ventajas del Servicio</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Rapidez:</strong> Diagnóstico inmediato sin esperar visita</li>
                  <li><strong>Eficiencia:</strong> Identificación precisa de problemas</li>
                  <li><strong>Conveniencia:</strong> No requiere que estés presente</li>
                  <li><strong>Ahorro:</strong> Evita visitas técnicas innecesarias</li>
                </ul>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-primary">Importante:</h3>
                </div>
                <p>El diagnóstico remoto es un servicio gratuito para clientes ADT con sistemas compatibles. Contacta nuestro centro de atención para verificar si tu sistema es compatible.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiagnosticoRemoto;
