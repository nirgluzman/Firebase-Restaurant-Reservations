import React from "react";
import styled from "styled-components";
import { Button } from "../ui";
import { logOut } from "./logOut";

export const StyledButton = styled(Button)`
  background-color: #ed0d25;
`;

/*
    This button allows users to sign out once they've
    been signed in with Firebase Auth
*/
export const SignOutButton = () => {
  const onClickSignOut = async () => {
    // Firebase code goes here
    try {
      await logOut();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <StyledButton onClick={onClickSignOut} style={{ float: "right" }}>
      Sign Out
    </StyledButton>
  );
};
