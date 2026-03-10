import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from '../ScrollToTop';
import { BackToTop } from '../BackToTop';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#080d08', color: '#ffffff' }}>
      <ScrollToTop />
      <BackToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
