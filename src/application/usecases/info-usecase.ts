import { IInfoUseCase } from '~/domain/usecases/Iinfo-usecase';
import { right, left } from '~/shared/either';
import { IInfoStorage } from '~/application/protocols/services';

export class InfoUseCase implements IInfoUseCase {
  private readonly infoStorage: IInfoStorage;
  constructor(infoStorage: IInfoStorage) {
    this.infoStorage = infoStorage;
  }

  async handle(): IInfoUseCase.output {
    const result = await this.infoStorage.get();

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }
}
