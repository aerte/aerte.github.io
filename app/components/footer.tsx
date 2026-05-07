function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 text-slate-600 dark:text-slate-600">
        © {new Date().getFullYear()} Felix Aertebjerg. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-slate-400">
        Font: <a href="https://departuremono.com" className="underline hover:text-slate-600" target="_blank" rel="noopener noreferrer">Departure Mono</a>
      </p>
    </footer>
  )
}
