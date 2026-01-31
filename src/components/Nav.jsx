import Link from "next/link";
import NavStyles from "./Nav.module.css";
import Highlight from "./Highlight.jsx";
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
          <Highlight>
            <Link href={"/about"}>ABOUT</Link>
          </Highlight>
          <Highlight>
            <Link href={"/main"}>TIMELINE</Link>
          </Highlight>
          <Highlight>
            <Link href={"/games"}>GAMES</Link>
          </Highlight>
          <Highlight>
            <Link href={"/members"}>MEMBERS</Link>
          </Highlight>
          <Highlight>
            <Link href={"/contact"}>CONTACT</Link>
          </Highlight>
          <Highlight>
            <Link href={"/links"}>LINKS</Link>
          </Highlight>
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
