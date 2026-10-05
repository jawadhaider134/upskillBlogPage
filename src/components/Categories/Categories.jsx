import { categories } from "./CategoriesData";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-4 justify-center">
      {categories.map((category) => {
        return (
          <button
            className="category-btn px-4 py-2 rounded-full border border-gray-300 **text-white** hover:bg-[#0099F4] hover:text-white transition-colors active-category hover:cursor-pointer"
            key={category.id}
          >
            {category.text}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
