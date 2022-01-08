const dotenv = require("dotenv").config();
const app = require("express")();
const breedController = require("./controllers/breedController");
const cors = require("cors");

app.use(
  cors({
    origin: "https://robinaerts-catwiki.netlify.app",
  })
);

app.get("/breeds/:name", breedController.getBreeds);
app.get("/images/:name", breedController.getImages);
app.get("/mostSearched", breedController.getMostSearched);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on 3000");
});
