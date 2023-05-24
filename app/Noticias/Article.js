import React from "react";
import ReadMoreButton from "./ReadMoreButton";

const Article = ({ article }) => {
  return (
    <article className="bg-slate-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.img}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>

          <footer>
            <p>{article.source}</p>
            <p>{article.published}</p>
          </footer>
        </div>

        {/* ReadMore */}
        <ReadMoreButton />
      </div>
    </article>
  );
};

export default Article;
