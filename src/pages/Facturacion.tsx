
import React from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, CreditCard, FileText, Calculator, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Facturacion = () => {
  const sections = [
    {
      id: 1,
      title: "Medios de Pago",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      description: "Opciones disponibles para realizar tus pagos",
      articles: [
        {
          title: "Medios de pago disponibles",
          url: "/articulo/medios-pago-disponibles"
        },
        {
          title: "¿Cómo pagar mi factura?",
          url: "/articulo/como-pagar-factura"
        },
        {
          title: "Pago automático",
          url: "/articulo/pago-automatico"
        }
      ]
    },
    {
      id: 2,
      title: "Facturación",
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: "Gestión de documentos tributarios",
      articles: [
        {
          title: "Facturación electrónica",
          url: "/articulo/facturacion-electronica"
        },
        {
          title: "Cambio de datos de facturación",
          url: "/articulo/cambio-datos-facturacion"
        },
        {
          title: "Duplicado de facturas",
          url: "/articulo/duplicado-facturas"
        }
      ]
    },
    {
      id: 3,
      title: "Estados de Cuenta",
      icon: <Calculator className="h-6 w-6 text-primary" />,
      description: "Consulta y seguimiento de pagos",
      articles: [
        {
          title: "Consulta de estado de cuenta",
          url: "/articulo/consulta-estado-cuenta"
        },
        {
          title: "Historial de pagos",
          url: "/articulo/historial-pagos"
        },
        {
          title: "Saldo pendiente",
          url: "/articulo/saldo-pendiente"
        }
      ]
    },
    {
      id: 4,
      title: "Consultas y Problemas",
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      description: "Solución de inconvenientes de pago",
      articles: [
        {
          title: "Problemas con pagos",
          url: "/articulo/problemas-pagos"
        },
        {
          title: "Descuentos y promociones",
          url: "/articulo/descuentos-promociones"
        },
        {
          title: "Reclamos de facturación",
          url: "/articulo/reclamos-facturacion"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Centro de Ayuda
          </Link>
          <h1 className="text-4xl font-bold mb-4">Facturación y Pagos</h1>
          <p className="text-muted-foreground text-lg">
            Información sobre facturación, medios de pago y estados de cuenta
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.articles.map((article, index) => (
                  <Link key={index} to={article.url}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full group">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Información detallada sobre {article.title.toLowerCase()}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              ¿Consultas sobre facturación?
            </CardTitle>
            <CardDescription>
              Nuestro equipo comercial te ayudará con tus consultas de pago
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Atención Comercial</h4>
                <p className="text-sm text-muted-foreground">600 123 4567</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">+56 9 8765 4321</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Facturación</h4>
                <p className="text-sm text-muted-foreground">facturacion@adtchile.cl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Facturacion;
