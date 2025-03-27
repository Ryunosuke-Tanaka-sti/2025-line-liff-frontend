"use client";

import { useEffect, useState } from "react";

import { fetchAuth } from "@/service/auth/api";

export const useAuth = () => {
  const [hasAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const hasAuth = async () => {
      try {
        const hasAuthenticated = await fetchAuth();
        if (hasAuthenticated) setAuthenticated(true);
      } catch (err) {
        console.error(err);
      }
    };
    hasAuth();
  }, []);

  return { hasAuthenticated };
};
