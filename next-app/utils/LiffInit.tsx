"use client";

import liff from "@line/liff";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

import { LoadingMainComponent } from "@/components/LoadingMainComponent";
import { NotLineClientPage } from "@/components/NotLineClientPage";

type Props = {
  children: React.ReactNode;
};

export const LiffInitPromptBattle = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();
  const [isInLineClient, setIsInLineClient] = useState<boolean>(false);
  const [liffInit, setLiffInit] = useState<boolean>(false);

  useEffect(() => {
    liff
      .init({
        liffId: process.env.NEXT_PUBLIC_PROMPT_BATTLE_LIFF_ID || "",
      })
      .then(() => {
        setLiffInit(true);
        setIsInLineClient(liff.isInClient());
        console.log("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setLiffInit(false);
        showBoundary(e);
      });
  });
  if (!liffInit) {
    return <LoadingMainComponent />;
  }
  if (!isInLineClient) {
    return <NotLineClientPage />;
  }
  return <>{children}</>;
};

export const LiffInitGeoCharacter = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();
  const [isInLineClient, setIsInLineClient] = useState<boolean>(false);
  const [liffInit, setLiffInit] = useState<boolean>(false);

  useEffect(() => {
    liff
      .init({
        liffId: process.env.NEXT_PUBLIC_GEO_CHARACTER_LIFF_ID || "",
      })
      .then(() => {
        setLiffInit(true);
        setIsInLineClient(liff.isInClient());
        console.log("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setLiffInit(false);
        showBoundary(e);
      });
  });
  if (!liffInit) {
    return <>loading ...</>;
  }
  if (!isInLineClient) {
    return <NotLineClientPage />;
  }
  return <>{children}</>;
};
