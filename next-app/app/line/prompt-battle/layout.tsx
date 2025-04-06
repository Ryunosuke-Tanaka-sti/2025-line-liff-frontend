import { AxiosLiffConfig } from "@/utils/AxiosLiffConfig";
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
          <AxiosLiffConfig>
            <SWRConfigComponent>
              {children}
            </SWRConfigComponent>
          </AxiosLiffConfig>
        </LiffInitPromptBattle>
      </ErrorBoundaryComponent>
      <FooterComponent />
    </section>
  );
}
