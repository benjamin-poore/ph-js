import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Icon = ({
  link = "/",
  src = "/no-image.jpg",
  alt = "",
  description = "",
}) => {
  return (
    <div className="home-icon position-relative p-0">
      <Link to={link}>
        <Image src={src} alt={alt} className="w-100 h-100" />
        <p className="overlay-center contrast-text">{description}</p>
      </Link>
    </div>
  );
};

export default Icon;
