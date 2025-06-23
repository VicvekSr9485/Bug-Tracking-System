import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

interface Project {
  id: number;
  name: string;
}

interface User {
  id: number;
  username: string;
}

export default function NewIssue() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Open",
    priority: "Medium",
    projectId: "",
    assigneeId: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Create Issue | BugTrackr";
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/api/projects");
      setProjects(res.data as Project[]);
    } catch (err) {
      setError("Failed to load projects.");
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get("/api/users");
      setUsers(res.data as User[]);
    } catch (err) {
      setError("Failed to load users.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title || !form.projectId || !form.assigneeId) {
      setError("Title, project and assignee are required.");
      return;
    }

    try {
      await api.post("/api/issues", {
        title: form.title,
        description: form.description,
        priority: form.priority,
        status: form.status,
        projectId: parseInt(form.projectId),
        assigneeId: parseInt(form.assigneeId),
      });

      navigate("/issues");
    } catch (err) {
      setError("Failed to create issue. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Issue</h1>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Issue Title"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          className="w-full border p-3 rounded"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          name="projectId"
          value={form.projectId}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">-- Select Project --</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <select
          name="assigneeId"
          value={form.assigneeId}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">-- Assign To --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
