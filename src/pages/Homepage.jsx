import Hero from '../components/homepage/Hero';
import NewCollection from '../components/homepage/NewCollection';
import NewsLetter from '../components/homepage/NewsLetter';
import Offers from '../components/homepage/Offers';
import Popular from '../components/homepage/Popular';

function Homepage() {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </section>
  );
}

export default Homepage;
