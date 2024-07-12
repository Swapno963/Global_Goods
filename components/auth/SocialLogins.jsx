import { doSignIn } from "../actions";

export default function SocialLogins() {
  return (
    <div className="mt-4 flex gap-4">
      <form
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        action={() => doSignIn("facebook")}
      >
        <button type="submit">Facebook</button>
      </form>
      <form
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
        action={() => doSignIn("google")}
      >
        <button type="submit">Google</button>
      </form>
    </div>
  );
}
