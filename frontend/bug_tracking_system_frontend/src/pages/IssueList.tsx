import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../api/axios";
import { Spinner, Alert } from "flowbite-react";

interface Issue {
  id: number;
  title: string;
  status: string;
  priority: string;
  projectName: string;
}

export default function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = "Issues | BugTrackr";
    fetchIssues();
  }, []);

  useEffect(() => {
    if (location.state?.created) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [location.state]);

  const fetchIssues = async () => {
    try {
      const response = await api.get("/api/issues");
      setIssues(response.data as Issue[]);
    } catch (err) {
      setError("Failed to load issues. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">All Issues</h2>
        <div>
          <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
        <Link
          to="/issues/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Issue
        </Link>
      </div>

      {showSuccess && (
        <Alert color="success" className="mb-4">
          ✅ Issue created successfully.
        </Alert>
      )}

      {loading && (
        <div className="flex justify-center mt-10">
          <Spinner size="xl" />
        </div>
      )}

      {error && (
        <Alert color="failure" className="mb-4">
          {error}
        </Alert>
      )}

      {!loading && issues.length === 0 && (
        <p className="text-gray-500 dark:text-gray-300">No issues found.</p>
      )}

      <ul className="divide-y dark:divide-gray-700">
        {issues.map((issue) => (
          <li
            key={issue.id}
            className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
          >
            <Link to={`/issues/${issue.id}`} className="text-lg font-medium text-blue-600 hover:underline">
              {issue.title}
            </Link>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">{issue.status}</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">{issue.priority}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{issue.projectName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
