import type { NextPage } from 'next';
import { HelloFactory } from '~/infra/factories';

const Home: NextPage = () => <HelloFactory />;

export default Home;
