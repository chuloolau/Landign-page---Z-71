import BaratecHero from './sections/BaratecHero';
import ProductSection from './sections/ProductSection';
import ProductLineSection from './sections/ProductLineSection';
import CasosRealesSection from './sections/CasosRealesSection';
import ApplicationsSection from './sections/ApplicationsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main
      style={{
        backgroundColor: '#050505',
        fontFamily: "'Kanit', sans-serif",
        overflowX: 'clip',
      }}
    >
      <BaratecHero />
      <ProductSection />
      <ProductLineSection />
      <CasosRealesSection />
      <ApplicationsSection />
      <ContactSection />
    </main>
  );
}
