import styled from 'styled-components';

export interface ILinkProps {
  text: string;
}

const Container = styled.a``;

const Link = ({ text, ...rest }: ILinkProps) => {
  return <Container {...rest} href='#'>{text}</Container>;
};

export { Link };
