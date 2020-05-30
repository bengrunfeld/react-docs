import styled from "styled-components";

export const LinkContainer = styled.div`
  padding: 0.5rem 0;
`;

export const LinkItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.8rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;
