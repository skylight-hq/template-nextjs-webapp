"use client";

import { ComponentProps } from "react";
import { Icon } from "@trussworks/react-uswds";

type AppIconProp = ComponentProps<"svg"> & { size: number };

export const GithubIcon: React.FC<AppIconProp> = (props) => (
  <Icon.Github {...props} role="" />
);
