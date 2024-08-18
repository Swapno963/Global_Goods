import { auth } from "@/auth";
import AccountArea from "@/components/account/AccountArea";
import { getAccountInfoByEmail } from "@/database/queries";

export default async function page() {
  const session = await auth();
  const ourUser = await getAccountInfoByEmail(session?.user?.email);

  return (
    <>
      <div className="container py-4 flex items-center gap-3 ">
        <p className="text-gray-600 font-medium">Account</p>
      </div>

      <div className=" container  items-start gap-6 pt-4 pb-16">
        {/* <!-- info --> */}
        <AccountArea session={session} ourUser={ourUser} />
      </div>
    </>
  );
}
