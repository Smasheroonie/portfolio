import { ModeToggle } from "./ui/ModeToggle";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 px-8 w-full backdrop-blur-sm">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2"
          >
            <span className="inline-block font-bold">Luke Gon&#231;alves</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4 mr-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
