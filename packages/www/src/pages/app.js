import React, { useContext } from "react";
import { Router } from "@reach/router";
import { IdentityContext } from "../../identity-context";
import { Button, Container, Flex, Heading, NavLink } from "theme-ui";
import { Link } from "gatsby";

let Dash = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);

  console.log(user);
  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to={"/"} p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink
            to="#!"
            p={2}
            onClick={() => {
              netlifyIdentity.logout();
            }}
          >
            Logout {user.user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <div>Dash hasUser: {user && user.user.user_metadata.full_name}</div>
      </Flex>
    </Container>
  );
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
