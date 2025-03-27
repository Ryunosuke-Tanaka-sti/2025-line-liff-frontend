"use client";

import { useState } from "react";

type SelectContentProps = {
  stringArray: string[];
};

export const SelectContent = ({ stringArray }: SelectContentProps) => {
  const [selectedString, setSelectedString] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [, setShowAnimation] = useState<boolean>(false);

  // Function to select a random string
  const selectRandomString = () => {
    if (isLoading) return;

    setIsLoading(true);
    // setShowAnimation(true);
    setSelectedString(null);

    // Display loading animation for 2 seconds before selecting a random string
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * stringArray.length);
      setSelectedString(stringArray[randomIndex]);
      setIsLoading(false);
    }, 2000);
  };

  // Reset the selected string and animation state
  const handleRestart = () => {
    if (!isLoading) {
      setSelectedString(null);
      // setShowAnimation(false);
    }
  };
  return (
    <>
      <div className="w-full max-w-2xl rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          ランダム雑談選択
        </h1>

        <div className="mb-6 flex min-h-40 items-center justify-center rounded-lg bg-white/20 p-6">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="size-12 animate-spin rounded-full border-y-2 border-white"></div>
              <p className="mt-4 text-white">選択中...</p>
            </div>
          ) : selectedString ? (
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-white">
                {selectedString}
              </p>
            </div>
          ) : (
            <p className="text-center text-white text-opacity-70">
              スタートボタンを押して、ランダムに選択してください
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={selectRandomString}
            disabled={isLoading}
            className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              isLoading
                ? "cursor-not-allowed bg-gray-500 opacity-50"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl"
            } flex-1`}
          >
            {isLoading ? "ローディング中..." : "スタート"}
          </button>

          <button
            onClick={handleRestart}
            disabled={isLoading}
            className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              isLoading
                ? "cursor-not-allowed bg-gray-500 opacity-50"
                : "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:from-pink-600 hover:to-red-600 hover:shadow-xl"
            } flex-1`}
          >
            リセット
          </button>
        </div>
      </div>
    </>
  );
};
