INSERT INTO game_title (game_name, genre, synopsis, release_date, box_art) VALUES ('Unreal', 'Sci-fi Exploration FPS', 'Unreal was Epic Games first game in the Unreal franchise. Your prison ship has crash-landed on the fastest, sleekest, most dangerous 3D world ever created. Look around, crystal clear water shimmers, shadows dance and shift, alien architecture fades into the horizon. Discover the secret of this mysterious planet and find out what caused a peaceful race to be enslaved by vicious merciless aggressors.', '30/4/1998', 'https://upload.wikimedia.org/wikipedia/en/d/de/Unreal_Coverart.png');

INSERT INTO game_title (game_name, genre, synopsis, release_date, box_art, alias) VALUES ('S.T.A.L.K.E.R 2: Heart of Chernobyl', 'Horror-Survival-FPS', 'Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl. Make your choices wisely, as they will determine your fate in the end.', '20/10/2024', 'https://upload.wikimedia.org/wikipedia/en/8/80/STALKER_2_cover_art.jpg', 'stalker2');

INSERT INTO game_title (game_name, genre, synopsis, release_date, box_art, alias) VALUES ('Broken Game: The spammening', 'Jank-Playing-Game', 'This title represents a broken entry just so we can experiment with deleting it using a different menouver', '28/01/2026', 'error', 'brokengame');

CREATE TABLE IF NOT EXISTS member_list (
  userid TEXT PRIMARY KEY,
  username VARCHAR(255),
  public_email TEXT,
  about TEXT,
  age INT,
  interests TEXT,
  fave_game VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS neon_posts (
  ID INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255) REFERENCES member_list(username) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  post_content TEXT NOT NULL
);