import { useState, useEffect } from "react";
import styles from "./modal.module.css";
import Portal from "../../../common/portal";
import PropTypes from "prop-types";
import { SuccessModalContent, OrderModalContent } from "./modalContent";
import Button from "../button";

const Modal = ({ variety, isOpen, onClose, bookingData }) => {
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
        onClose={onClose}
        onConfirm={() => {
          setContent(
            <SuccessModalContent bookingData={bookingData} onClose={onClose} />
          );
        }}
      />
    )
  );

  const modalClassName =
    content.type !== OrderModalContent ? isOpen && styles.modalOpen : "";

  return (
    <Portal>
      <div className={isOpen ? styles.overlayOpen : ""} onClick={onClose}>
        <div className={modalClassName} onClick={(e) => e.stopPropagation()}>
          {content.type !== OrderModalContent && (
            <Button appearance="cross" onClick={onClose}>
              {<div>&times;</div>}
            </Button>
          )}
          <div
            className={`${styles.containerContent}
            ${content.type !== OrderModalContent ? styles.content : ""}`}
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
  bookingData: PropTypes.object,
};

export default Modal;
