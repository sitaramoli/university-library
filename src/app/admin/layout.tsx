import React, { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  return (
    <main className="min-h-screen w-full flex flex-row">
      <p>Sidebar</p>
      <div className="admin-container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
};
export default Layout;
