import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BreedInfo = () => {
  const [breed, setBreed] = useState({});
  const [images, setImages] = useState([{ url: "" }]);
  const { id } = useParams();

  const getBreed = async () => {
    const breed = await axios.get("http://192.168.3.37:3000/breeds/" + id);
    console.log(breed.data.breeds[0]);
    setBreed(breed.data.breeds[0]);
  };

  const getBreedImages = async () => {
    const images = await axios.get("http://192.168.3.37:3000/images/" + id);
    setImages(images.data.images);
  };

  useEffect(() => {
    getBreed();
    getBreedImages();
  }, []);

  return (
    <div>
      <img src={images[0].url} />
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
      <p>Temperament: {breed.temperament}</p>
      <p>Origin: {breed.origin}</p>
      <p>Life Span: {breed.life_span}</p>
    </div>
  );
};

export default BreedInfo;
