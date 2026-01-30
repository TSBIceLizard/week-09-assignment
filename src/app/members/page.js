import { db } from "@/utils/dbConnection";
import Link from "next/link";
import MembersStyles from "./members.module.css";

export default async function MemberList() {
  const memberItems = await db.query(`SELECT * FROM member_list`);
  return (
    <>
      <figure className={MembersStyles.member_list}>
        {memberItems.rows.map((memberItem) => {
          return (
            <Link
              key={memberItem.userid}
              href={`/members/${memberItem.username}`}
            >
              <div>{memberItem.username}</div>
            </Link>
          );
        })}
      </figure>
    </>
  );
}
