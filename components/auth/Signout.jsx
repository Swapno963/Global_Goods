import { doSignOut } from "../actions";

const Signout = () => {
  return (
    <form action={doSignOut}>
      <button type="submit" className="text-white  hover:text-gray-200">
        Sign Out
      </button>
    </form>
  );
};

export default Signout;
