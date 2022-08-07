import { IHelloUseCase } from '~/domain/usecases/Ihelo-usecase';
import { right, left } from '~/shared/error-handler/either';
import { IHelloStorage } from '~/data/protocols/services';

export class HelloUseCase implements IHelloUseCase {
  private readonly helloStorage: IHelloStorage;
  constructor(helloStorage: IHelloStorage) {
    this.helloStorage = helloStorage;
  }

  async handle(): IHelloUseCase.output {
    const result = await this.helloStorage.get();

    if (result.isLeft()) {
      return left(new Error('Data Fetching failed!! Try refreshing the page.'));
    }

    return right(result.value);
  }
}
