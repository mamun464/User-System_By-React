/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smaller-than-850': '850px',
        'greater-than-850': '850px',
      },
      colors: {
        customLoginBG: 'var(--White, #FFF)',
        purleLite: '#rgba(214, 187, 251, 1)'
        // Add more custom colors as needed
      },
      // boxShadow: {
      //   customBoxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
      //   // Add more custom box shadows as needed
      // },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },

      // Focus styles
      focus: {
        outline: 'none',
        border: '2px solid #9E7AF4', // Adjust the color as needed for valid state
        ring: '4px #dbc4fc', // Adjust the color as needed for valid state
        invalid: '2px solid #f8776d', // Adjust the color as needed for invalid state
        'invalid-ring': '4px #ffb5b0', // Adjust the color as needed for invalid state
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cbbf",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      'light', // Specify the default theme you want to use
    ],
  },
}

