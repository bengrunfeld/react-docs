import styled from "styled-components";

export const LinkContainer = styled.div`
  cursor: pointer;
`;

export const LinkItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.8rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    font-weight: bold;
  }
`;
