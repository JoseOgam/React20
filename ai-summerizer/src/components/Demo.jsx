import React, { useEffect, useState } from "react";
import { copy, loader, tick, linkIcon } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(article);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log(newArticle);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="icon"
            className="absolute left-0 my-2 ml-3 w-5 "
          />
          <input
            type="url"
            placeholder="enter a url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button className="submit_btn  peer-focus:border-gray-700 peer-focus:text-gray-700">
            <p>↵</p>
          </button>
        </form>
        {/* display history */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={index}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <h2>Debbug</h2>
              {console.log(item.url)}
            </div>
          ))}
        </div>
      </div>
      {/* display results */}
    </section>
  );
};

export default Demo;
