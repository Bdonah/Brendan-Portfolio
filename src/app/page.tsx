"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaUsers, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsJournal } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-white text-black min-h-screen">
      
  {/* Profile Section */}
    <div className="flex justify-center space-x-4 mb-8">
  <Image
    src="/headshot-smile.jpeg"
    alt="Brendan Donahue"
    width={200}
    height={160}
    className="shadow-md object-cover"
  />
  <Image
    src="/msucs-logo.jpg"
    alt="MSU CompSci"
    width={290}
    height={160}
    className="shadow-md object-cover"
  />
</div>
      <h1 className="text-4xl font-bold mb-2">Brendan Donahue</h1>
      <p className="text-lg text-gray-600 mb-4">Computer Science Student @ Michigan State University</p>

  {/* Social Links */}
  <div className="flex space-x-6 mb-6">
        <a href="https://github.com/Bdonah" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/brendandonahue10/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:donah122@msu.edu">
          <MdEmail size={28} />
        </a>
        <a href="/BrendanDonahue_Resume.pdf" download className="text-blue-500 underline text-sm flex items-center">
          Download Resume
        </a>
      </div>



  {/* Projects Section */}
  <section className="max-w-2xl w-full mb-8 text-left space-y-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" /> Projects
        </h2>
        <div>
          <h3 className="text-xl font-bold">Chatbot</h3>
          <p className="text-sm text-gray-600 mb-1">Next.js, React, TypeScript, Tailwind CSS, Ollama AI, Node.js</p>
          <p>
            Designed a responsive chatbot with a full-stack setup and AI integration. Built dynamic frontend logic and backend API interactions with optimized state management and error handling.
          </p>
          <video controls className="w-full mt-4 rounded shadow">
            <source src="/chatbot-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h3 className="text-xl font-bold">Java Weather App</h3>
          <p className="text-sm text-gray-600 mb-1">Java</p>
          <p>
            Analyzed large-scale historical weather data to identify climate trends. Created custom algorithms to compute averages and detect anomalies over time and regions.
          </p>
        </div>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-2 w-1/2 mb-6" />

  {/* Education Section */}
  <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h2>

    {/* Michigan State University */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/msu-logo.png"  
            alt="Michigan State University"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold">Michigan State University</h3>
            <p><strong>B.S. in Computer Science, Business Cognate</strong> | Aug 2023 – May 2027 (Expected)</p>
          </div>
        </div>

    {/* Rochester Adams High School */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/ahs-logo.png"  
            alt="Rochester Adams High School"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold">Rochester Adams High School</h3>
            <p>Aug 2019 – June 2023</p>
          </div>
        </div>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-2 w-1/2 mb-6" />

  {/* Work Experience Section */}
  <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" /> Work Experience
        </h2>

    {/* Outdoor Design Expressions */}
        <div className="flex items-start space-x-4 mb-4">
          <Image
            src="/grass-logo.png"
            alt="Outdoor Design Expressions"
            width={40}  
            height={40} 
            className="rounded-full"
          />
          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-bold">Outdoor Design Expressions</h3>
            <p><strong>Team Member</strong> | May 2024 – Aug 2024 | Novi, MI</p>
          </div>
        </div>
        <ul className="list-disc pl-6">
          <li>Led a team of 7 across customer locations to meet deadlines, ensuring project goals were completed on time.</li>
          <li>Provided excellent customer service, addressing client concerns and making sure projects met their expectations.</li>
          <li>Worked collaboratively with the team to maintain quality control, ensuring the landscaping was done to a high standard.</li>
          <li>Contributed to the preparation and design phase of landscaping projects by offering creative input and executing tasks efficiently.</li>
          <li>Managed inventory and ensured proper maintenance of tools and equipment, minimizing delays during project execution.</li>
        </ul>

    {/* Shake Shack */}
        <div className="flex items-start space-x-4 mb-4">
          <Image
            src="/ss-logo.png"
            alt="Shake Shack"
            width={40}  
            height={40} 
            className="rounded-full"
          />
          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-bold">Shake Shack</h3>
            <p><strong>Crew Member</strong> | Mar 2022 – Aug 2023 | Rochester Hills, MI</p>
          </div>
        </div>
        <ul className="list-disc pl-6">
          <li>Led kitchen team to fulfill 200+ customer orders daily, ensuring food quality, presentation, and timeliness.</li>
          <li>Trained new hires, providing guidance on food preparation, customer service, and maintaining cleanliness in a fast-paced environment.</li>
          <li>Handled customer inquiries and special requests with professionalism, contributing to positive customer experiences.</li>
          <li>Managed inventory control, helping to reduce waste by closely monitoring stock levels and ensuring supplies were properly stored.</li>
          <li>Collaborated with team members to optimize workflows, reduce wait times, and maintain the highest standards of food safety.</li>
        </ul>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-2 w-1/2 mb-6" />

  {/* Leadership & Activities Section */}
  <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaUsers className="mr-2" /> Leadership & Activities
        </h2>
        
    {/* National Honor Society */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/nhs-logo.png"
            alt="National Honors Society"
            width={40}  
            height={40} 
            className="rounded-full"  
          />
          <div>
            <h3 className="text-xl font-bold">National Honors Society</h3>
          </div>
        </div>

        <p className="mt-2">
          Being part of the National Honor Society was a rewarding experience where I got to lead community-driven initiatives. I helped organize food and toy drives to support local families, especially around the holidays.
        </p>

    {/* Varsity Soccer */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/ahs-logo.jpg"  
            alt="Varsity Soccer"
            width={40}  
            height={40} 
            className="rounded-full"  
          />
          <div>
            <h3 className="text-xl font-bold">Varsity Soccer Captain</h3>
          </div>
        </div>

        <p className="mt-2">
          Being part of the varsity soccer team was an important experience in my high school years. As captain during my junior and senior years, I was proud to be part of the team that won the Michigan High School State Championship in 2023. I was also honored with the Highlander Pride Award for my leadership and sportsmanship, emphasizing the importance of teamwork and dedication.
        </p>

    {/* Imagine Software Development Club */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/imagine-logo.jpg"  
            alt="Imagine Software Development Club"
            width={40}  
            height={40} 
            className="rounded-full"  
          />
          <div>
            <h3 className="text-xl font-bold">Imagine Software Development Club</h3>
          </div>
        </div>

        <p className="mt-2">
          Active member of the Imagine Software Development Club, where I developed a full-stack chatbot. Currently, I am working on a project where users can draw on their screen and adjust various aspects of the cursor, including its color, shape, and size.
        </p>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-2 w-1/2 mb-6" />

  {/* Relevant Coursework Section */}
  <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <BsJournal className="mr-2" /> Relevant Coursework
        </h2>

    {/* CSE 231 */}
        <div>
          <h3 className="text-xl font-bold">CSE 231: Introduction to Programming 1</h3>
          <p className="text-sm text-gray-600 mb-1">Python Programming</p>
          <p>
            In this course, I learned the fundamentals of programming using Python. The class focused on Python’s unique features, such as its simplicity, readability, and powerful standard libraries. I gained hands-on experience in writing clean and efficient Python code to solve various computational problems, which laid the foundation for my future projects and development skills in Python.
          </p>
        </div>

    {/* CSE 232 */}
        <div>
          <h3 className="text-xl font-bold">CSE 232: Introduction to Programming 2</h3>
          <p className="text-sm text-gray-600 mb-1">C++ Programming</p>
          <p>
            This course expanded my programming knowledge by introducing C++. I learned about C++&apos;s object-oriented principles, memory management, and its ability to work closely with system-level resources. Through this course, I gained a deeper understanding of how to write efficient code in languages with more complex syntax and memory handling than Python.
          </p>
        </div>

    {/* CSE 260 */}
        <div>
          <h3 className="text-xl font-bold">CSE 260: Discrete Structures in Computer Science</h3>
          <p className="text-sm text-gray-600 mb-1">Mathematical Foundations</p>
          <p>
            CSE 260 provided a solid foundation in discrete mathematics and its applications in computer science. Topics covered included set theory, graph theory, logic, combinatorics, and algorithms. These concepts are essential for problem-solving in algorithms and data structures, and they have equipped me with the mathematical background needed for more advanced coursework and practical applications in the field.
          </p>
        </div>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-2 w-1/2 mb-6" />

  {/* Technical Skills Section */}
    <section className="max-w-2xl w-full text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaCode className="mr-2" /> Technical Skills
        </h2>
        <div>
          <p><strong>Languages:</strong> Java, Python, C/C++, TypeScript, JavaScript, HTML/CSS</p>
          <p><strong>Frameworks:</strong> React.js, Next.js, Node.js</p>
          <p><strong>Libraries:</strong> Tailwind CSS, Ollama AI</p>
          <p><strong>Tools:</strong> Git, VS Code, Visual Studio</p>
        </div>
      </section>
    </main>
  );
}