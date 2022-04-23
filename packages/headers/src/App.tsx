import styled from 'styled-components';
import { StateContent } from './components/StateContent';

export interface IAppProps {}

const Container = styled.div`
  display: flex;
`;

const App = ({ ...rest }: IAppProps) => {
  return (
    <Container {...rest}>
      <StateContent />
    </Container>
  );
};

export default App;
