type GithubApiResponse = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  message?: string;
};

type CardProps = {
  githubData: GithubApiResponse;
};

function Card({ githubData }: CardProps) {
  return (
    <div className="border border-[#64ffda] text-red-500 border text-center rounded-md mt-24 bg-[#0a190f]/20 backdrop-blur-lg py-4 shadow-lg shadow-[#64ffda]/50 px-10 py-10 mb-24 md:mb-0">
      <figure className="flex justify-center items-center flex-col md:flex-row">
        <img className="h-24 rounded-md" src={githubData.avatar_url} alt="" />
        <figcaption className="flex flex-col justify-center items-center mt-3 md:mt-0 md:ml-4">
          <h2 className="text-[#64ffda] text-xl md:text-2xl">
            {githubData.name}
          </h2>
          <p className="text-[#ccd6f6] md:text-lg">{githubData.bio}</p>
        </figcaption>
      </figure>

      <div className="flex justify-evenly mt-4">
        <div className="flex flex-col items-center">
          <p className="text-[#64ffda] text-xl md:text-2xl">
            {githubData.followers}
          </p>
          <p className="text-[#ccd6f6] md:text-lg">Followers</p>
        </div>

        <div className="flex flex-col items-center ml-4">
          <p className="text-[#64ffda] text-xl md:text-2xl">
            {githubData.following}
          </p>
          <p className="text-[#ccd6f6] md:text-lg">Following</p>
        </div>

        <div className="flex flex-col items-center ml-4">
          <p className="text-[#64ffda] text-xl md:text-2xl">
            {githubData.public_repos}
          </p>
          <p className="text-[#ccd6f6] md:text-lg">Repos</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <a
          className="text-[#64ffda] border-[#64ffda] border px-4 py-2 rounded-md ml-3 hover:bg-[#64ffda] hover:text-[#0a192f] transition text-sm md:text-base"
          href={githubData.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Card;
