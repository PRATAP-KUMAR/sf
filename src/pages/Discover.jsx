import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cards from "../data/cards.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar.jsx";

const Discover = () => (
  <div className="flex">
    <Sidebar />
    <div className="max-w-3xl mx-auto flex flex-col p-2">
      <Header />
      <Navbar />
      <section className="pb-[75px] desktop:pb-5 grid desktop:grid-cols-3 gap-4">
        {
          cards.map(card => (
            <Card card={card} key={card.id} />
          ))
        }
      </section>
      <Footer />
    </div>
  </div>
)

export default Discover;