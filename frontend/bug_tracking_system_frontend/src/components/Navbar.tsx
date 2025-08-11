import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <Link to="/">
        <NavbarBrand className="flex items-center">
          <img
            src="/favicon.png"
            className="mr-3 h-8 sm:h-9"
            alt="BugTracker Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BugTracker
          </span>
        </NavbarBrand>
      </Link>
      <div className="flex md:order-2 items-center">
        <Button as={Link} to="/register" size="sm" className="mr-2 md:mr-3 md:text-base">
          Get Started
        </Button>
        <Button as={Link} to="/login" size="sm" color="light" className="mr-2 md:hidden">
          Login
        </Button>
        <NavbarToggle 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        />
      </div>
      <NavbarCollapse className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link 
          to="/" 
          className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent rounded md:hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent rounded md:hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link 
          to="/issues" 
          className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent rounded md:hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Issues
        </Link>
        <Link 
          to="/login" 
          className="hidden md:block py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent rounded md:hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="block md:hidden py-2 px-3 md:p-0 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent rounded md:hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}