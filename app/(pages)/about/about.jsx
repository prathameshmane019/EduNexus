import React from "react";
import Image from "next/image";
import project from "../../src/assets/img/project.svg";
import col from "../../src/assets/img/col.svg";
import student from "../../src/assets/img/student.svg";
import feedback from "../../src/assets/img/feedback.svg";
const About = () => {
  return (
    <div className="mx-[5vw] mt-[80px]">
      <div className="flex flex-row">
        <div className="mr-[3vw] h-[20vh]"></div>

        <Image
          src={project}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="m-[80px] text-center text-xl">
         
        
  
     <p> About Our Integrated Project Submission and Collaboration Platform

      Welcome to our innovative online platform designed to empower students, colleges, and universities with seamless project submission and collaboration capabilities.  we believe in the transformative power of collaboration, and we're dedicated to simplifying and enhancing the project management and submission process for educational institutions of all sizes.
     </p> </div>
      </div>
      

      <div className="mx-[5vw] mt-[30px]">
        <div className="flex flex-row">
          <div className="m-[80px] text-center text-xl">
            <p>
              Our mission is to create a dynamic and accessible space where
              students, educators, and institutions can come together to foster
              creativity, knowledge sharing, and academic excellence. We
              envision a future where collaboration knows no bounds, and
              learning becomes a collective endeavor that transcends physical
              barriers.
            </p>
          </div>

          <div className="mr-[3vw] h-[20vh]"></div>

          <Image
            src={student}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="mx-[5vw] mt-[30px]">
        <div className="flex flex-row">
        <div className="mr-[3vw] h-[20vh]"></div>

<Image
  src={col}
  width={500}
  height={500}
  alt="Picture of the author"
/>

          <div className="m-[80px] text-center text-xl">
            <p>
            we're not just building a platform; we're building a community of learners, educators, and institutions who are passionate about collaborative learning. We invite you to join us in this exciting journey to redefine education, one project at a time.

Together, we can create a brighter future where knowledge knows no bounds and collaboration knows no limits. 
            </p>
          </div>

         
      </div>
    </div>
  

<div className="mx-[5vw] mt-[30px]">
<div className="flex flex-row">
  <div className="m-[80px] text-center text-xl">
    <p>
    Innovation: We stay at the forefront of technology trends to continuously enhance our platform, keeping it modern and adaptable to evolving educational needs.

User-Centric: We prioritize user feedback and continually improve our platform based on your needs and suggestions.

Support: Our dedicated support team is always ready to assist you with any questions or concerns you may have.

Affordability: We believe in providing accessible solutions. 
    </p>
  </div>

  <div className="mr-[3vw] h-[20vh]"></div>

  <Image
    src={feedback}
    width={500}
    height={500}
    alt="Picture of the author"
  />
</div>
</div>
</div>




   
    )
    }


export default About;
