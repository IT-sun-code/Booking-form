import styles from "./homePage.module.css";
import { useState } from "react";
import useModal from "../../../common/hooks/useModal";
import Modal from "../../ui/modal";
import Button from "../../ui/button";
import { rules } from "../../../common/constants/rules";
import plusIcon from "/icons/plus.svg";
import minusIcon from "/icons/minus.svg";
import bubbleImage from "/images/bubble.png";

const instruction = rules.map((rule, index) => <li key={index}>{rule}</li>);

const HomePage = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h3 className={`${styles.logo} ${styles.heading3}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://internship.vk.company/vacancy/632"
            >
              VK internship
            </a>
          </h3>

          <div className={styles.heading}>
            <h1 className={styles.heading1}>ДОБРО ПОЖАЛОВАТЬ!</h1>
            <h2 className={styles.heading2}>
              Хотите забронировать переговорную?
            </h2>
          </div>
          <div>
            <details className={styles.rules}>
              <summary className={styles.heading3} onClick={toggleDetails}>
                <img
                  src={detailsOpen ? minusIcon : plusIcon}
                  alt={detailsOpen ? "minus" : "plus"}
                />
                Как пользоваться?
              </summary>
              <ol>{instruction}</ol>
            </details>
          </div>
          <Button appearance="ctv" onClick={() => handleModalOpen("booking")}>
            Забронировать
          </Button>
        </div>

        <div>
          <img className={styles.bubble} src={bubbleImage} alt="bubble" />
        </div>
      </div>

      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default HomePage;
