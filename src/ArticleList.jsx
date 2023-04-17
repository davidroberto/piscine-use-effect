import { useState } from "react";

const ArticleList = () => {
  console.log("rendu du composant ArticleList");

  // je créé un state pour les articles
  // par défaut, je lui mets un tableau vide
  const [articles, setArticles] = useState([]);

  // si le tableau d'articles est vide
  // donc si on a pas encore récupéré les articles
  if (articles.length === 0) {
    // on fait l'appel fetch pour récupérer les articles
    fetch("./articles.json")
      .then((dataJson) => {
        return dataJson.json();
      })
      .then((dataJs) => {
        // quand l'appel fetch est terminé et que
        // les données Json ont été transformées en Js
        // on les enregistre dans le state
        // ce qui provoque le rechargement du composant
        setArticles(dataJs);
      });
  }

  // on affiche la liste des articles
  return (
    <div>
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
