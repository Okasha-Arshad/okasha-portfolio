type ExperienceItem = {
    title: string;
    place: string;
    description: string;
    duration: string;
  };
  
  const workExperience: ExperienceItem[] = [
    {
      title: "Full Stack Engineer",
      place: "QLU.ai",
      description:
        "Working on a versatile app with chat, gestures, and streaks using Flutter, Node.js, and Firebase. Integrated features like real-time messaging, gesture-based tracking, and local caching with SQLite.",
      duration: "Mar 2023 – Present",
    },
  ];
  
  const education: ExperienceItem[] = [
    {
      title: "BS in Computer Science",
      place: "FAST NUCES",
      description: "Graduated with hands-on experience in full-stack development and AI.",
      duration: "2019 – 2024",
    },
  ];
  
  export default function Experience() {
    return (
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Experience & Education</h2>
  
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Work Experience</h3>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold">{exp.title} @ {exp.place}</h4>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-600">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold">{edu.title}</h4>
              <p className="text-sm text-gray-600">{edu.place} | {edu.duration}</p>
              <p className="text-gray-700 mt-1">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  