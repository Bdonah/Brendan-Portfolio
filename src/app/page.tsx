"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaUsers, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-white text-black min-h-screen">
      {/* Profile Section */}
      <Image
        src="/brendan.jpg"
        alt="Brendan Donahue"
        width={160}
        height={160}
        className="rounded-full shadow-md mb-4"
      />
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

      {/* Education Section */}
      <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        <div>
          <p><strong>Michigan State University</strong> | B.S. in Computer Science, Business Cognate</p>
          <p>Aug 2023 – May 2027 (Expected)</p>
        </div>
        <div>
          <p><strong>Rochester Adams High School</strong></p>
          <p>Aug 2019 – June 2023</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" /> Work Experience
        </h2>

        <div>
          <h3 className="text-xl font-bold">Outdoor Design Expressions</h3>
          <p><strong>Team Member</strong> | May 2024 – Aug 2024 | Novi, MI</p>
          <ul className="list-disc pl-6">
            <li>Led a team of 7 across customer locations to meet deadlines.</li>
            <li>Maintained quality and attention to detail throughout landscaping phases.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Shake Shack</h3>
          <p><strong>Crew Member</strong> | Mar 2022 – Aug 2023 | Rochester Hills, MI</p>
          <ul className="list-disc pl-6">
            <li>Led kitchen team to fulfill 200+ orders efficiently.</li>
            <li>Trained new hires and maintained high service standards.</li>
          </ul>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section className="max-w-2xl w-full mb-8 text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaUsers className="mr-2" /> Leadership & Activities
        </h2>
        <div>
          <h3 className="text-xl font-bold">National Honor Society</h3>
          <p>Organized food, gift, and toy drives (2019–2023)</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Varsity Soccer</h3>
          <p>2022 State Champion, Team Captain, Highlander Pride Award (2019-2023)</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Imagine Software Development Club</h3>
          <p>Active member of the Imagine Software Development Club, where I developed a full-stack chatbot. Currently, I am working on a project where users can draw on their screen and adjust various aspects of the cursor, including its color, shape, and size.</p>
        </div>
      </section>

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