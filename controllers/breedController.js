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
module.exports.getMostSearched = async (req, res) => {
  const mostSearched = [
    "ragd",
    "esho",
    "mcoo",
    "pers",
    "bsho",
    "drex",
    "abys",
    "asho",
    "sfol",
  ];

  let data = [];

  mostSearched.forEach(async (breed, i) => {
    const url = apiurl + "images/search?breed_ids=" + breed;
    const response = await axios.get(url, {
      headers: { "x-api-key": process.env.API_KEY },
    });
    data.push({ ...response.data[0], place: i + 1 });
    if (i === mostSearched.length - 1) {
      res.status(200).json({
        status: "success",
        breeds: data,
      });
    }
  });
};

module.exports.getImages = async (req, res) => {
  try {
    const breedname = req.params.name;
    const url = apiurl + "images/search?breed_ids=" + breedname + "&limit=8";
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
