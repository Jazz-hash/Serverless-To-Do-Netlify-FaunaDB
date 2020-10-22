import React from "react";
import { Button, Container, Flex, Heading } from "theme-ui";

const index = () => {
  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => alert("clicked")}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};

export default index;
