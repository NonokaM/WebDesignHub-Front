"use client";

import React from "react";
import { useEffect } from "react";

import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/");
    }
  }, [session, status]);

  const handleLogin = (provider: string) => async (event: React.MouseEvent) => {
    event.preventDefault();
    const result = await signIn(provider);

    if (result) {
      redirect("/");
    }
  };

  return (
    <div>
      <form>
        <button
          onClick={handleLogin("google")}
          type="button"
        >
          Googleでログイン
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
