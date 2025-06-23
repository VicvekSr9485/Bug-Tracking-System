import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import { Card, Button } from "flowbite-react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import type { Project } from "../types/Project";
import type { Issue } from "../types/Issue";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    document.title = "Dashboard | BugTrackr";
    if (!user) navigate("/login");
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const [projectsRes, issuesRes] = await Promise.all([
        api.get<Project[]>("/api/projects"),
        api.get<Issue[]>("/api/issues"),
      ]);
      setProjects(projectsRes.data);
      setIssues(issuesRes.data);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    }
  };

  const issueCounts = {
    open: issues.filter((i) => i.status === "Open").length,
    inProgress: issues.filter((i) => i.status === "In Progress").length,
    closed: issues.filter((i) => i.status === "Closed").length,
  };

  const recentIssues = issues.slice(0, 5);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome back, {user?.username} 👋
        </h1>
        <div className="flex gap-2">
          <Link
            to="/"
            className="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Home
          </Link>
          <Button color="red" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        <Card>
          <h3 className="text-lg">Projects</h3>
          <p className="text-3xl">{projects.length}</p>
        </Card>
        <Card>
          <h3 className="text-lg">Open</h3>
          <p className="text-3xl">{issueCounts.open}</p>
        </Card>
        <Card>
          <h3 className="text-lg">In Progress</h3>
          <p className="text-3xl">{issueCounts.inProgress}</p>
        </Card>
        <Card>
          <h3 className="text-lg">Closed</h3>
          <p className="text-3xl">{issueCounts.closed}</p>
        </Card>
      </div>

      <div className="mb-10">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl text-blue-600">Recent Issues</h2>
          <Link to="/issues" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="space-y-4 text-yellow-200">
          {recentIssues.map((issue) => (
            <Card key={issue.id}>
              <h4 className="text-lg font-semibold">{issue.title}</h4>
              <p className="text-gray-200">
                Project: {issue.projectName} · Priority: {issue.priority} · Status:{" "}
                {issue.status}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <Link
          to="/projects"
          className="flex gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          <HiOutlinePlus /> Create Project
        </Link>
        <Link
          to="/issues"
          className="flex gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100"
        >
          <HiOutlinePlus /> Add Issue
        </Link>
      </div>
    </div>
  );
}
