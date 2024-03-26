import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'accentViolet':{
        100:'#6D5CBC',
        200:'#6D5CBC0D',
        300:'#6D5CBC26',
        400:'#6D5CBC',
        500: '#6D5CBC',
      },
      'accentEmerald': {
        100:'#49BD8805',
        200:'#49BD8808',
        300:'#49BD880D',
        400:'#49BD881A',
        500:'#49BD88',
      }, 
      'black': {
        100:'#00000005',
        200:'#00000008',
        300:'#0000000D',
        400:'#0000001A',
        500:'#000000',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
};
export default config;
