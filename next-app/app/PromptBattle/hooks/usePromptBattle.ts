import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetchEnemy, postPromptBattle } from "@/service/Battle/api";

export const usePromptBattle = () => {
  const {
    data: enemyData,
    isLoading: isLoadingEnemy,
    mutate: mutateEnemy,
    isValidating,
  } = useSWR("enemy", fetchEnemy, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const {
    data: combatResult,
    trigger: trigger,
    isMutating: isMutatingCombat,
  } = useSWRMutation("/api/battle", postPromptBattle);

  return {
    enemyData,
    isLoadingEnemy,
    mutateEnemy,
    isValidating,

    combatResult,
    trigger,
    isMutatingCombat,
  };
};
