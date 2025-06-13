
import React from 'react';
import { ArrowLeft, Link2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import ArticleTags from '@/components/ArticleTags';

const VinculacionSistema = () => {
  const breadcrumbItems = [
    { label: 'App ADT', href: '/app-adt' },
    { label: 'Vinculación con tu sistema' }
  ];

  const tags = ['App ADT', 'Configuración', 'Instalación', 'Código QR', 'Conectividad'];

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
            <Link2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Vinculación con tu sistema</h1>
          </div>
          
          <ArticleTags tags={tags} className="mb-6" />
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Conecta tu App con el Sistema de Alarma</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Vincula tu aplicación móvil con tu sistema de alarma ADT para controlar todo desde tu smartphone.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Métodos de Vinculación</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Código QR</h3>
                    <p className="text-sm text-muted-foreground">Escanea el código QR en tu panel de control</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Código Manual</h3>
                    <p className="text-sm text-muted-foreground">Ingresa el código de 8 dígitos manualmente</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Vinculación por Código QR</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>En la app, toca "Vincular Sistema" en el menú principal</li>
                  <li>Selecciona "Escanear Código QR"</li>
                  <li>Permite acceso a la cámara cuando se solicite</li>
                  <li>Enfoca el código QR que aparece en tu panel de alarma</li>
                  <li>Espera la confirmación de vinculación exitosa</li>
                  <li>Prueba la conexión activando/desactivando el sistema</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Vinculación Manual</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>En la app, ve a "Configuración" → "Vincular Sistema"</li>
                  <li>Selecciona "Ingresar Código Manualmente"</li>
                  <li>Encuentra el código de 8 dígitos en tu panel</li>
                  <li>Ingresa el código en la aplicación</li>
                  <li>Toca "Conectar" y espera la verificación</li>
                  <li>Confirma que la vinculación fue exitosa</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Verificación de la Conexión</h2>
                <p className="mb-3">Para confirmar que la vinculación fue exitosa:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>El estado del sistema debe aparecer en tiempo real</li>
                  <li>Las zonas del sistema deben mostrarse correctamente</li>
                  <li>Debes poder armar y desarmar desde la app</li>
                  <li>Las notificaciones de estado deben llegar inmediatamente</li>
                </ul>
              </section>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-800 mb-2">Solución de Problemas</h3>
                <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
                  <li>Verifica que tu sistema esté conectado a internet</li>
                  <li>Asegúrate de estar conectado a la misma red WiFi</li>
                  <li>Reinicia tanto la app como el panel si es necesario</li>
                  <li>Contacta soporte si el problema persiste</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VinculacionSistema;
