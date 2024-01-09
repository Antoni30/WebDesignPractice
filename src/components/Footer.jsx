const Footer = () => {
  return (
    <section id="footer" className="mt-4 bg-green-950 text-yellow-50">
      <div className="container text-center text-md-start">
        {/* Grid row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {/* Grid column */}
          <div className="mb-4">
            {/* Content */}
            <h6 className="text-uppercase font-bold mb-4">
              <i className="fas fa-gem me-3"></i>Sobre Nosotros
            </h6>
            <p className="justify-center">
              Bienvenido a Zoo Park, un refugio dedicado a la maravilla de la
              vida salvaje y a la promoción de la conservación y educación
              ambiental. Desde nuestra apertura nos hemos comprometido a
              proporcionar una experiencia única que celebre la diversidad de
              la fauna y contribuya a la comprensión y preservación de nuestro
              precioso planeta.
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-bold mb-4">Secciones de Animales</h6>
            <p><a href="#!" className="text-green-500">Leones</a></p>
            <p><a href="#!" className="text-green-500">Elefantes</a></p>
            <p><a href="#!" className="text-green-500">Lobos</a></p>
            <p><a href="#!" className="text-green-500">Monos</a></p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-bold mb-4">Documentos</h6>
            <p><a href="#!" className="text-green-500">Conducta Zoo Park</a></p>
            <p><a href="#!" className="text-green-500">Términos y Condiciones</a></p>
            <p><a href="#!" className="text-green-500">Políticas</a></p>
            <p><a href="#!" className="text-green-500">Donaciones</a></p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-bold mb-4">Contáctanos</h6>
            <p><i className="fas fa-home me-3"></i> Sangolquí, Ecuador.</p>
            <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
            <p><i className="fas fa-phone me-3"></i> +593 099932135</p>
            <p><i className="fas fa-print me-3"></i> +593 097665431</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    /* Section: Links */
  );
};

export default Footer;
