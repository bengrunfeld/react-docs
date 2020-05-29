import styled from "styled-components";

export const TextBlock = styled.p`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.josefin};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
