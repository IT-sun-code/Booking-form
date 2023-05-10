import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Portal from "../../../common/portal";
import OrderModalContent from "./modalContent/orderModalContent";
import SuccessModalContent from "./modalContent/successModalContent";
import Button from "../button";

const Modal = ({ variety, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const [content, setContent] = useState(
    variety === "booking" && (
      <OrderModalContent
        onConfirm={() => {
          setContent(<SuccessModalContent onClose={onClose} />);
        }}
      />
    )
  );

  return (
    <Portal>
      <div className={isOpen ? styles.overlayOpen : ""} onClick={onClose}>
        <div
          className={isOpen && styles.modalOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <Button appearance="cross" onClick={onClose}>
            {<div>&times;</div>}
          </Button>

          <div
            className={`${styles.containerContent}
            ${content.type.name !== "OrderModalContent" ? styles.content : ""}`}
          >
            {content}
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  variety: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
