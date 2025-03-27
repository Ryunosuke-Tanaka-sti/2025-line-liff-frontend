import { mockFlag, sleep } from "@/utils/utilitiesLogic";

import { axiosClient } from "../axiosClient";
import { dummyFetchUser } from "./constants";

import type { UserType } from "./type";

export const fetchReadUser = async () => {
  if (mockFlag) {
    await sleep(2000);
    return dummyFetchUser;
  }
  const res = await axiosClient.get<UserType>("/api/user");
  return res.data;
};
