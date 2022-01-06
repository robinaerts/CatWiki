const dotenv = require("dotenv").config();
const app = require("express")();
const breedController = require("./controllers/breedController");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/breeds/:name", breedController.getBreeds);
app.get("/images/:name", breedController.getImages);

app.listen(3000, () => {
  console.log("Listening on 3000");
});
