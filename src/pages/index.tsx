import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';

const Home: NextPage = () => {
  return (
    <Layout title="Internft">
      <div className="text-gray-600 container mx-auto">
        <div className="flex flex-col text-center w-full mt-4 mb-8">
          <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900">
            Internft
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
