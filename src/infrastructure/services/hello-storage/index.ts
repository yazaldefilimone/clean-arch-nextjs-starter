import { right } from '~/shared/either';
import { IHelloStorage } from '~/application/protocols/services';

export class HelloStorage implements IHelloStorage {
  async get(): IHelloStorage.output {
    return right({
      desc: 'Advanced FrontEnd',
      author: 'Yazalde Filimone',
      repo: 'https://github.com/yazaldefilimonepinto'
    });
  }
}
