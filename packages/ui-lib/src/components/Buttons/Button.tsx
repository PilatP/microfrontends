import styled from 'styled-components';

export interface IButtonProps {
  text?: string;
  onClick?: () => void;
}

const Container = styled.button`
  font-family: 'Noto Sans', sans-serif;
  background: rgb(66, 171, 233);
  border: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 1px, rgb(0 0 0 / 12%) 0px 1px 2px;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  height: fit-content;
  outline: none;
  color: white;
`;

const Button = ({ text, onClick, ...rest }: IButtonProps) => {
  return (
    <Container onClick={onClick} {...rest}>
      {text}
    </Container>
  );
};

export { Button };
// export default Button;
