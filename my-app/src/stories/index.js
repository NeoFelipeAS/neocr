import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Welcome from "../components/Welcome";
import Button from "../components/Button";

storiesOf("Welcome", module).add("getting started", () => <Welcome />);
storiesOf("Button", module)
  .add("primary", () => <Button primary label="primary" />)
  .add("secondary", () => <Button primary={false} label="secondary" />)
  .add("plain", () => <Button plain label="plain" />)
  .add("Disabled", () => <Button disabled label="Disabled" />);
