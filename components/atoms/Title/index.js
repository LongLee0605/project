import { classNames } from "common/functions";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

/**
 *
 * @param {{
 * as: "div"|"h1"| "h2"|"h3"|"h4"|"h5"|"h6";
 * othersClass;
 * className;
 * }} props Props for the component
 *
 */
const Title = ({ title, text, as, id, children, ...props }) => {
  const As = as || "h2";
  const textSize = (as) => {
    let text_size = "";
    switch (as) {
      case "h1": {
        text_size = `${styles.h1}`;
        break;
      }
      case "h2": {
        text_size = `${styles.h2}`;
        break;
      }
      case "h3": {
        text_size = `${styles.h3}`;
        break;
      }
      case "h4": {
        text_size = `${styles.h4}`;
        break;
      }
      case "h5": {
        text_size = `${styles.h5}`;
        break;
      }
      case "h6": {
        text_size = `${styles.h6}`;
        break;
      }

      default:
        break;
    }
    return text_size;
  };
  return (
    <As
      id={id ? id : null}
      className={
        props.className ||
        classNames(
          styles.title,
          title?.default_word_color || "text-black",
          textSize(as),
          props.othersClass
        )
      }
    >
      {children}
    </As>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  as: PropTypes.string,
  id: PropTypes.string,
};

Title.defaultProps = {
  text: null,
  as: "h2",
};
export default Title;
