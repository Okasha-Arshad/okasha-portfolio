export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hello, I&apos;m Okasha Arshad
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          Full Stack Engineer @ QLU.ai | Flutter & Node.js Enthusiast | CS Grad @ FAST NUCES
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/okasha-arshad-42b31324b/"
            target="_blank"
            className="text-blue-600 underline text-lg hover:text-blue-800 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Okasha-Arshad"
            target="_blank"
            className="text-gray-800 underline text-lg hover:text-gray-600 transition-all"
          >
            GitHub
          </a>
          <a
            href="mailto:okashaarshad8@gmail.com"
            className="text-red-600 underline text-lg hover:text-red-800 transition-all"
          >
            Email
          </a>
        </div>
      </section>
    );
  }
  