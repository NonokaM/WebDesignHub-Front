"use client";

import Image from "next/image";
import Link from "next/link";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <header>
      <div>
        <Link href="/" >
          webdesignhub
        </Link>
      </div>
      <ul>
        {session ? (
          <>
            <li>
              <Image
                src={session.user?.image ?? ""}
                alt={session.user?.name ?? ""}
                width={40}
                height={40}
              />
            </li>
            <li>
              <button
                onClick={() => signOut()}
              >
                ログアウト
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">
              <button>
                ログイン
              </button>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
