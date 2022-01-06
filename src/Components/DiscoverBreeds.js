import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DiscoverBreeds = () => {
  const [dropdownBreeds, setDropdownBreeds] = useState([]);

  const requestBreedNames = async (e) => {
    if (e.target.value.length < 2) return setDropdownBreeds([]);
    const breeds = await axios.get(
      "http://192.168.3.37:3000/breeds/" + e.target.value
    );
    setDropdownBreeds(breeds.data.breeds);
  };

  return (
    <div id="discover-container">
      <h1>CatWiki</h1>
      <p>Get to know more about your cat breed</p>
      <input type="text" onChange={(e) => requestBreedNames(e)} />
      <div>
        {dropdownBreeds.map((breed) => {
          return (
            <Link key={breed.id} to={"/info/" + breed.id}>
              {breed.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverBreeds;
