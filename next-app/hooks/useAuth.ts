"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import { fetchAuth } from "@/service/auth/api";
import { fetchProfile } from "@/service/auth/profile/api";

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

export const useAuthProfile = () => {
  const { data, isLoading } = useSWR("profile", fetchProfile, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, isLoading };
};
