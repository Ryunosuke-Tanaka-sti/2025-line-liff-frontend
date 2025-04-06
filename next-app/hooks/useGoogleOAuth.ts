"use client";

import { useEffect, useState } from "react";

export const useGoogleOAuth = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading && typeof window !== "undefined") {
      const verify = async () => {
        const res = await fetch("/api/google-auth/verify");
        if (res.status === 200) {
          setIsLoading(false);
        } else if (res.status === 401) {
          const data = await res.json();
          console.log(data);
          window.location.href = data.url;
        } else {
          const data = await res.json();
          alert(`認証に失敗しました。：${data.message}`);
        }
      };
      verify();
    }
  }, [isLoading]);

  return { isLoading };
};
