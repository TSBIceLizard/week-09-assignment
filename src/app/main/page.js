import { db } from "@/utils/dbConnection";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import timelineStyles from "./timeline.module.css";

export default async function MainTimeline() {
  const queryPosts = await db.query(
    `SELECT * FROM neon_posts ORDER BY id DESC`
  );

  const user = await currentUser();
  //   const queryGames2 = await db.query(`SELECT * FROM game_title`);
  async function handlePostSubmit(rawFormData) {
    "use server";
    const author = user?.username;
    const topicName = rawFormData.get("topic");
    const postContent = rawFormData.get("postcontent");
    const submitPost = await db.query(
      `INSERT INTO neon_posts (author, topic, post_content) VALUES ($1, $2, $3)`,
      [author, topicName, postContent]
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
              <Link
                key={queryPost.id}
                href={`/games/${queryPost.review_target}`}
              >
                <figure className={timelineStyles.timeline_figure}>
                  <h2>{queryPost.author}&apos;s post</h2>
                  <div>
                    Content: <p>{queryPost.post_content}</p>
                  </div>
                </figure>
              </Link>
            );
          })}
        </div>
      </figure>
    </>
  );
}
