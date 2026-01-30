import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function CreateProfilePage() {
  async function handleAddToMembers(rawFormData) {
    "use server";
    const { userId } = await auth();
    console.log(`User ID on Clerk is: ${userId}`);

    const formValues = {
      id: userId,
      userName: rawFormData.get("username"),
      pubEmail: rawFormData.get("publicemail"),
      aboutMe: rawFormData.get("aboutme"),
      age: rawFormData.get("age"),
      interests: rawFormData.get("interests"),
      faveGame: rawFormData.get("favegame"),
    };

    await db.query(
      `INSERT INTO member_list (userid, username, public_email, about, age, interests, fave_game) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        formValues.id,
        formValues.userName,
        formValues.pubEmail,
        formValues.aboutMe,
        formValues.age,
        formValues.interests,
        formValues.faveGame,
      ],
    );
  }

  return (
    <>
      <h2>Registration phase-2 (final)</h2>
      <form action={handleAddToMembers}>
        <label htmlFor="username">User/profile name</label>
        <input type="text" name="username" maxLength={64} required />
        <label htmlFor="publicemail">Front-facing email (optional)</label>
        <input type="text" name="publicemail" />
        <label htmlFor="aboutme">About you/Bio</label>
        <textarea name="aboutme" rows="7" cols="56" />
        <label htmlFor="age">Age (optional)</label>
        <input type="number" name="age" min={18} max={110} />
        <label htmlFor="interests">Interests (optional)</label>
        <input type="text" name="interests" />
        <label htmlFor="favegame">Your favourite game (optional)</label>
        <input type="text" name="favegame" />
        <button type="submit">Confirm and Finish</button>
      </form>
    </>
  );
}
