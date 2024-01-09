function Visit() {
    return ( <>
     <div className="max-w-2xl mx-auto p-8 bg-green-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Horarios de Visita al Zoológico</h1>

      <ul className="divide-y divide-gray-300">
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Lunes</span>
          <span className="text-lg">9:00 AM - 5:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Martes</span>
          <span className="text-lg">9:00 AM - 5:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Miércoles</span>
          <span className="text-lg">9:00 AM - 5:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Jueves</span>
          <span className="text-lg">9:00 AM - 8:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Viernes</span>
          <span className="text-lg">9:00 AM - 8:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Sábado</span>
          <span className="text-lg">10:00 AM - 6:00 PM</span>
        </li>
        <li className="py-2 flex justify-between items-center">
          <span className="text-lg">Domingo</span>
          <span className="text-lg">10:00 AM - 6:00 PM</span>
        </li>
      </ul>
    </div>
    </> );
}

export default Visit;