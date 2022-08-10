import React, { Fragment, FunctionComponent } from 'react';
import { Hello as HelloEntity } from '~/domain/entities';
import { IHelloUseCase } from '~/domain/usecases';
import * as Styled from './styles';

type HelloInput = {
  helloUseCase: IHelloUseCase;
};

export const Hello: FunctionComponent<HelloInput> = ({ helloUseCase }) => {
  const [hello, SetHello] = React.useState<HelloEntity>();
  const [error, SetError] = React.useState<string>();

  async function handlerHello(): Promise<void> {
    const textOrErro = await helloUseCase.handle();
    if (textOrErro.isLeft()) {
      SetError(textOrErro.value.message);
      return;
    }
    SetHello(textOrErro.value);
    return;
  }

  React.useEffect(() => {
    handlerHello().then();
  });

  return (
    <Styled.Wrapper>
      {error && <h1>{error}</h1>}
      {hello && (
        <Fragment>
          <Styled.Title>{hello.desc}</Styled.Title>
          <Styled.Description>
            Created with 💜 By{' '}
            <a href={hello.repo} target="_blank" rel="noopener noreferrer">
              {hello.author}
            </a>
          </Styled.Description>
        </Fragment>
      )}
      <Styled.Illustration src="/assets/img/hero.svg" />
    </Styled.Wrapper>
  );
};
