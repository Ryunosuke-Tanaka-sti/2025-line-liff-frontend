import useSWR from "swr";

import { fetchReadUser } from "@/service/user/api";

export const useUser = () => {
  const {
    data: userData,
    isLoading: isLoadingUser,
    mutate: mutateUser,
  } = useSWR("user", fetchReadUser);
  return { userData, isLoadingUser, mutateUser };
};
