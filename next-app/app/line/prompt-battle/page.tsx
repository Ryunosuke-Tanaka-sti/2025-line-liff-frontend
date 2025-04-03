"use client";

import { useEffect, useState } from "react";

import { LoadingMainComponent } from "@/components/LoadingMainComponent";
import { PromptFormType } from "@/types/PromptType";

import { CombatResult } from "./components/DuelResult";
import { PromptForm } from "./components/PromptForm";
import { usePromptBattle } from "./hooks/usePromptBattle";

export default function PromptBattle() {
  const {
    enemyData,
    isLoadingEnemy,
    mutateEnemy,
    isValidating,
    combatResult,
    isMutatingCombat,
    trigger,
  } = usePromptBattle();

  // const { userData, isLoadingUser, mutateUser } = useUser();

  const [isDuel, setDuel] = useState(false);

  const submitPrompt = async (formData: PromptFormType) => {
    if (!enemyData) {
      await mutateEnemy();
      return;
    }
    console.log("submit", formData);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    await trigger({ ...formData, enemyID: enemyData.enemyID });
    setDuel((prev) => !prev);
  };

  const onClickSubmitNextBattle = async () => {
    await mutateEnemy();
    // await mutateUser();
    setDuel(false);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [isDuel]);

  if (isMutatingCombat) return <LoadingMainComponent />;
  if (isLoadingEnemy || !enemyData) return <LoadingMainComponent />;
  // if (isLoadingUser || !userData) return <LoadingMainComponent />;

  return (
    <>
      <main className=" flex w-full flex-col items-center gap-10 pb-10">
        <div className="flex w-full flex-col items-center gap-3 px-2 py-6">
          <span className="text-2xl font-bold">
            対戦チャンピオン
            <span />
            <span className="text-2xl font-bold"> {enemyData.name}</span>
          </span>
          <img
            src={enemyData.imageUrl}
            className="h-auto w-full object-contain"
            alt=""
          />

          {!isDuel ? (
            <PromptForm formAction={submitPrompt} />
          ) : (
            <div className="flex flex-col gap-3">
              {combatResult && (
                <>
                  <CombatResult data={combatResult} />
                  <button
                    onClick={onClickSubmitNextBattle}
                    className="flex w-full items-center justify-center rounded bg-slate-200 py-4 text-2xl font-bold"
                    disabled={isValidating || !isDuel}
                  >
                    {isValidating ? "対戦相手を検索中" : "別の対戦相手を探す"}
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* <div className="flex w-full flex-col items-center gap-3 p-6">
          <div className="flex w-full flex-row justify-between text-5xl font-bold">
            <span className="text-red-500">{userData.winCount}勝</span>
            <span className="text-blue-500">{userData.lossCount}敗</span>
          </div>
          <div className="flex w-full flex-row justify-center text-2xl font-bold">
            <span>{userData.hotStreak}連勝中！</span>
          </div>
        </div> */}
      </main>
    </>
  );
}
