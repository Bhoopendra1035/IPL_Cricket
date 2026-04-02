import Hero from '../components/Hero';
import MatchSlider from '../components/MatchSlider';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Sponsors from '../components/Sponsors';

export default function Home() {
  return (
    <main>
      <Hero />
      <MatchSlider />
      <Highlights />
      <Pricing />
      <Sponsors />
    </main>
  );
}
