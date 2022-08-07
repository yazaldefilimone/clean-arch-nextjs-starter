import { right } from '~/shared/error-handler/either';
import { IHelloStorage } from '~/data/protocols/services';
import { HelloUseCase } from '~/data/usecases';

class HelloStorageMock implements IHelloStorage {
  async get(): IHelloStorage.output {
    return right({
      desc: 'test desc',
      author: 'John Doe',
      repo: 'https://github.com/johndoe'
    });
  }
}

const makeSut = () => {
  const helloStorage = new HelloStorageMock();
  const sut = new HelloUseCase(helloStorage);
  return {
    sut,
    helloStorage
  };
};

describe('Hello', () => {
  it('Should function get not return error if all is right', async () => {
    const { sut } = makeSut();
    const response = await sut.handle();
    expect(response.isLeft()).toBe(false);
  });
});
