import { axiosClient } from "../../axiosClient";

import type { ClientPrincipalType } from "./type";
import type { UserProfileType } from "@/types/UserProfile";

export const fetchProfile = async () => {
  // const _response = await fetch("/.auth/me");
  // const _responseJson = await _response.json();
  // return _responseJson;
  const _response = await axiosClient.get<ClientPrincipalType>(`/.auth/me`);
  const resposneData: UserProfileType = {
    userID: _response.data.clientPrincipal.userId,
    userRoles: _response.data.clientPrincipal.userRoles,
    userName:
      _response.data.clientPrincipal.claims?.find(
        (claim) => claim.typ === "name"
      )?.val || "",
    picture:
      _response.data.clientPrincipal.claims?.find(
        (claim) => claim.typ === "picture"
      )?.val || "",
  };

  return resposneData;
};
