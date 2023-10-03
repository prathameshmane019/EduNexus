import MinistrySideBar from "./sidebar/page";
import MinistrySideBar from "./sidebar/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function MinistryLayout({ children }) {
  const session = await getServerSession(authOptions);

  const role = session?.user?.role
  if (!(role==="ministry")) {
    console.log("unauthorised")
    redirect("/login");
   }
  return (
    <div className="flex   ">
    <MinistrySideBar  />
    <div className=" content w-[85vw] ml-[18vw] mr-8">{children}</div>
    </div>
  );
}
