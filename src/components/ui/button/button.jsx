import styles from "./button.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, appearance, type }) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        {
          [styles.buttonCtv]: appearance === "ctv",
          [styles.buttonReset]: appearance === "reset",
          [styles.buttonSubmit]: appearance === "submit",
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
  appearance: PropTypes.oneOf(["ctv", "reset", "submit"]),
  type: PropTypes.oneOf(["reset", "submit"]),
};

export default Button;
