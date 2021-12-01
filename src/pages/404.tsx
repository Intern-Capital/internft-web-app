import type { NextPage } from 'next';



const Custom404: NextPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          ...
        </div>
        <div className="max-w-xl mx-auto py-2 sm:py-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              The page you are looking for could not be found.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Custom404;
