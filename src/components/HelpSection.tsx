
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HelpSection = () => {
  return (
    <section className="mb-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-6">
              <div className="flex items-center gap-2 justify-center mb-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">¿Necesitas más ayuda?</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Si no encuentras la respuesta que buscas, nuestro equipo está disponible
              </p>
              <div className="max-w-md mx-auto">
                <Button size="sm" className="w-full group text-sm py-2 mb-2">
                  Contactar Soporte
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Lun-Vie: 8:00-20:00 | Sáb: 9:00-14:00
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
