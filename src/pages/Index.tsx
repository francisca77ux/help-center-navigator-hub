import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import PromotedArticlesSection from '@/components/PromotedArticlesSection';
import RecentActivitySection from '@/components/RecentActivitySection';
import HelpSection from '@/components/HelpSection';
import ContactChannelsSection from '@/components/ContactChannelsSection';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Contenido actualizado con enlaces a páginas específicas
  const categories = [
    {
      id: 1,
      name: 'Servicios ADT',
      description: 'Información sobre nuestros servicios de monitoreo, instalación y mantenimiento',
      url: '/servicios-adt',
      articleCount: 25
    },
    {
      id: 2,
      name: 'Panel de Alarma',
      description: 'Guías sobre cómo usar tu panel de alarma ADT correctamente',
      url: '/panel-alarma',
      articleCount: 18
    },
    {
      id: 3,
      name: 'Aplicación ADT Chile',
      description: 'Todo sobre nuestra aplicación móvil para Android e iOS',
      url: '/app-adt',
      articleCount: 22
    },
    {
      id: 4,
      name: 'Facturación y Pagos',
      description: 'Consultas sobre facturación, medios de pago y estados de cuenta',
      url: '/facturacion',
      articleCount: 15
    },
    {
      id: 5,
      name: 'Instalación y Configuración',
      description: 'Proceso de instalación y configuración inicial de tu sistema',
      url: '/instalacion',
      articleCount: 12
    },
    {
      id: 6,
      name: 'Cámaras IP y Videovigilancia',
      description: 'Configuración y uso de cámaras de seguridad IP',
      url: '/camaras-ip',
      articleCount: 20
    },
    {
      id: 7,
      name: 'Central de Monitoreo',
      description: 'Información sobre nuestro servicio de monitoreo 24/7',
      url: '/monitoreo',
      articleCount: 8
    },
    {
      id: 8,
      name: 'Soporte Técnico',
      description: 'Solución de problemas técnicos y mantenimiento preventivo',
      url: '/soporte',
      articleCount: 16
    }
  ];

  const promotedArticles = [
    {
      id: 1,
      title: '¿Cómo activar y desactivar mi sistema de alarma ADT?',
      url: '/article/activar-desactivar-sistema',
      internal: false
    },
    {
      id: 2,
      title: 'Descarga y configuración de la App ADT Chile',
      url: '/article/app-adt-configuracion',
      internal: false
    },
    {
      id: 3,
      title: '¿Qué hacer cuando se activa mi alarma?',
      url: '/article/alarma-activada',
      internal: false
    },
    {
      id: 4,
      title: 'Medios de pago disponibles para tu servicio ADT',
      url: '/article/medios-pago',
      internal: false
    },
    {
      id: 5,
      title: 'Cambio de clave de usuario en el panel',
      url: '/article/cambio-clave-panel',
      internal: true
    },
    {
      id: 6,
      title: 'Visualización remota de cámaras desde tu celular',
      url: '/article/camaras-remotas',
      internal: false
    },
    {
      id: 7,
      title: 'Procedimiento en caso de falsa alarma',
      url: '/article/falsa-alarma',
      internal: false
    },
    {
      id: 8,
      title: 'Configuración de zonas en tu sistema de alarma',
      url: '/article/configuracion-zonas',
      internal: true
    }
  ];

  const popularTopics = [
    {
      id: 1,
      category: 'Panel',
      title: '¿Cómo activar y desactivar mi sistema de alarma?',
      searches: '2.4k',
      url: '/article/activar-desactivar-sistema'
    },
    {
      id: 2,
      category: 'App',
      title: 'Problemas para descargar la aplicación ADT',
      searches: '1.8k',
      url: '/article/app-adt-configuracion'
    },
    {
      id: 3,
      category: 'Emergencia',
      title: '¿Qué hacer cuando se activa mi alarma?',
      searches: '1.5k',
      url: '/article/alarma-activada'
    },
    {
      id: 4,
      category: 'Configuración',
      title: 'Cambio de códigos de usuario en el panel',
      searches: '1.2k',
      url: '/article/cambio-clave-panel'
    },
    {
      id: 5,
      category: 'Cámaras',
      title: 'No puedo ver mis cámaras desde el celular',
      searches: '980',
      url: '/article/camaras-remotas'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <HeroSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSearch={handleSearch} 
      />

      <div className="container mx-auto px-4 py-12">
        <CategoriesSection categories={categories} />
        <PromotedArticlesSection promotedArticles={promotedArticles} />
        <RecentActivitySection popularTopics={popularTopics} />
        <HelpSection />
        <ContactChannelsSection />
      </div>
    </div>
  );
};

export default Index;
