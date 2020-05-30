import styled from "styled-components";

export const TitleText = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.josefin};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
