"use client";

import classNames from "classnames";
import { Button } from "@trussworks/react-uswds";

const Home: React.FC = () => {
  return (
    <div
      className={classNames("page-container", "page-container--full-height")}
    >
      <h1>Welcome!</h1>
      <p className={classNames("margin-bottom-4")}>
        This is a shell NextJS application already integrated with dependencies
        commonly used in federal goverment apps, like USWDS, eslint, prettier,
        jest, playwright.
      </p>
      <Button
        onClick={() => {
          alert("Hello there!");
        }}
      >
        Click me!
      </Button>
    </div>
  );
};

export default Home;
