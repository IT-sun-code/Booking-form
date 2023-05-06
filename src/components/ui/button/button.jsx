import styles from "./button.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, appearance, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        styles.button,
        {
          [styles.buttonCtv]: appearance === "ctv",
          [styles.buttonReset]: appearance === "reset",
          [styles.buttonSubmit]: appearance === "submit",
          [styles.closeButton]: appearance === "cross",
        },
        []
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(["ctv", "reset", "submit", "cross"]),
  type: PropTypes.oneOf(["reset", "submit"]),
  onClick: PropTypes.func,
};

export default Button;
