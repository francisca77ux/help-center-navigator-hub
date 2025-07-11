

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ContactChannelsSection = () => {
  const handleZendeskChat = () => {
    if (window.zE) {
      window.zE('webWidget', 'open');
    }
  };

  return (
    <section className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">¿Necesitas más ayuda?</h2>
      <Card className="p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Chat en Vivo</h3>
            <p className="text-xs text-muted-foreground mb-2">Soporte inmediato</p>
            <Button 
              onClick={handleZendeskChat}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              Iniciar Chat
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg">📞</span>
            </div>
            <h3 className="font-semibold mb-1">Teléfono</h3>
            <p className="text-xs text-muted-foreground mb-2">Emergencias 24h</p>
            <a href="tel:6001234567" className="text-primary font-medium text-sm hover:underline">
              600 123 4567
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg">💬</span>
            </div>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-xs text-muted-foreground mb-2">Atención comercial</p>
            <span className="text-primary font-medium text-sm">+56 9 8765 4321</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg">✉️</span>
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-xs text-muted-foreground mb-2">Consultas generales</p>
            <span className="text-primary font-medium text-sm">info@adtchile.cl</span>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactChannelsSection;

