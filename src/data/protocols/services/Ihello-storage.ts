import { Hello } from '~/domain/entities';
import { Either } from '~/shared/error-handler/either';

export interface IHelloStorage {
  get: () => IHelloStorage.output;
}

export namespace IHelloStorage {
  export type output = Promise<Either<Error, Hello>>;
}
