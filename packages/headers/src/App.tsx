export interface IAppProps {}

const App = ({ ...rest }: IAppProps) => {
  return <div {...rest}>headers</div>;
};

export default App;
