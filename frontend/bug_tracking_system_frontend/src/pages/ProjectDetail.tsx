import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { Card } from "flowbite-react";

const dummyProject = {
  id: 1,
  name: "BugTrackr Core",
  description: "Main project for issue tracking system.",
};

const dummyIssues = [
  {
    id: 1,
    title: "Login not working",
    status: "Open",
    priority: "High",
  },
  {
    id: 2,
    title: "Sidebar misaligned on mobile",
    status: "In Progress",
    priority: "Medium",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Project ${id} | BugTrackr`;
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {dummyProject.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {dummyProject.description}
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        Issues
      </h2>

      {dummyIssues.length === 0 ? (
        <p className="text-gray-500">No issues found for this project.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dummyIssues.map((issue) => (
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
