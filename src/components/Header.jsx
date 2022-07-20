import { BsPalette } from "react-icons/bs";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <span className="logo">
        <BsPalette />
        Color palette generator
      </span>
    </header>
  );
};

export default Header;
