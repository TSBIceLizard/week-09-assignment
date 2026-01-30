import Link from "next/link";

export default async function MemberNotFound() {
  return (
    <>
      <h2>Error: Member not located on the list! Maybe you made a typo?</h2>
      <Link href={`/members`}>Return to the member list</Link>
    </>
  );
}
