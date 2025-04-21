const tech = [
    { name: "Flutter", emoji: "💙" },
    { name: "Node.js", emoji: "🟢" },
    { name: "Express.js", emoji: "🚂" },
    { name: "Firebase", emoji: "🔥" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "JavaScript", emoji: "💛" },
    { name: "SQLite", emoji: "🗂️" },
    { name: "Next.js", emoji: "⚡" },
    { name: "Tailwind CSS", emoji: "🌬️" },
    { name: "Git", emoji: "🔧" },
  ];
  
  export default function TechStack() {
    return (
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tech.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow text-sm font-medium text-center">
              <div className="text-3xl mb-2">{item.emoji}</div>
              {item.name}
            </div>
          ))}
        </div>
      </section>
    );
  }
  