import styled from "styled-components";

export const MobileMenuContainer = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.darkGrey};
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    display: none;
  }
`;
