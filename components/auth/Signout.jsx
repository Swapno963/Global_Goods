import { doSignOut } from "../actions";

const Signout = () => {
  return (
    <form action={doSignOut}>
      <button type="submit" className="text-white underline">
        Sign Out
      </button>
    </form>
  );
};

export default Signout;
