import styled from 'styled-components';
import { StateContent } from './components/StateContent';
import { NavLink } from 'ui-lib/Components';

export interface IAppProps {}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Navigation = styled.nav`
  display: flex;
  margin-bottom: 8px;
  & > :not(:last-child) {
    margin-right: 8px;
  }
`;

const App = ({ ...rest }: IAppProps) => {
  return (
    <Container {...rest}>
      <Navigation>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/state'>State</NavLink>
        <NavLink to='/about'>About</NavLink>
      </Navigation>
      Variant A
      <StateContent />
    </Container>
  );
};

export default App;
