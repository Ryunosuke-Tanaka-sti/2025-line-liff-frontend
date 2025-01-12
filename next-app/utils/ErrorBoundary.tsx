"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  return (
    <main className=" flex size-full min-h-screen items-center justify-center  gap-5 ">
      <button className="bg-slate-300" onClick={resetErrorBoundary}>
        リトライ
        {error.message}
      </button>
    </main>
  );
};
