import styled from "styled-components";

export const SubTitleText = styled.h2`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: underline;
`;
