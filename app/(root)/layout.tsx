import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Prepify</h2>
        </Link>

        <Button size="sm" className="btn" onClick={signOut}>
          Logout
        </Button>
      </nav>

      {children}
    </div>
  );
};
export default RootLayout;
