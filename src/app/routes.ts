import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Projects } from './pages/Projects';
import { Insights } from './pages/Insights';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { QualityPolicy } from './pages/QualityPolicy';
import { HSEPolicy } from './pages/HSEPolicy';
import { Products } from './pages/Products';
import { Partners } from './pages/Partners';
import { OilGasManagement } from './pages/OilGasManagement';
import { BusinessProcesses } from './pages/BusinessProcesses';
import { ResearchDevelopment } from './pages/ResearchDevelopment';
import { ResearchMarket } from './pages/ResearchMarket';
import { EngineeringServices } from './pages/EngineeringServices';
import { ProjectManagement } from './pages/ProjectManagement';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'engineering-services', Component: EngineeringServices },
      { path: 'business-processes', Component: BusinessProcesses },
      { path: 'research-development', Component: ResearchDevelopment },
      { path: 'research-market-intelligence', Component: ResearchMarket },
      { path: 'oil-gas-management', Component: OilGasManagement },
      { path: 'project-management', Component: ProjectManagement },
      { path: 'quality-policy', Component: QualityPolicy },
      { path: 'hse-policy', Component: HSEPolicy },
      { path: 'products', Component: Products },
      { path: 'industries', Component: Industries },
      { path: 'projects', Component: Projects },
      { path: 'insights', Component: Insights },
      { path: 'careers', Component: Careers },
      { path: 'partners', Component: Partners },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
