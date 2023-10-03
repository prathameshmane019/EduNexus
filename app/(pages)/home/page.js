import { Banner } from "./home";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <header>
          <h1>Welcome to Integrated Platform Collaboration</h1>
        </header>

        <main>
          <section>
            <h2>About Us</h2>
            <p>
              We are a leading integrated platform collaboration provider,
              connecting teams and organizations for seamless communication and
              collaboration.
            </p>
          </section>

          <section>
            <h2>Our Services</h2>
            <ul>
              <li>Real-time Chat and Messaging</li>
              <li>File Sharing and Collaboration</li>
              <li>Project Management Tools</li>
              <li>Integration with Third-Party Apps</li>
            </ul>
          </section>

          <section>
            <h2>Get Started</h2>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Integrated Platform Collaboration</p>
        </footer>
      </div>

      <Banner />
    </>
  );
};

export default page;
