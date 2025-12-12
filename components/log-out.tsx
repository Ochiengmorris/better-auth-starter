"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";

const LogoutButton = () => {
  const SignOut = async () => {
    await authClient
      .signOut({ fetchOptions: { cache: "no-store" } })
      .then(() => {
        window.location.href = "/login";
      });
  };
  return (
    <Button variant={"outline"} onClick={SignOut}>
      <LogOut className="mr-2 size-4" />
      Logout
    </Button>
  );
};

export default LogoutButton;
