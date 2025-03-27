import { axiosClient } from "../axiosClient";

export const fetchAuth = async () => {
  const _response = await axiosClient.get(`/.auth/me`);
  if (!_response.data.clientPrincipal)return false;
  return true
};
