"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
export default function UserInfo() {
  const { data: session, status } = useSession();
 // Log the session object
const router = useRouter();
 
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
    // Handle the case where the user is not logged in
    return router.replace("/login")
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div>
          Role: <span className="font-bold">{session?.user?.role}</span>
        </div>
        <button
          onClick={() => {signOut()
          router.replace("/")}}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
