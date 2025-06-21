import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Bug Tracking System 🐞
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A minimal yet powerful issue tracking tool, inspired by JIRA — built for teams that want to move fast and stay organized.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
