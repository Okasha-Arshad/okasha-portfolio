type Project = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
  };
  
  const projects: Project[] = [
    {
      title: "QLU.ai Internal Tool",
      description: "A productivity tool developed using Flutter + Firebase.",
      tech: ["Flutter", "Firebase", "Provider"],
    },
    {
      title: "Chat App",
      description: "A feature-rich chat app with streaks, DMs, and room-based messaging.",
      tech: ["Flutter", "Node.js", "Socket.IO", "SQLite"],
    },
    {
      title: "Portfolio Website",
      description: "The one you’re looking at. Built using Next.js & Tailwind.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
    },
  ];
  
  export default function Projects() {
    return (
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-2">{proj.description}</p>
              <p className="text-sm text-gray-500">{proj.tech.join(", ")}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-600 text-sm underline mt-2 inline-block"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  