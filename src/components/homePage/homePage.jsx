import Button from "../button/button";
import styles from "./homePage.module.css";

const HomePage = () => {
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
              <summary>Как пользоваться?</summary>
              <ol>
                <li>Нажмите на кнопку Забронировать</li>
                <li>Выберете башню</li>
                <li>Выберете этаж</li>
                <li>Выберете переговорную</li>
                <li>Выберете дату и интервал времени</li>
                <li>Введите комментарий</li>
                <li>Наслаждайтесь!</li>
              </ol>
            </details>
          </div>
          <Button appearance="ctv">Забронировать</Button>
        </div>

        <div>
          <img
            className={styles.bubble}
            src="../../../public/images/bubble.png"
            alt="bubble"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
