import dollorsign from "../assets/dollorsign.svg";
import Button from "./Button.jsx";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="sectionNav">
        <div className="logoTitle">
          <img src={dollorsign} alt="" />
          <div className="title">
            <p>Expence</p>
            <h1>
              Monthly <span>budget</span>
            </h1>
          </div>
        </div>
        <div className="addButton">
          <Button TextContent={"Add Expence"} widthSize={"200px"} />
        </div>
      </div>

     
    </nav>
  );
};

export default NavBar;
