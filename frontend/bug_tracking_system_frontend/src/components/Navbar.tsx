// src/components/Navbar.tsx
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        <Link to="/" className="flex items-center">
          <img
            src="/favicon.png"
            className="mr-3 h-6 sm:h-9"
            alt="BugTrackr Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BugTracker
          </span>
        </Link>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Button as={Link} to="/register" className="mr-2">
          Get Started
        </Button>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
        <Link to="/projects" className="text-gray-900 dark:text-white hover:underline">Projects</Link>
        <Link to="/issues" className="text-gray-900 dark:text-white hover:underline">Issues</Link>
        <Link to="/login" className="text-gray-900 dark:text-white hover:underline">Login</Link>
        <Link to="/register" className="text-gray-900 dark:text-white hover:underline">Register</Link>
      </NavbarCollapse>
    </Navbar>
  );
}
