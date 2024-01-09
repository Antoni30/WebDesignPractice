
const FormularioZoologico = () => {
  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-md bg-green-200">
      <h2 className="text-2xl font-bold mb-4">Formulario de Zoologico</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre del Zoológico
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Nombre del Zoológico"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Ubicación"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="visitantes" className="block text-sm font-medium text-gray-700">
            Número de Visitantes Diarios
          </label>
          <input
            type="number"
            id="visitantes"
            name="visitantes"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Número de Visitantes Diarios"
            required
          />
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioZoologico;
