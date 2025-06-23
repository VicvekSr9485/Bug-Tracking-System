import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineFolderOpen, HiOutlinePlus } from "react-icons/hi";
import { Card, Spinner } from "flowbite-react";
import api from "../api/axios";
import type { Project } from "../types/Project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Projects | BugTracker";
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get<Project[]>("/api/projects");
      setProjects(res.data);
    } catch (err) {
      setError("Failed to load projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h1>
          <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
        <Link
          to="/projects/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <HiOutlinePlus className="text-lg" /> New Project
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center mt-20">
          <Spinner size="xl" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No projects found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-center gap-3 mb-2">
                <HiOutlineFolderOpen className="text-blue-600 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.name}
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
