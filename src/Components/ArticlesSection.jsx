import React from "react";

const articles = [
  {
    title: "8 Creative Ways to Repurpose Your Webinar Content",
    image: "src/assets/RepurposeContent.png",
  },
  {
    title:
      "Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
    image: "src/assets/leadgen-email.png",
  },
  {
    title:
      "How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps",
    image: "src/assets/qualified.png",
  },
];

const ArticlesSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12">
          Recent Articles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer overflow-hidden"
            >

              <div className="w-full h-64 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-black font-semibold text-lg md:text-xl mb-4">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="mt-auto text-indigo-400 font-medium hover:text-indigo-600 transition-colors duration-300"
                >
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
          >
            Read the blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
