import NewsContents from "./components/newsContent/NewsContents";
import NavNews from "./components/NavNews";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsCategory, setNewsCategory] = useState("business");
  const [newsResults, setNewsResults] = useState();
  const [loadItems, setLoadItems] = useState(10);
  const newApi = async () => {
    try {
      const news = await axios.get('Need news api uRl here');
      console.log(news);

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newApi();
  }, [newsCategory, newsResults, loadItems]);

  return (
    <div className="App">
      <NavNews setNewsCategory={newsCategory} />
      <NewsContents
        newsArray={newsArray}
        loadItems={loadItems}
        setLoadItems={setLoadItems}
      />
    </div>
  );
}

export default App;
