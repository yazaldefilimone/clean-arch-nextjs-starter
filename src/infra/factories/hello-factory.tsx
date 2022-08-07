import { FunctionComponent } from 'react';
import { HelloUseCase } from '~/data/usecases';
import { Hello } from '~/presentation/components';
import { HelloStorage } from '~/infra/services';

export const HelloFactory: FunctionComponent = () => {
  const helloStorage = new HelloStorage();
  const helloUseCase = new HelloUseCase(helloStorage);
  return <Hello helloUseCase={helloUseCase} />;
};
