"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (

    <div className="bg-gradient-to-r from-indigo-500 to-purple-500  navbar shadow-xl sticky top-0 ">

      <div className="flex-1">
         
        <div
          className="text-slate-200 btn btn-ghost normal-case text-xl"
          onClick={() => navigate("/")}
        >

          
          <img
            className="mx-auto h-10 w-auto"
            src="data:image/png;base64,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"
            

          />
          EduNexus
        </div>
      </div>
      <div className="flex-none">
        <div className="cursor-pointer text-slate-200" onClick={() => navigate("/about")}>
          About
        </div>
        <div className=" mx-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" onClick={()=> navigate("/login")}>
              <Image
                height={50}
                width={50}
                src="data:image/jpeg;base64,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"
                alt="profile image"
              />
            </div>
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => navigate("/ministry")}>
              <a className="justify-between">Ministry Login</a>
            </li>
            <li onClick={() => navigate("/university")}>
              <a>University Login</a>
            </li>
            <li onClick={() => navigate("/college")}>
              <a>College Login</a>
            </li>
            <li onClick={() => navigate("/student")}>
              <a>Student Login</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
