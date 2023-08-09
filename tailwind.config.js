/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#6074E2',
        'money-icon': '#6D6AE4',
        'users-icon': '#F55342',
        'clients-icon': '#2DCEB7',
        'sales-icon': '#FB9540',
      },
    },
  },
  plugins: [],
}