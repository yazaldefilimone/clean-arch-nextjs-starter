import Head from 'next/head';
import React, { Fragment, FunctionComponent } from 'react';
import { Hello as HelloEntity } from '~/domain/entities';
import { IHelloUseCase } from '~/domain/usecases';
import styles from './styles.module.css';

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
    <div className={styles.container}>
      <Head>
        <title>Nextjs App - Clean Architecture Tdd Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          {error && <h1>{error}</h1>}
          {hello && (
            <Fragment>
              <h1>{hello.desc}</h1>
              <p>
                Created with 💜 By{' '}
                <a href={hello.repo} target="_blank" rel="noopener noreferrer">
                  {hello.author}
                </a>
              </p>
            </Fragment>
          )}
        </div>
        ;
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
