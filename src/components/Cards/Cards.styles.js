import styled from 'styled-components';

export const CardsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  width: 100%;
  margin: 2rem 0;

  @media screen and (width>767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width>1124px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
