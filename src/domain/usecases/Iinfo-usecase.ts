import { Either } from '~/shared/either';
import { Info } from '~/domain/entities';

export interface IInfoUseCase {
  handle: () => IInfoUseCase.output;
}
export namespace IInfoUseCase {
  export type output = Promise<Either<Error, Info[]>>;
}
