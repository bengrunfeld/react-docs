import styled from "styled-components";

export const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.navBgBlue};
`;

export const NavGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.josefin};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  padding: 0 4rem 0 15rem;
`;

export const NavItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;
