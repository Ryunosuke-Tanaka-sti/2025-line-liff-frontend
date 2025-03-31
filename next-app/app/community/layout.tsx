import { HeaderComponent } from "@/app/community/components/HeaderComponent";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <main className="min-h-screen w-full font-noto">{children}</main>
    </>
  );
}
