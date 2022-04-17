export interface IAppProps {}

const App = ({ ...rest }: IAppProps) => {
  return <div {...rest}>footers</div>;
};

export { App };
