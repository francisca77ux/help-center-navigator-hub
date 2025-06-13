
import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const GestionUsuariosApp = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Gestión de usuarios' }
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
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Gestión de usuarios</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Administra Usuarios de tu Sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a gestionar usuarios, permisos y accesos en tu aplicación ADT Chile.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tipos de Usuario</h2>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-2">Administrador Principal</h4>
                    <p className="text-sm">Control total del sistema, puede gestionar todos los usuarios y configuraciones</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Usuario Estándar</h4>
                    <p className="text-sm">Puede armar/desarmar el sistema y recibir notificaciones</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Usuario Invitado</h4>
                    <p className="text-sm">Acceso limitado solo para consultar el estado del sistema</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Agregar Nuevo Usuario</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ve a "Configuración" → "Gestión de Usuarios"</li>
                  <li>Toca "Agregar Usuario" (+)</li>
                  <li>Ingresa los datos del nuevo usuario:</li>
                  <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                    <li>Nombre completo</li>
                    <li>Número de teléfono</li>
                    <li>Dirección de email</li>
                    <li>Código PIN personal (4 dígitos)</li>
                  </ul>
                  <li>Selecciona el tipo de usuario y permisos</li>
                  <li>Envía la invitación por email o SMS</li>
                  <li>El usuario recibirá instrucciones para activar su acceso</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Configurar Permisos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Permisos de Control</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Armar/desarmar sistema</li>
                      <li>Control de zonas específicas</li>
                      <li>Gestión de dispositivos</li>
                      <li>Configuración básica</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Permisos de Información</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Ver historial de eventos</li>
                      <li>Recibir notificaciones</li>
                      <li>Acceder a reportes</li>
                      <li>Ver estado en tiempo real</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Gestión de Usuarios Existentes</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Editar información:</strong> Cambiar datos personales y contacto</li>
                  <li><strong>Modificar permisos:</strong> Ajustar nivel de acceso</li>
                  <li><strong>Cambiar PIN:</strong> Actualizar código de acceso</li>
                  <li><strong>Suspender usuario:</strong> Desactivar temporalmente</li>
                  <li><strong>Eliminar usuario:</strong> Remover acceso permanentemente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Horarios de Acceso</h2>
                <p className="mb-3">Configura horarios específicos para cada usuario:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Días de la semana permitidos</li>
                  <li>Horas de acceso (ejemplo: 7:00 AM - 10:00 PM)</li>
                  <li>Restricciones por ubicación</li>
                  <li>Alertas por acceso fuera de horario</li>
                </ul>
              </section>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-800 mb-2">Importante:</h3>
                <p className="text-yellow-700">Solo el administrador principal puede agregar, modificar o eliminar usuarios. Asegúrate de revisar regularmente los permisos de acceso por seguridad.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GestionUsuariosApp;
