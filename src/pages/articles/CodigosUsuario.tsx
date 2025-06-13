
import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const CodigosUsuario = () => {
  const breadcrumbItems = [
    { label: 'Panel de Alarma', href: '/panel-alarma' },
    { label: 'Creación de códigos de usuario' }
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
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Creación de códigos de usuario</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Gestión de Códigos de Usuario</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a crear y administrar códigos de usuario para diferentes miembros de tu familia o empleados.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Creación de Nuevo Usuario</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa el código maestro + [8]</li>
                  <li>Presiona [02] para acceder a códigos de usuario</li>
                  <li>Ingresa el número de usuario (02-08 para usuarios normales)</li>
                  <li>Digite el nuevo código de 4 dígitos</li>
                  <li>Presiona [#] para confirmar</li>
                  <li>Escucharás 2 pitidos de confirmación</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Códigos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Código Maestro (01)</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Control total del sistema</li>
                      <li>• Puede crear otros códigos</li>
                      <li>• Acceso a programación</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Código Normal (02-08)</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Activar/desactivar sistema</li>
                      <li>• Sin acceso a programación</li>
                      <li>• Para usuarios regulares</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Código de Coacción (09)</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Desarma silenciosamente</li>
                      <li>• Envía alerta secreta</li>
                      <li>• Para situaciones de emergencia</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Código de Servicio (10)</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Solo para técnicos ADT</li>
                      <li>• Acceso limitado y temporal</li>
                      <li>• Para mantenimiento</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Eliminación de Códigos</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa código maestro + [8]</li>
                  <li>Presiona [02]</li>
                  <li>Selecciona el número de usuario a eliminar</li>
                  <li>Ingresa [0000] (cuatro ceros)</li>
                  <li>Presiona [#] para confirmar</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Buenas Prácticas</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="space-y-2 list-disc list-inside text-green-800">
                    <li>Mantén un registro de qué código corresponde a cada usuario</li>
                    <li>Cambia códigos inmediatamente si un usuario deja de necesitar acceso</li>
                    <li>No compartas códigos entre múltiples personas</li>
                    <li>Instruye a cada usuario sobre el uso correcto del sistema</li>
                  </ul>
                </div>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Límite de Usuarios:</h3>
                <p>La mayoría de paneles ADT admiten hasta 8 códigos de usuario más el código maestro. Contacta soporte si necesitas más códigos.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodigosUsuario;
