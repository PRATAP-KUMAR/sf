import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cards from "../data/cards.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Discover = () => (
  <div>
    <Header />
    <Navbar />
    <section className="p-5 pb-[75px] flex flex-col gap-4">
      {
        cards.map(card => (
          <Card card={card} key={card.id} />
        ))
      }
    </section>
    <Footer />
  </div>
)

export default Discover;