import heroImage from "../assets/hero-dashboard.svg";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
              Bug tracking that's <span className="text-blue-600">fast</span>, simple, and intuitive.
            </h1>
            <p className="mb-6 text-base sm:text-lg font-light text-gray-500 lg:mb-8 lg:text-xl dark:text-gray-400">
              Bug Tracker helps teams manage issues, collaborate seamlessly, and ship high-quality software faster. From backlog to resolution — stay in control.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/register"
                className="px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200"
              >
                Get Started Free
              </a>
              <a
                href="/login"
                className="px-6 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200"
              >
                Login
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={heroImage}
              alt="dashboard preview"
              className="rounded-xl shadow-lg w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}