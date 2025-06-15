module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep blue for scientific authority
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800 - Primary
          900: "#1E40AF", // blue-900
          DEFAULT: "#1E3A8A", // blue-800
        },
        // Secondary Colors - Teal for analytical balance
        secondary: {
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700 - Secondary
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
          DEFAULT: "#0F766E", // teal-700
        },
        // Accent Colors - Strategic red for critical insights
        accent: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 - Accent
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
          DEFAULT: "#DC2626", // red-600
        },
        // Background Colors
        background: "#FAFAFA", // gray-50 - Warm off-white
        surface: "#FFFFFF", // white - Pure white for containers
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800 - Near-black optimal contrast
          secondary: "#6B7280", // gray-500 - Medium gray for supporting info
        },
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600 - Success
          DEFAULT: "#059669", // emerald-600
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600 - Warning
          DEFAULT: "#D97706", // amber-600
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 - Error
          DEFAULT: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Light gray for minimal borders
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        // Headings - Inter for precision and clarity
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // Body - Source Sans Pro for extended reading
        body: ['Source Sans Pro', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Captions - IBM Plex Sans for technical aesthetic
        caption: ['IBM Plex Sans', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        // Data - JetBrains Mono for code and technical specs
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'scientific-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'scientific-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'scientific-lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'scientific-xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
        'data-point': '0 2px 8px rgba(30, 58, 138, 0.15)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'scientific': '6px',
        'scientific-sm': '4px',
        'scientific-lg': '8px',
        'scientific-xl': '12px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'micro': 'ease-out',
        'smooth': 'ease-in-out',
        'scientific': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
        'data-point': 'dataPoint 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        skeleton: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        dataPoint: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'scientific': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'scientific': '1200px',
        'content': '65ch',
      },
      zIndex: {
        'modal': '50',
        'overlay': '40',
        'dropdown': '30',
        'sticky': '20',
        'fixed': '10',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.transition-micro': {
          transition: 'all 200ms ease-out',
        },
        '.transition-smooth': {
          transition: 'all 300ms ease-in-out',
        },
        '.text-balance': {
          textWrap: 'balance',
        },
        '.bg-analytical': {
          background: `linear-gradient(135deg, ${theme('colors.primary.50')} 0%, ${theme('colors.secondary.50')} 100%)`,
        },
      });
      
      addComponents({
        '.card-scientific': {
          backgroundColor: theme('colors.surface'),
          borderRadius: theme('borderRadius.scientific'),
          boxShadow: theme('boxShadow.scientific-sm'),
          transition: 'box-shadow 200ms ease-out',
          '&:hover': {
            boxShadow: theme('boxShadow.scientific-md'),
          },
        },
        '.btn-scientific': {
          padding: '0.75rem 1.5rem',
          borderRadius: theme('borderRadius.scientific'),
          fontWeight: '600',
          transition: 'all 200ms ease-out',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.scientific-md'),
          },
        },
        '.input-scientific': {
          border: `1px solid ${theme('colors.border.DEFAULT')}`,
          borderRadius: theme('borderRadius.scientific'),
          padding: '0.75rem 1rem',
          backgroundColor: theme('colors.surface'),
          transition: 'border-color 200ms ease-out',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.DEFAULT'),
            boxShadow: `0 0 0 3px ${theme('colors.primary.DEFAULT')}1A`,
          },
        },
      });
    },
  ],
}