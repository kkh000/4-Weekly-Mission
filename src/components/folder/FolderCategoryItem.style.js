import styled from "styled-components"

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background: ${({ $isSelected }) => $isSelected && `var(--primary)`};
  color: ${({ $isSelected }) => $isSelected && `white`};
`
