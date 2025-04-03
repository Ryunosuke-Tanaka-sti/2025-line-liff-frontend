"use client";

import liff from "@line/liff";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

import { LoadingMainComponent } from "@/components/LoadingMainComponent";
import { axiosClient } from "@/service/axiosClient";

type Props = {
  children: React.ReactNode;
};

export const AxiosConfig = (props: Props) => {
  const { children } = props;

  const { showBoundary } = useErrorBoundary();
  const [isTokenSet, setIsTokenSet] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>();

  useEffect(() => {
    liff.ready.then(() => {
      setAccessToken(liff.getAccessToken());
    });
  }, []);

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers["authorization"] = `Bearer ${accessToken}`;
        return config;
      },
      (error: AxiosError) => showBoundary(error)
    );
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        showBoundary(error);
        return Promise.reject(error);
      }
    );
    if (accessToken) setIsTokenSet(true);

    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken, showBoundary]);

  if (!isTokenSet) return <LoadingMainComponent />;
  return <>{children}</>;
};
