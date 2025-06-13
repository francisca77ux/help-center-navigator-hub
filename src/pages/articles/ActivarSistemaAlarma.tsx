
import React from 'react';
import { ArrowLeft, Key } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ActivarSistemaAlarma = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/panel-alarma" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Panel de Alarma
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Key className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">¿Cómo activar mi sistema de alarma?</h1>
          </div>
        </div>

        <Card className="prose prose-lg max-w-none">
          <CardHeader>
            <CardTitle>Activación del Sistema de Alarma ADT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Aprende a activar correctamente tu sistema de alarma ADT para mantener tu hogar protegido.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">Activación Total</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Asegúrate de que todas las puertas y ventanas estén cerradas</li>
                  <li>Ingresa tu código de usuario de 4 dígitos en el panel</li>
                  <li>Presiona la tecla "AWAY" o "TOTAL"</li>
                  <li>Escucharás 3 pitidos confirmando la activación</li>
                  <li>Tienes 60 segundos para salir del lugar</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Activación Parcial (Stay)</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Ingresa tu código de usuario de 4 dígitos</li>
                  <li>Presiona la tecla "STAY" o "PARCIAL"</li>
                  <li>El sistema activará solo los sensores perimetrales</li>
                  <li>Puedes moverte libremente dentro del hogar</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">Activación desde la App</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Abre la aplicación ADT Chile</li>
                  <li>Inicia sesión con tus credenciales</li>
                  <li>Selecciona "Activar Sistema"</li>
                  <li>Elige entre activación total o parcial</li>
                  <li>Confirma la activación</li>
                </ol>
              </section>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Importante:</h3>
                <p>Si el sistema no se activa, verifica que no haya sensores abiertos o con falla. El panel mostrará qué zona presenta problemas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivarSistemaAlarma;
