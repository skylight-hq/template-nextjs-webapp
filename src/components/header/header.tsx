import HeaderStyle from "./header.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { PAGES } from "@/utils/constants";
import Navigation from "../menu/menu";

const Header: React.FC = () => {
  return (
    <header className={HeaderStyle.wrapper}>
      <div className="page-container--xl grid-row flex-row flex-justify padding-y-4">
        <Link
          href={PAGES.LANDING}
          className={classNames(
            "text-no-underline",
            "font-serif-xl",
            "text-white",
            "grid-row",
            "flex-row",
            "flex-align-center",
          )}
        >
          NextJS Web Application Template
        </Link>
         <Navigation />
      </div>
    </header>
  );
};

export default Header;
