import { doSignIn } from "../actions";

export default function SingIn() {
  return (
    <form action={doSignIn}>
      <button className="bg-orange-400 p-1 rounded-md m-1" type="submit">
        Sign In With Google
      </button>
    </form>
  );
}
