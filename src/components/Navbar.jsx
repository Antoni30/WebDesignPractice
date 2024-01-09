function NavBar() {
  return (
    <nav className="flex justify-around bg-green-900 text-cyan-50 fixed w-full h-11 items-center z-10">
      <div className="flex justify-center items-center gap-1 transition hover:text-slate-600">
        <li>
          <a href="#" className="block">
            <span className="sr-only"> Home </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <strong>
          <a href="/">Home</a>
        </strong>
      </div>
      <div className="flex gap-24">
        <li className="transition hover:text-slate-600">
          <a href="">Nuestra Galeria</a>
        </li>
        <li className="transition hover:text-slate-600">
          <a href="">Eventos</a>
        </li>
        <li className="transition hover:text-slate-600">
          <a href="">Sobre Nosotros</a>
        </li>
        <li className="transition hover:text-slate-600">
          <a href="">Contactanos</a>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
