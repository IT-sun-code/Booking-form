import BookingForm from "../../ui/bookingForm";
import Button from "../../ui/button";
import styles from "./homePage.module.css";
import { useState } from "react";

const rules = [
  "Нажмите на кнопку Забронировать",
  "Выберете башню",
  "Выберете этаж",
  "Выберете переговорную",
  "Выберете дату и интервал времени",
  "Введите комментарий",
  "Наслаждайтесь!",
];
const instruction = rules.map((rule, index) => <li key={index}>{rule}</li>);
import plusIcon from "/icons/plus.svg";
import minusIcon from "/icons/minus.svg";

const HomePage = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h3 className={styles.logo}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://internship.vk.company/vacancy/632"
            >
              VK internship
            </a>
          </h3>

          <div className={styles.heading}>
            <h1>ДОБРО ПОЖАЛОВАТЬ!</h1>
            <h2>Хотите забронировать переговорную?</h2>
          </div>
          <div>
            <details>
              <summary onClick={toggleDetails}>
                <img
                  src={detailsOpen ? minusIcon : plusIcon}
                  alt={detailsOpen ? "minus" : "plus"}
                />
                Как пользоваться?
              </summary>
              <ol>{instruction}</ol>
            </details>
          </div>
          <Button appearance="ctv">Забронировать</Button>
          <BookingForm />
        </div>

        <div>
          <img
            className={styles.bubble}
            src="/images/bubble.png"
            alt="bubble"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
