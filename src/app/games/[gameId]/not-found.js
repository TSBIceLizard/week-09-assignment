import Link from "next/link";

export default function GameNotFound() {
  return (
    <>
      <h2>Error 404: Game Page not found</h2>
      <h3>Just disused buildings here ...</h3>
      <Link href={"/games"}>Return to the Games list</Link>
    </>
  );
}
