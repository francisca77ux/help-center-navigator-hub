
import React from 'react';
import { ArrowLeft, LogIn } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const PrimerAccesoApp = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Primer acceso a la app' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/app-adt" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a App ADT
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <LogIn className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Primer acceso a la app</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Configuración Inicial de la App ADT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Configura tu aplicación ADT Chile por primera vez siguiendo estos pasos esenciales.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Información Necesaria</h2>
                <p className="mb-3">Antes de comenzar, asegúrate de tener:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Número de cuenta ADT (aparece en tu factura)</li>
                  <li>Código de instalación proporcionado por el técnico</li>
                  <li>Número de teléfono registrado en tu cuenta</li>
                  <li>Email asociado a tu servicio ADT</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Proceso de Registro</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT Chile</li>
                  <li>Toca "Crear Cuenta" en la pantalla de bienvenida</li>
                  <li>Ingresa tu número de cuenta ADT</li>
                  <li>Introduce el código de instalación</li>
                  <li>Verifica tu número de teléfono con el SMS que recibirás</li>
                  <li>Crea una contraseña segura</li>
                  <li>Confirma tu dirección de email</li>
                  <li>Acepta los términos y condiciones</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configuración de Seguridad</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Activa la autenticación biométrica (huella/rostro)</li>
                  <li>Configura un PIN de 4 dígitos como respaldo</li>
                  <li>Establece preguntas de seguridad</li>
                  <li>Verifica tu identidad con datos personales</li>
                </ol>
              </section>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">✓ Configuración Exitosa</h3>
                  <p className="text-green-700 text-sm">Una vez completados todos los pasos, podrás acceder a todas las funciones de tu sistema de seguridad.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-800 mb-2">¿Problemas?</h3>
                  <p className="text-yellow-700 text-sm">Si no puedes completar el registro, contacta a soporte técnico con tu número de cuenta ADT.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrimerAccesoApp;
