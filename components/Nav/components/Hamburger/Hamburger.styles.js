import styled from "styled-components";

export const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 4rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.white};
  margin: 0.3rem 0;
`;
