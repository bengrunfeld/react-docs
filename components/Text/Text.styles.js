import styled from "styled-components";

export const TextBlock = styled.p`
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
