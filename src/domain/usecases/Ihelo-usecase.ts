import { Either } from '~/shared/error-handler/either';
import { Hello } from '~/domain/entities';

export interface IHelloUseCase {
  handle: () => IHelloUseCase.output;
}
export namespace IHelloUseCase {
  export type output = Promise<Either<Error, Hello>>;
}
