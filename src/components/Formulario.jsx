const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form className="bg-white shadow-lg rounded-lg py-10 px-5 block mb-10">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="email"
            placeholder="Email del propietario"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="date"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Descibre los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
