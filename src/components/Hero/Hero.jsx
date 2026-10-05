const Hero = () => {
  return (
    <section className="py-24 text-center bg-linear-to-br from-[#00C2FF]/10 to-[#0099F4]/10">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-slate-700">
        Our{" "}
        <span className="bg-linear-to-r from-[#00C2FF] to-[#0099F4] bg-clip-text text-transparent">
          Blogs
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Explore our latest news, tutorials, and insights.
      </p>
    </section>
  );
};

export default Hero;
