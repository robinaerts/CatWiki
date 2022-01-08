import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cat from "../cat.jpg";

const DiscoverBreeds = () => {
  const [dropdownBreeds, setDropdownBreeds] = useState([]);
  const [mostSearched, setMostSearched] = useState([]);

  const getMostSearched = async () => {
    const images = await axios.get(
      "https://robinaerts-catwiki.herokuapp.com/mostsearched"
    );
    const sorted = images.data.breeds.sort((a, b) => a.place - b.place);
    setMostSearched(sorted.slice(0, 4));
  };

  useEffect(() => {
    getMostSearched();
  }, []);

  const requestBreedNames = async (e) => {
    if (e.target.value.length < 2) return setDropdownBreeds([]);
    const breeds = await axios.get(
      "https://robinaerts-catwiki.herokuapp.com/breeds/" + e.target.value
    );
    setDropdownBreeds(breeds.data.breeds);
  };

  return (
    <div id="discover-container">
      <div id="discover-top-container">
        <div id="welcome">
          <h1 id="catwiki-home">CatWiki</h1>
          <p>Get to know more about your cat breed</p>
          <input
            autoComplete="off"
            id="search-breed-input"
            placeholder="Enter your breed"
            type="text"
            onChange={(e) => requestBreedNames(e)}
          />
          {dropdownBreeds.length > 0 && (
            <div id="search-list">
              {dropdownBreeds.map((breed) => {
                return (
                  <Link key={breed.id} to={"/info/" + breed.id}>
                    <div className="search-list-item">{breed.name}</div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <img id="cat-image-home" src={cat} />
      </div>
      <div id="discover-bottom-container">
        <div id="discover-bottom-text-container">
          <h1>66+ Breeds For you to discover</h1>
          <Link to="/mostsearched">SEE MORE</Link>
        </div>
        <div id="discover-bottom-images">
          {mostSearched.map((breed) => {
            return (
              <Link to={"/info/" + breed.breeds[0].id}>
                <div>
                  <img className="cat-image-home" src={breed.url} />
                  <h3>{breed.breeds[0].name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscoverBreeds;
