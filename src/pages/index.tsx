import type { GetStaticProps, NextPage } from 'next';
import { Info } from '~/domain/entities';
import { InfoFactory } from '~/infrastructure/factories';
import { HomeTemplete } from '~/infrastructure/ui/templetes/Home';

const Home: NextPage<{ data?: Info[] }> = ({ data }) => {
  return <HomeTemplete data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const infoFactory = InfoFactory();
  const result = await infoFactory.handle();

  if (result.isLeft()) {
    return { notFound: true };
  }

  return {
    props: {
      data: result.value
    }
  };
};

export default Home;
