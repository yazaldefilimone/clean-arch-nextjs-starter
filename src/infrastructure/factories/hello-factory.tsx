import { FunctionComponent } from 'react';
import { HelloUseCase } from '~/application/usecases';
import { Hello } from '~/infrastructure/ui/components/Hello';
import { HelloStorage } from '~/infrastructure/services';

export const HelloFactory: FunctionComponent = () => {
  const helloStorage = new HelloStorage();
  const helloUseCase = new HelloUseCase(helloStorage);
  return <Hello helloUseCase={helloUseCase} />;
};
