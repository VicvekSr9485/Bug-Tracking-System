import heroImage from "../assets/hero-dashboard.svg";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-28 lg:px-6">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
            Bug tracking that’s <span className="text-blue-600">fast</span>, simple, and intuitive.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Bug Tracker helps teams manage issues, collaborate seamlessly, and ship high-quality software faster. From backlog to resolution — stay in control.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Get Started Free
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Login
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroImage}
            alt="dashboard preview"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
