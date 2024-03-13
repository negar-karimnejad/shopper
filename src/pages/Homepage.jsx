import Hero from '../components/homepage/Hero';
import NewCollection from '../components/homepage/NewCollection';
import Offers from '../components/homepage/Offers';
import Popular from '../components/homepage/Popular';

function Homepage() {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </section>
  );
}

export default Homepage;
