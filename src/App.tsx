
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiciosAdt from "./pages/ServiciosAdt";
import PanelAlarma from "./pages/PanelAlarma";
import AppAdt from "./pages/AppAdt";
import Facturacion from "./pages/Facturacion";
import Instalacion from "./pages/Instalacion";
import CamarasIp from "./pages/CamarasIp";
import Monitoreo from "./pages/Monitoreo";
import Soporte from "./pages/Soporte";

// Article pages
import ServiciosAdtDisponibles from "./pages/articles/ServiciosAdtDisponibles";
import ActivarSistemaAlarma from "./pages/articles/ActivarSistemaAlarma";
import DesactivarSistemaAlarma from "./pages/articles/DesactivarSistemaAlarma";
import ModosArmado from "./pages/articles/ModosArmado";
import CambioClaveMaestra from "./pages/articles/CambioClaveMaestra";
import ConfiguracionZonas from "./pages/articles/ConfiguracionZonas";
import CodigosUsuario from "./pages/articles/CodigosUsuario";
import DescargaAppAdt from "./pages/articles/DescargaAppAdt";
import MediosPagoDisponibles from "./pages/articles/MediosPagoDisponibles";
import TiposMonitoreo from "./pages/articles/TiposMonitoreo";
import Monitoreo247 from "./pages/articles/Monitoreo247";
import QueEsAdtSmartSecurity from "./pages/articles/QueEsAdtSmartSecurity";
import ServiciosAdicionales from "./pages/articles/ServiciosAdicionales";
import CentralMonitoreo from "./pages/articles/CentralMonitoreo";
import ProtocoloEmergencias from "./pages/articles/ProtocoloEmergencias";
import DispositivosInteligentesDisponibles from "./pages/articles/DispositivosInteligentesDisponibles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios-adt" element={<ServiciosAdt />} />
          <Route path="/panel-alarma" element={<PanelAlarma />} />
          <Route path="/app-adt" element={<AppAdt />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/instalacion" element={<Instalacion />} />
          <Route path="/camaras-ip" element={<CamarasIp />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
          <Route path="/soporte" element={<Soporte />} />
          
          {/* Article routes */}
          <Route path="/articulo/servicios-adt-disponibles" element={<ServiciosAdtDisponibles />} />
          <Route path="/articulo/activar-sistema-alarma" element={<ActivarSistemaAlarma />} />
          <Route path="/articulo/descarga-app-adt" element={<DescargaAppAdt />} />
          <Route path="/articulo/medios-pago-disponibles" element={<MediosPagoDisponibles />} />
          <Route path="/articulo/tipos-monitoreo" element={<TiposMonitoreo />} />
          <Route path="/articulo/monitoreo-24-7" element={<Monitoreo247 />} />
          <Route path="/articulo/que-es-adt-smart-security" element={<QueEsAdtSmartSecurity />} />
          <Route path="/articulo/servicios-adicionales" element={<ServiciosAdicionales />} />
          <Route path="/articulo/central-monitoreo" element={<CentralMonitoreo />} />
          <Route path="/articulo/protocolo-emergencias" element={<ProtocoloEmergencias />} />
          <Route path="/articulo/dispositivos-inteligentes-disponibles" element={<DispositivosInteligentesDisponibles />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
