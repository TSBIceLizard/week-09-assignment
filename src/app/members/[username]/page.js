//TODO render specific users data
//- READ user's data from the table
//- READ user's posts or activity: Render a list of user's personal reviews/posts

//Tips:
// The Clerk userId does not exist until the user signs up --> Show sign-up and sign-in buttons first thing (Your Home page can be public, but the rest of the routes must require sign in)

//https://clerk.com/docs/reference/nextjs/app-router/current-user

//https://clerk.com/docs/reference/nextjs/app-router/auth

import { db } from "@/utils/dbConnection";
import { notFound } from "next/navigation";
import userStyles from "./user.module.css";

export default async function ProfilePage({ params }) {
  const { username } = await params;
  const queryMembers = await db.query(
    `SELECT * FROM member_list WHERE username = $1`,
    [username],
  );

  const memberListData = queryMembers.rows[0];

  if (queryMembers.rows.length === 0) {
    notFound();
  }

  return (
    <>
      <figure className={userStyles.user_space}>
        <h1>{memberListData.username}&apos;s page:</h1>
        <div>
          <h2>About me:</h2>
          <p>{memberListData.about}</p>
        </div>
        <div>
          <h2>My Interests:</h2>
          <p>{memberListData.interests}</p>
        </div>
        <div>
          <h2>Age:</h2>
          <p>{memberListData.age}</p>
        </div>
        <div>
          <h2>Contact me at this email:</h2>
          <p>{memberListData.public_email}</p>
        </div>
        <div>
          <h2>Favourite Game:</h2>
          <p>{memberListData.fave_game}</p>
        </div>
      </figure>

      {/* <h2>User&apos;s Activity:</h2> */}
    </>
  );
}
