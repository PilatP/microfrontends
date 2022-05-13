import React from 'react';
import styled from 'styled-components';
import { Text, Variants } from 'ui-lib/Components';
import { useLocation, Outlet } from 'react-router-dom';

// import HeadersApp from 'headers/App';
export interface IAppProps {}

const HeadersApp = React.lazy(() => import('headers/App'));
const HeadersBApp = React.lazy(() => import('headers-b/App'));
const FootersApp = React.lazy(() => import('footers/App'));

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  margin: 0 auto;
`;
const AppContainer = styled.div`
  height: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  margin: 24px;
  padding: 24px;
`;
const MainContainer = styled(AppContainer)``;

const HeaderContainer = styled(AppContainer)``;
const FooterContainer = styled(AppContainer)``;

export const AppNameText = styled(Text)``;

const App = ({ ...rest }: IAppProps) => {
  const { pathname } = useLocation();
  console.log({ pathname });

  return (
    <Container {...rest}>
      <HeaderContainer>
        <AppNameText text='Headers app content:' />
        <Variants>
          <React.Suspense fallback={<div>Loading header...</div>}>
            <HeadersApp />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading header-b...</div>}>
            <HeadersBApp />
          </React.Suspense>
        </Variants>
      </HeaderContainer>
      <MainContainer>
        <Outlet />
        {/* <Route index element={<StateContent />} /> */}
      </MainContainer>
      <FooterContainer>
        <React.Suspense fallback={<div>Loading footer...</div>}>
          <AppNameText text='Footers app content:' />
          <FootersApp />
        </React.Suspense>
      </FooterContainer>
    </Container>
  );
};

export { App };
