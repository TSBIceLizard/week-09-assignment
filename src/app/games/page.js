import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";
import gamesStyles from "./games.module.css";

export default async function GamesListPage() {
  const gameItems = await db.query(`SELECT * FROM game_title`);

  return (
    <>
      <figure className={gamesStyles.game_list}>
        {gameItems.rows.map((gameItem) => {
          return (
            <Link key={gameItem.id} href={`/games/${gameItem.id}`}>
              <figure className={gamesStyles.game_item}>
                <Image
                  src={gameItem.box_art}
                  alt={gameItem.game_name}
                  width={282}
                  height={352}
                />
                <p>{gameItem.game_name}</p>
                <p>{gameItem.genre}</p>
              </figure>
            </Link>
          );
        })}
      </figure>
    </>
  );
}
