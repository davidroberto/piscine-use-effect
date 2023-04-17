import { useEffect, useState } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("./articles.json")
      .then((dataJson) => {
        return dataJson.json();
      })
      .then((dataJs) => {
        setArticles(dataJs);
      });
  }, []);

  return (
    <div>
      <h1>Liste des articles</h1>
      {articles.map((article) => {
        return (
          <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
