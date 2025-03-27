import { EnemyType } from "@/types/PromptType";
import { mockFlag, sleep } from "@/utils/utilitiesLogic";

import { axiosClient } from "../axiosClient";
import { dummyFetchEnemyResponse, dummyPostBattleResponse } from "./constants";

import type { CombatLogType, RequestPostBattleType } from "./type";

export const postPromptBattle = async (
  url: string,
  { arg }: { arg: RequestPostBattleType }
) => {
  if (mockFlag) {
    await sleep(2000);
    return dummyPostBattleResponse;
  }
  const response = await axiosClient.post<CombatLogType>(url, arg);
  return response.data;
};

export const fetchEnemy = async () => {
  if (mockFlag) {
    await sleep(2000);
    return dummyFetchEnemyResponse;
  }
  const response = await axiosClient.get<EnemyType>("/api/battle");
  return response.data;
};
