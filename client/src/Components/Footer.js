import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer-container">
      <Link to="/">
        <div className="catwiki-logo-footer">
          <p className="catwiki-text-footer">CatWiki</p>
        </div>
      </Link>
      <p>
        © Created by <span style={{ fontWeight: "bold" }}>robinaerts</span>
      </p>
    </div>
  );
};

export default Footer;
