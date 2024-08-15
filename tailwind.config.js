/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primaryColor: '#0a192f',
        primaryColor: '#151925',
        // designColor:'#64ffda',
        designColor:'#00EEFE',
        lightText:'#ccd6f6',
        darkText:'#8892b0',
        hoverColor:'rgba(100,255,218,0.1)',
        textBg:'#112240'
      },
      fontFamily:{
        bodyFont:['Montserrat' , 'sans-serif']
      }
    },
  },
  plugins: [],
}