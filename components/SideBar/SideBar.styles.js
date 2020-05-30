import styled from "styled-components";

export const SideBarContainer = styled.nav`
  background: #e3e3e3;
  padding: 4rem;
  min-height: 100vh;
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    display: block;
  }
`;
