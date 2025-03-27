"use client";

import { useEffect, useState } from "react";

import { fetchProfile } from "@/service/profile/api"; // API関数をインポート

import type { UserProfileType } from "@/types/UserProfile";

export const UserCard = () => {
  const [user, setUser] = useState<UserProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await fetchProfile();
        setUser(profile);
      } catch (err) {
        console.error(err);
        setError("ユーザー情報の取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex min-w-52 cursor-default flex-row items-center justify-end gap-4 px-2 py-4 font-noto">
      {user && (
        <>
          <span className="text-xs"> {user.userName}でログイン中</span>
          <img
            src={user.picture}
            alt=""
            className="size-12 rounded-full border-2 border-gray-500/40"
          />
        </>
      )}
    </div>
  );
};

// "use client";

// import { Suspense, use } from "react";

// import { fetchProfile } from "@/service/profile/api";

// const authPromise = fetchProfile();

// const UserContent = () => {
//   const user = use(authPromise);
//   return (
//           <div className="flex flex-row items-center gap-4 font-noto">
//             <span className="text-xl"> {user.userName}</span>
//             <img
//               src={user.picture}
//               alt=""
//               className="size-12 rounded-full border-2 border-gray-500"
//             />
//           </div>
//   );
// };

// export const UserCard = () => {
//   return (
//     <Suspense>
//       <UserContent />
//     </Suspense>
//   );
// };
