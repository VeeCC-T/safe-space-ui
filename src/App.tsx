import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import MicroAcademy from './pages/MicroAcademy';
import ReportIncident from './pages/ReportIncident';
import Resources from './pages/Resources';
import AiAssistant from './pages/AiAssistant';
import Donate from './pages/Donate';

function App() {
  return (
    <main className="font-sans">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MicroAcademy />} />
            <Route path="report" element={<ReportIncident />} />
            <Route path="resources" element={<Resources />} />
            <Route path="assistant" element={<AiAssistant />} />
            <Route path="donate" element={<Donate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
