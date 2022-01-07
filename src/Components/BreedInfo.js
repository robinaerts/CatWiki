import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Score from "./Score";
import MoreImages from "./MoreImages";

const BreedInfo = () => {
  const [breed, setBreed] = useState({});
  const [images, setImages] = useState([{ url: "" }]);
  const { id } = useParams();

  const getBreed = async () => {
    const breed = await axios.get("http://192.168.3.37:3000/breed/" + id);
    setBreed(breed.data.breeds[0]);
  };

  const getBreedImages = async () => {
    const images = await axios.get("http://192.168.3.37:3000/images/" + id);
    console.log(images.data.images);
    setBreed(images.data.images[0].breeds[0]);
    setImages(images.data.images);
  };

  useEffect(() => {
    // getBreed();
    getBreedImages();
  }, []);

  return (
    <>
      <Link to="/">
        <div className="catwiki-logo">
          <p className="catwiki-text">CatWiki</p>
        </div>
      </Link>
      <div id="full-info-container">
        <div id="more-info-container">
          <img id="breed-head-image" src={images[0].url} />
          <div id="breed-properties">
            <h2 style={{ marginBottom: "1rem" }}>{breed.name}</h2>
            <p>{breed.description}</p>
            <p style={{ margin: "1.5rem 0" }}>
              <strong>Temperament:</strong> {breed.temperament}
            </p>
            <p style={{ margin: "1.5rem 0" }}>
              <strong>Origin:</strong> {breed.origin}
            </p>
            <p style={{ margin: "1.5rem 0" }}>
              <strong>Life Span:</strong> {breed.life_span} years
            </p>
            <div className="score-property-container">
              <p className="property-text">Adaptability:</p>
              <Score score={breed.adaptability} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Affection Level:</p>
              <Score score={breed.affection_level} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Child Friendly:</p>
              <Score score={breed.child_friendly} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Grooming:</p>
              <Score score={breed.grooming} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Intelligence:</p>
              <Score score={breed.intelligence} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Health Issues:</p>
              <Score score={breed.health_issues} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Social Needs:</p>
              <Score score={breed.social_needs} />
            </div>
            <div className="score-property-container">
              <p className="property-text">Stranger Friendly:</p>
              <Score score={breed.stranger_friendly} />
            </div>
          </div>
        </div>
        <MoreImages images={images} />
      </div>
    </>
  );
};

export default BreedInfo;
