import styled from 'styled-components';

export interface ITextProps {
  text: string;
}

const Container = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgb(36, 37, 39);
`;

const Text = ({ text, ...rest }: ITextProps) => {
  return <Container {...rest}>{text}</Container>;
};

export { Text };
