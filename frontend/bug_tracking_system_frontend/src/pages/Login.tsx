import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", form);
      const data = response.data as { token: string };
      login(data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.error || "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Mobile Image - Only visible on small screens */}
      <div className="md:hidden w-full bg-blue-100 py-8 flex items-center justify-center">
        <img 
          src="/Login.svg" 
          alt="Login Illustration" 
          className="w-4/5 max-w-xs h-auto"
        />
      </div>
      
      <div className="flex flex-1">
        {/* Desktop Image - Only visible on medium screens and larger */}
        <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center p-8">
          <img 
            src="/Login.svg" 
            alt="Login Illustration" 
            className="w-full max-w-md h-auto"
          />
        </div>
        
        {/* Form Section - Visible on all screens */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 relative">
          <div className="absolute top-4 left-4">
            <Link to="/" className="text-sm text-blue-600 hover:underline flex items-center">
              ← Home
            </Link>
          </div>
          
          <div className="max-w-md w-full mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Login to BugTracker
            </h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-sm text-red-600 rounded-md text-center">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </form>
            
            <p className="text-sm text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}