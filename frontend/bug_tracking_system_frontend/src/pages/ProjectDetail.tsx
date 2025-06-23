import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { Card, Spinner, Alert } from "flowbite-react";
import api from "../api/axios";

interface Project {
  id: number;
  name: string;
  description: string;
}

interface Issue {
  id: number;
  title: string;
  status: string;
  priority: string;
  projectId?: number;
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = `Project ${id} | BugTracker`;
    if (id) fetchData(id);
  }, [id]);

  const fetchData = async (projectId: string) => {
    try {
      const [projectRes, allIssues] = await Promise.all([
        api.get(`/api/projects/${projectId}`),
        api.get("/api/issues"),
      ]);

      setProject(projectRes.data as Project);

      const filteredIssues = (allIssues.data as Issue[]).filter(
        (i) => i.projectId?.toString() === projectId
      );
      setIssues(filteredIssues);
    } catch (err) {
      console.error(err);
      setError("Failed to load project. Access denied or project not found.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="p-6">
        <Alert color="failure">{error || "Project not found."}</Alert>
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {project.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        Issues
      </h2>

      {issues.length === 0 ? (
        <p className="text-gray-500">No issues found for this project.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <Card key={issue.id}>
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineBugAnt className="text-red-500 text-xl" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {issue.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Status:</strong> {issue.status}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Priority:</strong> {issue.priority}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
