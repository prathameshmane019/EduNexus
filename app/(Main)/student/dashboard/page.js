"use client";
import "./dashboard.css";
import Image from "next/image";
export default function DashboardPage() {
  return (
    <>
    <div className="flex mt-28 ">
      <div className="flex h-[150px] w-[300px] text-center    shadow-xl border rounded-xl ">
        <div className="./src/assets/img/student.png ">
        <a  href="https://icons8.com/icon/CAQ8ZCa4Ymaj/student">Student</a> icon by <a href="https://icons8.com">Icons8</a>
          <div>
          
        </div>
        <div className="mt-3">Number of Students Enrolled</div>
        <div>50000</div>
      </div>
    </div>
    </div>
      <h1>General Stats</h1>
      <div className="stats shadow py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Number of Students Enrolled</div>
          <div className="stat-value">50000</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Number of Projects</div>
          <div className="stat-value text-secondary">3,400</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Number of Departments</div>
          <div className="stat-value">12</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Number of Domains</div>
          <div className="stat-value">6</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <h1>Project Status</h1>
      <div className="stats shadow mb-11 mt-10 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Active Projects</div>
          <div className="stat-value">2,700</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Completed projects</div>
          <div className="stat-value text-secondary">700</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
      </div>
      <h1>Domain-wise Stats</h1>
      <div className="stats shadow mb-5 mt-10 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Web Development</div>
          <div className="stat-value">1200</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Mobile Application Development</div>
          <div className="stat-value text-secondary">750</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Machine Learning</div>
          <div className="stat-value">450</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <div className="stats shadow mb-11 mt-4 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Artificial Intelligence</div>
          <div className="stat-value">100</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Blockchain</div>
          <div className="stat-value text-secondary">700</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">IOT</div>
          <div className="stat-value">200</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      
    </>
  );
}
