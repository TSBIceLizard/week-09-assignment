import Link from "next/link";
import NavStyles from "./Nav.module.css";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Nav() {
  return (
    <>
      <h1 className={NavStyles.main_title}>NEON GAME REVIEWS</h1>
      <nav className={NavStyles.nav_bar}>
        <Link href={"/"}>HOME</Link>
        <SignedIn>
          <Link href={"/about"}>ABOUT</Link>
          <Link href={"/main"}>TIMELINE</Link>
          <Link href={"/games"}>GAMES</Link>
          <Link href={"/members"}>MEMBERS</Link>
          <Link href={"/contact"}>CONTACT</Link>
          <Link href={"/links"}>LINKS</Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignUpButton>REGISTER</SignUpButton> OR{" "}
          <SignInButton>LOGIN</SignInButton>
        </SignedOut>
      </nav>
    </>
  );
}
