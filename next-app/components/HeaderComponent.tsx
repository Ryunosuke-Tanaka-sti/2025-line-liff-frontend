import { HasAuthenticatedComponent } from "../utils/HasAuthenticatedComponent";
import { UserCard } from "./hasAuth/UserCard";

export const HeaderComponent = () => {
  return (
    <header className="flex h-16 flex-row items-center justify-between gap-2 border-b-2 border-gray-500/20 p-2">
      <a href="/community">
        <img
          src="/assets/community/logo.svg"
          className="h-12 w-auto object-contain"
          alt=""
        />
      </a>
      <HasAuthenticatedComponent>
        <UserCard />
      </HasAuthenticatedComponent>
    </header>
  );
};
