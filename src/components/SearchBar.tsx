/* eslint-disable react/jsx-props-no-spreading */
import { Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
};

type SearchBarProps = {
  onSearchGithubUsername: (username: string) => Promise<void>;
};

function SearchBar({ onSearchGithubUsername }: SearchBarProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    if (data.username.trim().length > 0) {
      await onSearchGithubUsername(data.username);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl isInvalid={!!errors.username}>
        <Input
          {...register('username', {
            required: 'GitHub username is required',
          })}
          defaultValue=""
          type="text"
          placeholder="Enter github username..."
          width="auto"
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="gray" isLoading={isSubmitting}>
        Search
      </Button>
    </form>
  );
}

export default SearchBar;
