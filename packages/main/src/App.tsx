import React from 'react';
import styled from 'styled-components';

export interface IAppProps {}

const HeadersApp = React.lazy(() => import('headers/App'));

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const App = ({ ...rest }: IAppProps) => {
  return (
    <Container {...rest}>
      <React.Suspense fallback={<div>Loading header...</div>}>
        <HeadersApp />
      </React.Suspense>
    </Container>
  );
};

export { App };
