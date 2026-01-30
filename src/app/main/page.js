import { db } from "@/utils/dbConnection";
import Link from "next/link";
import timelineStyles from "./timeline.module.css";

export default async function MainTimeline() {
  const queryPosts = await db.query(
    `SELECT * FROM neon_posts ORDER BY id DESC`,
  );
  //   const queryGames2 = await db.query(`SELECT * FROM game_title`);

  return (
    <>
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
