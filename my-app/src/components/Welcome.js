import React from "react";
import { Heading, Paragraph, Box } from "grommet";

class Welcome extends React.Component {
  render() {
    return (
      <Box direction="column" pad="medium">
        <Heading margin="none" level="3">
          Chapter 1
        </Heading>
        <Paragraph margin="none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Paragraph margin="none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Box>
    );
  }
}

export default Welcome;
