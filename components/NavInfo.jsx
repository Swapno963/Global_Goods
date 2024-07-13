"use client";

import { useEffect, useState } from "react";

export default function NavInfo({ session }) {
  const email = session?.user?.email;
  const [myEmail, setMyEmail] = useState(email);
  console.log(email, "\nmy", myEmail);
  useEffect(() => {
    setMyEmail(email);
  }, [email]);
  return <div>NavInfo {myEmail}</div>;
}
