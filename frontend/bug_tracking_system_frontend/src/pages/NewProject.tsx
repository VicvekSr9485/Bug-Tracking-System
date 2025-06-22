import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "flowbite-react";
import api from "../api/axios";

export default function NewProject() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "" });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const isFormValid = form.name.trim() !== "" && form.description.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isFormValid) {
      setError("Both fields are required.");
      return;
    }

    try {
      await api.post("/api/projects", form);
      setShowToast(true);
      setTimeout(() => navigate("/projects"), 1500); // Navigate after short delay
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to create project.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded shadow relative">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create New Project
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          ></textarea>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            disabled={!isFormValid}
          >
            Create Project
          </button>
        </form>

        {showToast && (
          <div className="absolute top-4 right-4">
            <Toast>
              <div className="text-sm font-medium text-green-600">
                Project created successfully!
              </div>
            </Toast>
          </div>
        )}
      </div>
    </div>
  );
}
