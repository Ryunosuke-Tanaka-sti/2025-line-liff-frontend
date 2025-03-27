import { HasAuthenticatedComponent } from "../utils/HasAuthenticatedComponent";
import { UserCard } from "./hasAuth/UserCard";

export const HeaderComponent = () => {
  return (
    <header className="flex flex-row justify-between gap-2">
      <div>コミュ活用サポートサイト</div>
      <HasAuthenticatedComponent>
        <UserCard />
      </HasAuthenticatedComponent>
    </header>
  );
};
