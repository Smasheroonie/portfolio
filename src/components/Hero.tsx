import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center py-12 md:py-24 lg:py-32 space-y-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Hi, I'm Luke Gon&#231;alves
      </h1>
      <div className="h-1 w-8 rounded-full bg-primary"></div>
      <p className="text-lg font-medium">Software Developer</p>
      <div className="h-1 w-8 rounded-full bg-primary"></div>
      <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
        I craft responsive websites and robust applications that provide
        seamless user experiences. Specializing in development with React,
        TypeScript, SQL, C# and .NET.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex justify-center items-center"
          >
            <span className="font-bold">View Projects</span>{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex gap-4">
          <Button>
            <a
              href="https://github.com/Smasheroonie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button>
            <a
              href="https://www.linkedin.com/in/lukenunogoncalves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
