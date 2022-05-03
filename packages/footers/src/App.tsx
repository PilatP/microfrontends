import { useRootSelector } from 'store/Store';

export interface IAppProps {}

const App = ({ ...rest }: IAppProps) => {
  const { isLogged } = useRootSelector((state: any) => state.appReducer);

  return <div {...rest}>{isLogged ? 'auth footer' : 'not auth footer'}</div>;
};

export default App;
