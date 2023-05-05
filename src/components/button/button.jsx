import styles from "./button.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, appearance }) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.buttonCtv]: appearance === "ctv",
          [styles.buttonCtvBlueOrder]: appearance === "ctvBlueOrder",
          [styles.buttonCtvBlack]: appearance === "ctvBlack",
        },
        []
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  appearance: PropTypes.string,
};
export default Button;
