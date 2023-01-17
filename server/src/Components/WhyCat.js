import Home1 from "../images/home/home1.jpg";
import Home2 from "../images/home/home2.jpg";
import Home3 from "../images/home/home3.jpg";

const WhyCat = () => {
  return (
    <div id="why-cat-container">
      <div id="why-cat-text">
        <h2 id="why-cat-headline">
          <span id="top-line-why-cat">Wh</span>y should you have a cat?
        </h2>
        <p style={{ marginBottom: "3rem" }}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <a
          target="_blank"
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship.&text=Any%20cat%20owner%20will%20tell,them%20to%20relax%20and%20unwind."
          id="why-cat-read-more"
        >
          READ MORE
        </a>
      </div>
      <div id="why-cat-images">
        <div id="why-cat-images-first-2">
          <img src={Home1} id="home-1" />
          <img src={Home2} id="home-2" />
        </div>
        <img src={Home3} id="home-3" />
      </div>
    </div>
  );
};

export default WhyCat;
