
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

// Article pages
import ServiciosAdtDisponibles from "./pages/articles/ServiciosAdtDisponibles";
import ActivarSistemaAlarma from "./pages/articles/ActivarSistemaAlarma";
import DescargaAppAdt from "./pages/articles/DescargaAppAdt";
import MediosPagoDisponibles from "./pages/articles/MediosPagoDisponibles";

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
          
          {/* Article routes */}
          <Route path="/articulo/servicios-adt-disponibles" element={<ServiciosAdtDisponibles />} />
          <Route path="/articulo/activar-sistema-alarma" element={<ActivarSistemaAlarma />} />
          <Route path="/articulo/descarga-app-adt" element={<DescargaAppAdt />} />
          <Route path="/articulo/medios-pago-disponibles" element={<MediosPagoDisponibles />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
