import RootLayout from "@/components/layout/rootLayout/RootLayout";

export default function MainRootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <RootLayout >
      {children}
    </RootLayout>
  );
}
