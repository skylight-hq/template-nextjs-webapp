import styles from "./footer.module.scss";
import classNames from "classnames";

const Footer: React.FC = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div
        className={classNames(
          "page-container--xl",
          "padding-y-3",
          "text-white",
          "grid-row",
          "flex-row",
          "flex-align-center",
          "flex-justify",
        )}
      >
        For for information contact support@placeholder.email
      </div>
    </footer>
  );
};

export default Footer;
