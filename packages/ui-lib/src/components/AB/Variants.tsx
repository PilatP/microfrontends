import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface IVariantsProps {}

const Container = styled.div``;

const Variants = ({
  children,
  ...rest
}: React.PropsWithChildren<IVariantsProps>) => {
  const [variant, setVariant] = useState<React.ReactNode>();
  useEffect(() => {
    const count = React.Children.count(children);
    const index = Math.floor(Math.random() * count);
    setVariant(React.Children.toArray(children)[index]);
    console.log({ index });
  }, []);

  return <Container {...rest}>{variant}</Container>;
};

export { Variants };
