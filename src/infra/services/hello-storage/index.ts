import { right } from '~/shared/error-handler/either';
import { IHelloStorage } from '~/data/protocols/services';

export class HelloStorage implements IHelloStorage {
  async get(): IHelloStorage.output {
    return right({
      desc: 'Advanced FrontEnd',
      author: 'Yazalde Filimone',
      repo: 'https://github.com/yazaldefilimonepinto'
    });
  }
}
