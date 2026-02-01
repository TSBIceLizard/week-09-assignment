import { db } from "@/utils/dbConnection";
// import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import timelineStyles from "./timeline.module.css";
// import { useUser } from "@clerk/nextjs";

export default async function MainTimeline() {
  const queryPosts = await db.query(
    `SELECT * FROM neon_posts ORDER BY id DESC`,
  );

  const user = await currentUser();

  console.log(`I am the user of: ${user.id} ${user.username}`);

  const queryMembers = await db.query(
    `SELECT userid, username FROM member_list WHERE userid = $1`,
    [user.id],
  );

  console.log(`queryMember is ${queryMembers.rows[0].username}`);

  async function handlePostSubmit(rawFormData) {
    "use server";

    const author = queryMembers.rows[0].username;
    const topicName = rawFormData.get("topic");
    const postContent = rawFormData.get("postcontent");
    await db.query(
      `INSERT INTO neon_posts (author, topic, post_content) VALUES ($1, $2, $3)`,
      [author, topicName, postContent],
    );
    console.log("Post Published");
    revalidatePath(`/main`);
  }

  return (
    <>
      <figure>
        <h2>Oh Neon user, what is your wisdom today?</h2>
        <form action={handlePostSubmit}>
          <label htmlFor="topic">Topic:</label>
          <input name="topic" max={96} required />
          <label htmlFor="postcontent">Post area:</label>
          <textarea name="postcontent" rows="6" cols="48" required />
          <button type="submit">Submit</button>
        </form>
      </figure>
      <figure>
        <h2 className={timelineStyles.timeline_title}>Recent blerbs:</h2>
        <div>
          {queryPosts.rows.map((queryPost) => {
            return (
              <div
                key={queryPost.id}
                href={`/games/${queryPost.review_target}`}
              >
                <figure className={timelineStyles.timeline_figure}>
                  <h2>{queryPost.author}&apos;s post</h2>
                  <h2>Topic: {queryPost.topic}</h2>
                  <div>
                    Content: <p>{queryPost.post_content}</p>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </figure>
    </>
  );
}
