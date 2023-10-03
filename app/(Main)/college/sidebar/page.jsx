"use client";
import { useRouter } from "next/navigation";
export default function CollegeSideBar() {
  const router = useRouter();
  const navigate = (name) => {
    router.push("/college/" + name);
  };
  return (
    <div className=" bg-transparent fixed left-2 shadow-lg shadow-indigo-500/40  w-[15vw] mt-[2vh] h-[87vh] flex flex-col gap-2 p-2 border rounded-xl">
      <div className="ml-6">
        <p className="text-xs font-medium text-gray-400">MAIN</p>

        <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
          onClick={() => navigate("dashboard")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Dashboard
        </div>

        <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
          onClick={() => navigate("projects")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Projects Gallery
        </div>

        <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
          onClick={() => navigate("addproject")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Add Project
        </div>
        <div
          className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
          onClick={() => navigate("community")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          Community
        </div>
      </div>
    </div>
  );
}
