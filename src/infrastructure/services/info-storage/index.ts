import { right } from '~/shared/either';
import { IInfoStorage } from '~/application/protocols/services';

export class InfoStorage implements IInfoStorage {
  async get(): IInfoStorage.output {
    const data = [
      {
        link: 'https://nextjs.org/docs',
        head: 'Documentation',
        description: 'Find in-depth information about Next.js features and API.'
      },
      {
        link: 'https://nextjs.org/learn',
        head: 'Learn',
        description: 'Learn about Next.js in an interactive course with quizzes!'
      },
      {
        link: 'https://github.com/vercel/next.js/tree/canary/examples',
        head: 'Examples',
        description: 'Discover and deploy boilerplate example Next.js projects.'
      },
      {
        link: 'https://vercel.com/new?utm_source=clean-arch-nextjs-starter',
        head: 'Deploy',
        description: 'Instantly deploy your Next.js site to a public URL with Vercel.'
      }
    ];
    return right(data);
  }
}
