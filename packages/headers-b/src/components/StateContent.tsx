import styled from 'styled-components';

import { useRootSelector, useRootDispatch, logIn, logOut } from 'store/Store';
import { useCallback } from 'react';
import { Button, Text } from 'ui-lib/Components';

export interface IStateContentProps {}

const Container = styled.div`
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

const HeaderButton = styled(Button)`
  background: rgb(227, 242, 252);
  color: rgb(66, 171, 233);
`;

const StateContent = ({ ...rest }: IStateContentProps) => {
  const { isLogged } = useRootSelector((state: any) => state.appReducer);
  const dispatch = useRootDispatch();

  const handleOnLogIn = useCallback(() => {
    dispatch(logIn());
  }, []);
  const handleOnLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <Container {...rest}>
      <PropNameText text='isLogged:' />
      <PropValueText text={isLogged.toString()} />
      <Controls>
        <HeaderButton onClick={handleOnLogIn} text='LogIn'></HeaderButton>
        <HeaderButton onClick={handleOnLogOut} text='LogOut'></HeaderButton>
      </Controls>
    </Container>
  );
};

export { StateContent };
