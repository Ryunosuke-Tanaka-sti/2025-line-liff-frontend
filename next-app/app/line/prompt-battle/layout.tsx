import { AxiosConfig } from "@/utils/AxiosConfig";
import { ErrorBoundaryComponent } from "@/utils/ErrorBoundary";
import { LiffInitPromptBattle } from "@/utils/LiffInit";
import { SWRConfigComponent } from "@/utils/SWRConfigComponent";

import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="main" className="flex flex-col items-center">
      <HeaderComponent />
      <ErrorBoundaryComponent>
        <LiffInitPromptBattle>
          <AxiosConfig>
            <SWRConfigComponent>
              {children}
            </SWRConfigComponent>
          </AxiosConfig>
        </LiffInitPromptBattle>
      </ErrorBoundaryComponent>
      <FooterComponent />
    </section>
  );
}
