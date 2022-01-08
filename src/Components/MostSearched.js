import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const MostSearched = () => {
  const [mostSearched, setMostSearched] = useState([]);

  const getMostSearched = async () => {
    const images = await axios.get("http://192.168.3.37:3000/mostsearched");
    const sorted = images.data.breeds.sort((a, b) => a.place - b.place);
    setMostSearched(sorted);
  };

  useEffect(() => {
    getMostSearched();
  }, []);
  return (
    <>
      <div id="most-searched-container">
        <Link to="/">
          <div className="catwiki-logo">
            <p className="catwiki-text">CatWiki</p>
          </div>
        </Link>
        <h1>Top 10 most searched breeds</h1>
        {mostSearched.map((breed, i) => {
          return (
            <Link to={"/info/" + breed.breeds[0].id}>
              <div className="most-searched-breed-container" key={breed.place}>
                <img className="cat-image" src={breed.url} />
                <div className="most-searched-breed-text">
                  <h3>
                    {breed.place}. {breed.breeds[0].name}
                  </h3>
                  <p>{breed.breeds[0].description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default MostSearched;
