"use client";

import { LoadingMainComponent } from "@/components/LoadingMainComponent";
import { useGoogleOAuth } from "@/hooks/useGoogleOAuth";

import { Button } from "./components/Button";
import { FormComponent } from "./components/Form";

export default function GooglePage() {
  const { isLoading } = useGoogleOAuth();
  if (isLoading) return <LoadingMainComponent />;

  const onClickRead = async (
    action: "healthCheckFunction" | "getSheetAllData"
  ) => {
    const res = await fetch("/api/google-auth/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ functionName: action }),
    });
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
    } else {
      const data = await res.json();
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <>
      <main className="flex w-full flex-col gap-2">
        <div className="flex max-w-xl flex-col gap-2 p-4">
          <Button
            label={"Hello World!"}
            onClick={() => onClickRead("healthCheckFunction")}
          />
          <Button
            label={"Get Sheet All Data"}
            onClick={() => onClickRead("getSheetAllData")}
          />
          <FormComponent />
        </div>
      </main>
    </>
  );
}
