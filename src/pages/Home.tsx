import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';

function Home() {
  const { githubData, fetchGithubData } = useFetch();

  return (
    <section className="max-w-screen-md flex flex-col m-auto pt-52 px-12 sm:px-0">
      <h1 className="text-center text-[#ccd6f6] mb-12 text-4xl md:text-6xl">
        Github Search Profile
      </h1>
      <SearchBar onSearchGithubUsername={fetchGithubData} />
      {githubData.message && (
        <div className="border border-red-500 text-red-500 border text-center rounded-md mt-24 bg-red-500/20 shadow-lg shadow-red-500/50 backdrop-blur-sm py-4">
          Github user not found, please try again
        </div>
      )}
      {Object.keys(githubData).length !== 0 && Card({ githubData })}
    </section>
  );
}

export default Home;
