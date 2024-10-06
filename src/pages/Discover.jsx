import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cards from "../data/cards.js";
import Header from "../components/Header.jsx";

const Discover = () => (
  <div>
    <Header />
    <Navbar />
    <section className="p-5 flex flex-col gap-4">
      {
        cards.map(card => (
          <Card card={card} key={card.id} />
        ))
      }
    </section>

  </div>
)

export default Discover;