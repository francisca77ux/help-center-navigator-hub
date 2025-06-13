
import React from 'react';
import { ArrowLeft, KeyRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const CambioClaveMaestra = () => {
  const breadcrumbItems = [
    { label: 'Panel de Alarma', href: '/panel-alarma' },
    { label: 'Cambio de clave maestra' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/panel-alarma" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Panel de Alarma
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <KeyRound className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Cambio de clave maestra</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Cómo Cambiar la Clave Maestra</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a cambiar la clave maestra de tu sistema ADT para mantener la seguridad.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Procedimiento desde el Panel</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa tu código maestro actual (4 dígitos)</li>
                  <li>Presiona la tecla [8] (Programación)</li>
                  <li>Ingresa [02] para acceder a códigos de usuario</li>
                  <li>Ingresa [01] para el código maestro</li>
                  <li>Digite el nuevo código de 4 dígitos</li>
                  <li>Presiona [#] para confirmar</li>
                  <li>Escucharás 2 pitidos de confirmación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Cambio desde la App ADT</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT Chile</li>
                  <li>Ve a "Configuración" → "Códigos de Usuario"</li>
                  <li>Selecciona "Código Maestro"</li>
                  <li>Ingresa tu código actual</li>
                  <li>Introduce el nuevo código de 4 dígitos</li>
                  <li>Confirma el nuevo código</li>
                  <li>Guarda los cambios</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Requisitos para la Nueva Clave</h2>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ul className="space-y-2 list-disc list-inside text-yellow-800">
                    <li>Debe tener exactamente 4 dígitos</li>
                    <li>No usar secuencias como 1234 o 4321</li>
                    <li>Evitar fechas de nacimiento obvias</li>
                    <li>No repetir el mismo dígito (ej: 1111)</li>
                    <li>Diferente a códigos anteriores</li>
                  </ul>
                </div>
              </section>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">¡Importante!</h3>
                <p className="text-red-700">Una vez cambiada la clave maestra, todos los usuarios deben ser notificados. La clave antigua quedará inmediatamente deshabilitada.</p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Recomendación:</h3>
                <p>Cambia tu clave maestra cada 6 meses o inmediatamente si sospechas que ha sido comprometida.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CambioClaveMaestra;
