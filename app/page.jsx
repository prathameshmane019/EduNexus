import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Banner } from "./(pages)/home/home";
import './globals.css';
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/student/dashboard");

  return (
    <main>
      <Banner></Banner>
    </main>
  );
}
