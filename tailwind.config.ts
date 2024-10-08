import { Card } from "@mui/material";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/component/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",

	],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					"0%": {
						transform: "translateX(0)"
					},
					"100%": {
						transform: "translateX(-50%)"
					}
				},
				typing: {
					'from': {
						width: '0'
					},
					'to': {
						width: '100%'
					}
				},
				blinkcaret: {
					'from, to': {
						borderRightColor: 'transparent'
					},
					'50%': {
						borderRightColor: 'var(--foreground)'
					}
				}
			},

			animation: {
				scroll: "scroll 15s linear infinite",
				typing: "typing 2s steps(40, end) infinite",
				blinkcaret: "blinkcaret 1s step-end infinite"
			},

			colors: {
				navbarbg: '#12143F',
				buttonbg: '#FF8215',
				cardbg: '#112F53',
				footerbg: '#476D97',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		fontFamily: {
			fira: ["Fira Code", "monospace"],
			rubik: ["Rubik", "sans-serif"],
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
