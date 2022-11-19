import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Home() {
  const [username, setUsername] = useState<string>('');

  const handleChange = (githubUsername: string): void => {
    if (
      username !== githubUsername.trim() &&
      githubUsername.trim().length > 0
    ) {
      setUsername(githubUsername);
    }
  };

  return (
    <section className="max-w-screen-md flex flex-col m-auto pt-52 px-12 sm:px-0">
      <h1 className="text-center text-[#ccd6f6] mb-12 text-4xl md:text-6xl">
        Github Search Profile
      </h1>
      <SearchBar onHandleChange={handleChange} />

      {username && <Card githubUsername={username} />}
    </section>
  );
}

export default Home;
