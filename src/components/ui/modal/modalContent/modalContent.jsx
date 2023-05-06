import BookingForm from "../../bookingForm";
import Button from "../../button";
import styles from "./modalContent.module.css";
import PropTypes from "prop-types";

export const SuccessModalContent = ({ onClose }) => {
  return (
    <>
      <h2>Ваш заказ успешно оформлен!</h2>

      <div className={styles.bookingDetails}>
        <div className={styles.header}>
          <h3>Детали брони</h3>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.cell}>Башня</div>
            <div className={styles.cell}>-</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Этаж</div>
            <div className={styles.cell}>-</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Переговорка</div>
            <div className={styles.cell}>-</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Дата</div>
            <div className={styles.cell}>-</div>
          </div>
          <div className={styles.row}>
            <div className={styles.cell}>Время</div>
            <div className={styles.cell}>-</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.row}>
            <div className={styles.cell}>Комментарий</div>
            <div className={styles.cell}>Принесем хорошее настроение!</div>
          </div>
        </div>
      </div>

      <Button appearance="ctv" onClick={onClose}>
        Спасибо
      </Button>

      <p className={styles.warning}>
        ВНИМАНИЕ! Для изменения данных свяжитесь с нами по телефону или почте
      </p>
    </>
  );
};

SuccessModalContent.propTypes = {
  bookingData: PropTypes.object,
  onClose: PropTypes.func,
};

export const OrderModalContent = ({ onConfirm, onClose }) => {
  return (
    <>
      <BookingForm onConfirm={onConfirm} onClose={onClose} />
    </>
  );
};

OrderModalContent.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};
