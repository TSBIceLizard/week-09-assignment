import { db } from "@/utils/dbConnection";
import Link from "next/link";
import timelineStyles from "./timeline.module.css";

export default async function MainTimeline() {
  const queryReviews2 = await db.query(
    `SELECT * FROM game_reviews ORDER BY id ASC`,
  );
  //   const queryGames2 = await db.query(`SELECT * FROM game_title`);

  return (
    <>
      <figure>
        <h2>Recently reviewed titles:</h2>
        <div>
          {queryReviews2.rows.map((queryReview2) => {
            return (
              <Link
                key={queryReview2.id}
                href={`/games/${queryReview2.review_target}`}
              >
                <figure className={timelineStyles.timeline_figure}>
                  <h2>{queryReview2.author}&apos;s review (click to expand)</h2>
                  <div>
                    Content: <p>{queryReview2.review_content}</p>
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
