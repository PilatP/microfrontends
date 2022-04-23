import React from 'react';
import styled from 'styled-components';
import { Button, Link } from 'ui-lib/Components';
import { StateContent } from './components/StateContent';

export interface IAppProps {}

const HeadersApp = React.lazy(() => import('headers/App'));
const FootersApp = React.lazy(() => import('footers/App'));

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  height: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  margin: 24px;
  padding: 24px;
`;
const HeaderContainer = styled.div``;
const FooterContainer = styled.div``;

const App = ({ ...rest }: IAppProps) => {
  return (
    <Container {...rest}>
      <HeaderContainer>
        <React.Suspense fallback={<div>Loading header...</div>}>
          <HeadersApp />
        </React.Suspense>
      </HeaderContainer>
      <MainContainer>
        <StateContent />
      </MainContainer>
      <FooterContainer>
        <React.Suspense fallback={<div>Loading footer...</div>}>
          <FootersApp />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading footer...</div>}>
          <Button text='sdfsdfs' />
          <Link text='link' />
        </React.Suspense>
      </FooterContainer>
    </Container>
  );
};

export { App };
