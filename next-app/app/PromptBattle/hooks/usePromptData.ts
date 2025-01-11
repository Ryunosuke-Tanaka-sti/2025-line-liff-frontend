import { PromptFormType } from "@/types/PromptType";

export const useSessionStorage = () => {
  // 情報取得
  const getUserData = (): PromptFormType | undefined => {
    const temp = sessionStorage.getItem("userData");
    if (temp != null) {
      return JSON.parse(temp) as PromptFormType;
    }
    return;
  };

  // 編集・追加
  const setUserData = (userData: PromptFormType) => {
    const temp = JSON.stringify(userData);
    sessionStorage.setItem("userData", temp);
  };

  // 削除
  const deleteUserData = () => {
    sessionStorage.removeItem("userData");
  };
  return { getUserData, deleteUserData, setUserData };
};
