"use client";

import { PropsWithChildren } from "react";

import { useAuth } from "@/hooks/useAuth";

export const HasAuthenticatedComponent = ({ children }: PropsWithChildren) => {
  const { hasAuthenticated } = useAuth();
  if (!hasAuthenticated) return <></>;
  return <>{children}</>;
};

// MEMO:use検証　というかそもそもClientでは使うもんじゃない
// "use client";

// import { Suspense } from "react";

// import { useAuth } from "@/hooks/useAuth";

// export const HasAuthenticatedComponent = () => {
//   const { hasAuthenticated } = useAuth();
//   return <>{hasAuthenticated ? "true" : "true"}</>;
// };

// export const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <HasAuthenticatedComponent />
//     </Suspense>
//   );
// };
