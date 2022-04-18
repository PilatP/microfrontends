import styled from 'styled-components';

export interface IButtonProps {
  text?: string;
}

const Container = styled.button``;

const Button = ({ text, ...rest }: IButtonProps) => {
  return (
    <Container {...rest}>
      {text}1
    </Container>
  );
};

export { Button };
// export default Button;
