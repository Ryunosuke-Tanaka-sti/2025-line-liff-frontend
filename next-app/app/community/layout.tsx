import { HeaderComponent } from "@/components/HeaderComponent";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <main className="min-h-96 w-full font-noto">{children};</main>
    </>
  );
}
