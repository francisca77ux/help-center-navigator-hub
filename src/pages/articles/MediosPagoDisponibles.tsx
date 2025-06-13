import React from 'react';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const MediosPagoDisponibles = () => {
  const breadcrumbItems = [
    { label: 'Facturación y Pagos', href: '/facturacion' },
    { label: 'Medios de pago disponibles' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/facturacion" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Facturación
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Medios de pago disponibles</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Opciones de Pago ADT Chile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              ADT Chile ofrece múltiples opciones de pago para tu comodidad y facilidad en el mantenimiento de tu servicio de seguridad.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Pago en Línea</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Tarjetas de crédito (Visa, Mastercard, American Express)</li>
                  <li>Tarjetas de débito con logo Redcompra</li>
                  <li>Transferencia bancaria en línea</li>
                  <li>Pago a través de la aplicación móvil ADT Chile</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Pago Automático (PAC)</h2>
                <p className="mb-3">
                  El Pago Automático de Cuentas te permite debitar automáticamente tu mensualidad desde tu cuenta corriente o tarjeta de crédito.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Débito automático desde cuenta corriente</li>
                  <li>Cargo automático a tarjeta de crédito</li>
                  <li>Sin costo adicional por el servicio</li>
                  <li>Pago puntual garantizado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Pago Presencial</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>ServiPag (más de 5,000 puntos a nivel nacional)</li>
                  <li>Caja Vecina</li>
                  <li>Sucursales bancarias</li>
                  <li>Centros de atención ADT Chile</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Otros Medios</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Transferencia bancaria manual</li>
                  <li>Depósito bancario</li>
                  <li>Pago telefónico con tarjeta</li>
                </ul>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Importante:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Mantén tu servicio al día para evitar suspensiones</li>
                  <li>• Los pagos pueden demorar hasta 48 horas en reflejarse</li>
                  <li>• Guarda siempre el comprobante de pago</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediosPagoDisponibles;
