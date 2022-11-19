/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
};

type SearchBarProps = {
  onHandleChange: (githubUsername: string) => void;
};

function SearchBar({ onHandleChange }: SearchBarProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data): void => onHandleChange(data.username));

  return (
    <form className="flex w-full mx-auto flex-col" onSubmit={onSubmit}>
      <div className="flex">
        <input
          className="bg-transparent border px-4 py-2 text-[#ccd6f6] outline-none placeholder-[#ccd6f6] border-[#ccd6f6] rounded-md w-full text-sm md:text-base"
          {...register('username', {
            required: 'GitHub username is required',
          })}
          defaultValue=""
          type="text"
          placeholder="Enter github username..."
        />

        <button
          className="text-[#64ffda] border-[#64ffda] border px-4 py-2 rounded-md ml-3 hover:bg-[#64ffda] hover:text-[#0a192f] transition text-sm md:text-base"
          type="submit"
        >
          Search
        </button>
      </div>
      {errors.username && (
        <p className="text-red-500 mt-2 text-sm md:text-base">
          {errors.username.message}
        </p>
      )}
    </form>
  );
}

export default SearchBar;
