import React from 'react';
import './TracksCard.css';

const Tracks = [
    {track:"Cyber Security", about:"Here students will delve into the critical aspects of protecting systems, networks, and data from cyber threats. They will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis, engage in hands-on projects and real-world scenarios."},
    {track:"UI/UX design", about:"Here students will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences."},
    {track:"Mobile apps development", about:"Students will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications."},
    {track:"Cloud engineering", about:"Students will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices."},
    {track:"Web development", about:"Students will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications."},
    {track:"Power Platform", about:"Students will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making."},
];

export default function TracksCard() {
  return (
    <div className="tracks-container">
      {Tracks.map((track, i) => (
        <div key={i} className="track-card">
          <h1>{track.track}</h1>
          <span></span>
          <p>{track.about}</p>
        </div>
      ))}
    </div>
  );
}
