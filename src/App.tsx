import StickyNav from './components/StickyNav';
import WhatsAppFloat from './components/WhatsAppFloat';
import BaratecHero from './sections/BaratecHero';
import TrustStrip from './sections/TrustStrip';
import ApplicationsSection from './sections/ApplicationsSection';
import CasosRealesSection from './sections/CasosRealesSection';
import FeaturesGrid from './sections/FeaturesGrid';
import ProductSection from './sections/ProductSection';
import ProductLineSection from './sections/ProductLineSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main
      style={{
        backgroundColor: '#FAFAF7',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, "Segoe UI", Roboto, sans-serif',
        overflowX: 'clip',
      }}
    >
      <StickyNav />
      <BaratecHero />
      <TrustStrip />
      <ProductSection />
      <ProductLineSection />
      <FeaturesGrid />
      <CasosRealesSection />
      <ApplicationsSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
