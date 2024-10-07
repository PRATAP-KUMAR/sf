import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cards from "../data/cards.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Discover = () => (
  <div className="p-2">
    <div>
      <Header />
      <Navbar />
      <section className="max-w-3xl mx-auto pb-[75px] desktop:pb-5 grid desktop:grid-cols-3 gap-4">
        {
          cards.map(card => (
            <Card card={card} key={card.id} />
          ))
        }
      </section>
    </div>
    <Footer />
  </div>
)

export default Discover;