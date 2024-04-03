import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.displays.columnCenter};
  margin: 10rem auto;
  width: 25rem;
  gap: 1.87rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputTitle = styled.label`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regularSmall};
`;

export const Logo = styled.img`
  width: 210.5px;
  height: 38px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regular};
`;

export const TitleLink = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.regularSmallBold};
  text-decoration: underline;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.regularSmall};
`;
export const BoxIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const ContainerSocial = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.gray10};
`;

export const InputBox = styled.div<{ $isError: boolean; $isfocused: boolean }>`
  ${({ theme }) => theme.displays.spaceBetween};
  width: 400px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, $isfocused, $isError }) =>
      $isError ? theme.colors.red : $isfocused ? theme.colors.primary : theme.colors.gray20};
  background: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
