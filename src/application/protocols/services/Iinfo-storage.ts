import { Info } from '~/domain/entities';
import { Either } from '~/shared/either';

export interface IInfoStorage {
  get: () => IInfoStorage.output;
}

export namespace IInfoStorage {
  export type output = Promise<Either<Error, Info[]>>;
}
