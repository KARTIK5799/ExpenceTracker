import React from "react";
import dollorsign from "../assets/dollorsign.svg";
import Button from "./Button.jsx";
import "./NavBar.css";
import Modal from "./Modal.jsx";
import Form from "./Form.jsx";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
          <Button TextContent={"Add Expence"} widthSize={"200px"} onClick={handleOpen} />
        </div>
      </div>

      <Modal isOpen={open} onClose={handleClose}>
            <>
            <Form addExpenseModal={true} handleCloseModal={handleClose}/>
            </>
          </Modal>
    </nav>
  );
};

export default NavBar;
