import { cards } from "./CardsData";
const Cards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.map((card) => {
        return (
          <div className="blog-card bg-white rounded-2xl shadow-lg overflow-hidden hover:cursor-pointer hover:-translate-y-2 transition hover:shadow-2xl">
            <img src={card.image} alt="" />
            <div className="p-6">
              <span className="category-badge mb-2">{card.badge}</span>
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>{card.date}</span>
                <span className="px-3 py-1 bg-[#0099F4] text-white rounded-lg text-sm hover:bg-[#007acc] transition-colors flex items-center gap-1">
                  Read more
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
