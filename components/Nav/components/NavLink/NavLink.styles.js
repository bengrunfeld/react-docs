import styled from "styled-components";

export const NavLinkContainer = styled.div``;

export const NavLinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavLinkTitle = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.josefin};
  font-size: 2rem;
  cursor: pointer;
`;
