import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Alert } from "flowbite-react";
import api from "../api/axios";

interface IssueDetail {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  projectName: string;
}

export default function IssueDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<IssueDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    fetchIssue();
  }, [id]);

  const fetchIssue = async () => {
    try {
      const res = await api.get(`/api/issues/${id}`);
      setIssue(res.data as IssueDetail);
    } catch (err: any) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError("Access denied. Please login again.");
      } else {
        setError("Failed to fetch issue. Please try again.");
      }
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

  if (error) {
    return (
      <div className="p-6">
        <Alert color="failure">{error}</Alert>
      </div>
    );
  }

  if (!issue) return null;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back to Issues
      </button>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{issue.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{issue.description}</p>

      <ul className="space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Status:</strong> {issue.status}</li>
        <li><strong>Priority:</strong> {issue.priority}</li>
        <li><strong>Assignee:</strong> {issue.assignee}</li>
        <li><strong>Project:</strong> {issue.projectName}</li>
      </ul>
    </div>
  );
}
