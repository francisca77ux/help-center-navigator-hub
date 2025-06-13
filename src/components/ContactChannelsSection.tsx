
import React from 'react';
import { Card } from '@/components/ui/card';

const ContactChannelsSection = () => {
  return (
    <section className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Otros Canales de Atención</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Teléfono</h3>
          <p className="text-muted-foreground text-sm mb-2">Para emergencias las 24 horas</p>
          <p className="text-primary font-medium">600 123 4567</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">WhatsApp</h3>
          <p className="text-muted-foreground text-sm mb-2">Atención comercial</p>
          <p className="text-primary font-medium">+56 9 8765 4321</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground text-sm mb-2">Consultas generales</p>
          <p className="text-primary font-medium">info@adtchile.cl</p>
        </Card>
      </div>
    </section>
  );
};

export default ContactChannelsSection;
