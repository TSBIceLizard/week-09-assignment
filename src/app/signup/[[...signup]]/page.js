//TODO Render a sign up page
import { SignUp } from "@clerk/nextjs";
//Use Clerk components
//- A form to collect other user data (bio, nickname, location, interests, etc)
//- Insert user's data into the users table so we can render it in the profile page

//Extra: You could have the filling in of personal info as separate to the sign up process

export default function SignUpPage() {
  // const { userId } = auth();

  return (
    <>
      <h2>Sign Up below!</h2>
      <SignUp />
    </>
  );
}
