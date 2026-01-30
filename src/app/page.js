import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import homeStyles from "./home.module.css";
// import {
//   UserButton,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/nextjs";
//TODO Render timeline of recent activity
//! Actually that can go on the /main timeline!

export default function HomePage() {
  return (
    <>
      <div className={homeStyles.intro_div}>
        <h2>Welcome to Neon Game Reviews</h2>
        <p>
          We list games and game reviews submitted by members of our community.
          Mostly these are the solid classic games but reviewing and discussing
          any game is welcome.
        </p>
        <p>
          We are currently thinking of further way to expand our site. We have
          been considering adding game specific forums, mod lists, mod
          communities etc.
        </p>
      </div>
      <div>
        <SignedOut>
          <h2>
            <SignInButton>Sign in</SignInButton> or{" "}
            <SignUpButton>Sign up</SignUpButton> to use our platform:
          </h2>
        </SignedOut>
        <SignedIn>
          <h2>
            Go to the <Link href={"/main"}>Timeline</Link> to check out recent
            activity, or customise your account
          </h2>
        </SignedIn>
      </div>
    </>
  );
}
