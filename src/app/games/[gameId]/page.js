import { db } from "@/utils/dbConnection";
import Image from "next/image";
import gameIdStyles from "./gameId.module.css";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function GameId({ params, searchParams }) {
  const searchOrder = await searchParams;
  const { gameId } = await params;
  const queryGames = await db.query(`SELECT * FROM game_title WHERE id = $1`, [
    gameId,
  ]);
  const queryReviews = await db.query(
    `SELECT * FROM game_reviews WHERE review_target = $1`,
    [gameId],
  );

  const gameListData = queryGames.rows[0];

  if (searchOrder.sort === "desc") {
    queryReviews.rows.sort((a, b) => {
      return b.id - a.id;
    });
  } else if (queryReviews.sort === "asc") {
    queryReviews.rows.sort((a, b) => {
      return a.id - b.id;
    });
  }

  if (queryGames.rows.length === 0) {
    notFound();
  }

  //!==============================================
  //!Submit review code

  async function handleCreateReview(rawFormData) {
    "use server";
    const nickName = rawFormData.get("authorname");
    const score = rawFormData.get("score");
    const reviewContent = rawFormData.get("reviewcontent");

    await db.query(
      `INSERT INTO game_reviews (author, review_content, score, review_target) VALUES ($1, $2, $3, $4)`,
      [nickName, reviewContent, score, gameId],
    );
    console.log("Review Published");
    revalidatePath(`/games/${gameId}`);
    // redirect(`/games/${gameId}`);
  }
  //!==============================================

  return (
    <>
      <figure className={gameIdStyles.centre_figure}>
        <h2>{queryGames.rows[0].game_name}</h2>
        <Image
          src={queryGames.rows[0].box_art}
          alt={queryGames.rows[0].game_name}
          width={282}
          height={352}
        />
        <p className={gameIdStyles.genre_paragraph}>
          {queryGames.rows[0].genre}
        </p>
        <p>Release Date: {queryGames.rows[0].release_date}</p>
        <div>
          <p className={gameIdStyles.synopsis_paragraph}>
            {queryGames.rows[0].synopsis}
          </p>
        </div>
        <div>
          <h3 className={gameIdStyles.user_reviews_h3}>User Reviews:</h3>
          <div className={gameIdStyles.change_search_dir_div}>
            <Link href={`/games/${gameId}?sort=asc`}>Oldest to Latest</Link>
            <Link href={`/games/${gameId}?sort=desc`}>Latest to Oldest</Link>
          </div>

          {queryReviews.rows.map((queryReview) => {
            async function deleteReviewComment() {
              "use server";

              await db.query(`DELETE FROM game_reviews WHERE id = $1`, [
                queryReview.id,
              ]);

              revalidatePath(`/games/${gameId}`);
            }
            return (
              <figure
                className={gameIdStyles.game_review_item}
                key={queryReview.id}
              >
                <form action={deleteReviewComment}>
                  <p className={gameIdStyles.game_review_item_author}>
                    Reviewed by {queryReview.author}
                  </p>
                  <p>{queryReview.review_content}</p>
                  <p>Review Score Out Of 5: {queryReview.score}</p>
                  <button className={gameIdStyles.delete_comment}>
                    Delete comment?
                  </button>
                </form>
              </figure>
            );
          })}
          <figure>
            <h3>What about your thoughts? Let us know!</h3>
            <form
              action={handleCreateReview}
              className={gameIdStyles.review_submit_form}
            >
              <p>
                <label htmlFor="authorname">Your (nick)name: </label>
                <input type="text" name="authorname" id="authorname" required />
              </p>
              <p>
                <label htmlFor="score">Score: </label>
                <input
                  type="number"
                  name="score"
                  id="score"
                  className={gameIdStyles.review_score}
                  required
                  min="0"
                  max="5"
                />
              </p>
              <p>
                <label htmlFor="reviewcontent">Your thoughts: </label>
                <textarea
                  name="reviewcontent"
                  id="reviewcontent"
                  rows="6"
                  cols="48"
                />
              </p>
              <p>
                <button type="submit">Publish review</button>
              </p>
            </form>
          </figure>
        </div>
      </figure>
    </>
  );
}
