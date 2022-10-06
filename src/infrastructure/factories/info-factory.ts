import { InfoUseCase } from '~/application/usecases';
import { InfoStorage } from '~/infrastructure/services';

export const InfoFactory = () => {
  const infoStorage = new InfoStorage();
  const infoUseCase = new InfoUseCase(infoStorage);
  return infoUseCase;
};
