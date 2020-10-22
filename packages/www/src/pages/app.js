import React, { useContext } from "react";
import { Router } from "@reach/router";
import { IdentityContext } from "../../identity-context";
import { Button, Container, Flex, Heading, NavLink } from "theme-ui";
import { Link } from "gatsby";

let Dash = () => {
  const user = useContext(IdentityContext);
  return <div>Dash hasUser: {user && user.user_metadata.full_name}</div>;
};

let DashLoggedOut = () => {
  const { identity: netlifyIdentity } = useContext(IdentityContext);

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
          Log In
        </Button>
      </Flex>
    </Container>
  );
};

export default (props) => {
  const { user } = useContext(IdentityContext);
  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app" />
      </Router>
    );
  }
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  );
};
