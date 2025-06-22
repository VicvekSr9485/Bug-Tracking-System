import type { Config } from 'tailwindcss';
import flowbiteReact from 'flowbite-react/plugin/tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
};

export default config;
