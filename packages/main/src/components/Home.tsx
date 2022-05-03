import { AppNameText } from '../App';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export interface IHomeProps {}

const Container = styled.div``;

const Home = ({ ...rest }: IHomeProps) => {
  const { pathname } = useLocation();

  return (
    <Container {...rest}>
      <AppNameText text={`We are on ${pathname} page`} />
    </Container>
  );
};

export { Home };
