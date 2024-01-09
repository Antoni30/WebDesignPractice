const ProximosEventos = () => {
  return (
    <section id="eventos" className="m-8 p-8 rounded-md border border-green-800">
      <h2 className="text-center text-2xl font-bold mb-4">Próximos Eventos</h2>

      {/* Lista de eventos */}
      <ul className="divide-y divide-gray-300">
        <li className="py-4">
          <h4 className="text-lg font-bold">Día de Educación Ambiental</h4>
          <p className="mb-2"><strong>Fecha:</strong> 15 de Enero</p>
          <p>
            <strong>Actividades:</strong> Charlas programadas durante todo el
            día, presentaciones cada hora y actividades interactivas para los
            visitantes.
          </p>
        </li>

        <li className="py-4 flex flex-row-reverse">
          <h4 className="text-lg font-bold">Festival de Arte y Naturaleza</h4>
          <p className="mb-2"><strong>Fecha:</strong> 5 al 7 de febrero</p>
          <p>
            <strong>Actividades:</strong> Exposición de arte durante todo el fin
            de semana, talleres de arte diarios, presentaciones de música y
            danza al aire libre.
          </p>
        </li>

        <li className="py-4">
          <h4 className="text-lg font-bold">Ciclo de Conferencias Científicas</h4>
          <p className="mb-2"><strong>Fecha:</strong> 8 al 12 de abril</p>
          <p>
            <strong>Actividades:</strong> Conferencias diarias a cargo de
            expertos en biología, ecología y conservación, con tiempo para
            preguntas y respuestas del público.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ProximosEventos;
