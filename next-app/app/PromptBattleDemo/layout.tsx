import { FooterComponent } from "../PromptBattle/components/FooterComponent";
import { HeaderComponent } from "../PromptBattle/components/HeaderComponent";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="main" className="flex flex-col items-center">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </section>
  );
}
