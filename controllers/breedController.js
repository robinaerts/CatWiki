const axios = require("axios");

const apiurl = "https://api.thecatapi.com/v1/";

module.exports.getBreeds = async (req, res) => {
  try {
    const breedname = req.params.name;
    const url = apiurl + "breeds/search?q=" + breedname;
    const breeds = await axios.get(url, {
      headers: { "x-api-key": process.env.API_KEY },
    });
    res.status(200).json({
      status: "success",
      breeds: breeds.data,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
module.exports.getImages = async (req, res) => {
  try {
    const breedname = req.params.name;
    const url = apiurl + "images/search?breed_ids=" + breedname;
    const images = await axios.get(url, {
      headers: { "x-api-key": process.env.API_KEY },
    });
    res.status(200).json({
      status: "success",
      images: images.data,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
