import { Either } from '~/shared/either';
import { Hello } from '~/domain/entities';

export interface IHelloUseCase {
  handle: () => IHelloUseCase.output;
}
export namespace IHelloUseCase {
  export type output = Promise<Either<Error, Hello>>;
}
