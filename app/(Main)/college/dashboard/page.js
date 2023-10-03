import "./dashboard.css";
export default async function DashboardPage() {
  
  return (
    <>
      <h1>General Stats</h1>
      <div className="stats shadow mm m-25  w-fit">
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
