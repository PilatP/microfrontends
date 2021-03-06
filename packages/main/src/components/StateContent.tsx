import styled from 'styled-components';

import { useRootSelector, useRootDispatch, logIn, logOut } from 'store/Store';
import { useCallback } from 'react';
import { Button, Text } from 'ui-lib/Components';
import { useLocation } from 'react-router-dom';
import { AppNameText } from '../App';

export interface IStateContentProps {}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
const StateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  column-gap: 8px;
`;

const PropNameText = styled(Text)``;
const PropValueText = styled(Text)`
  font-weight: 800;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StateContent = ({ ...rest }: IStateContentProps) => {
  const { isLogged } = useRootSelector((state: any) => state.appReducer);
  const dispatch = useRootDispatch();
  const { pathname } = useLocation();

  const handleOnLogIn = useCallback(() => {
    dispatch(logIn());
  }, []);
  const handleOnLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <Container {...rest}>
      <AppNameText text={`We are on ${pathname} page`} />
      <StateContainer>
        <PropNameText text='isLogged:' />
        <PropValueText text={isLogged.toString()} />
        <Controls>
          <Button onClick={handleOnLogIn} text='LogIn'></Button>
          <Button onClick={handleOnLogOut} text='LogOut'></Button>
        </Controls>
      </StateContainer>
    </Container>
  );
};

export { StateContent };
