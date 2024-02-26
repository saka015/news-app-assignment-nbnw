import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const NewsPage = () => {
  const [mynews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=62d20e578dbf4b3a86d0f944c1bf5117"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      let data = await response.json();
      setMyNews(data.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="  container mx-auto py-8 min-h-screen">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <div>
          {mynews.map((el, index) => {
            return (
              <div key={index} className="bg-slate-300 my-4 border rounded p-4">
                <h2 className="text-xl font-semibold mb-2">{el.title}</h2>
                <p className="mb-2">{el.content}</p>
                <p className="mb-2">{el.publishedAt}</p>
                <p className="mb-2">{el.source.name}</p>
                <img
                  src={el.urlToImage}
                  alt=""
                  className="rounded-md max-w-full h-auto"
                />
              </div>
            );
          })}
          <hr />
        </div>
      )}
      <div className="flex justify-center p-4">
        <Link to="https://github.com/saka015">
          <FaGithub className="hover:scale-110 text-center text-white" />
        </Link>
      </div>
    </div>
  );
};

export default NewsPage;
