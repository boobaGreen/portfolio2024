const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Header */}
      <div className="lg:w-1/2 lg:sticky lg:top-0 overflow-hidden bg-gray-900 text-white p-4 lg:z-10 h-screen">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Nome del Programmatore</h1>
            <p>Posizione / Ruolo</p>
          </div>
          <div className="lg:text-right mt-4 lg:mt-0">
            <p>Email: email@example.com</p>
            <p>Telefono: 123-456-7890</p>
          </div>
        </div>
        {/* Altri dettagli del programmatore */}
        <div className="mt-4">
          <p>Altri dettagli qui...</p>
        </div>
      </div>

      {/* Contenuto */}
      <div className="lg:w-1/2 lg:overflow-y-auto p-4">
        {/* Inserisci qui il resto del contenuto */}
        <h1 className="text-2xl font-bold">Contenuto Principale</h1>
        {/* Più contenuto... */}
        <p>Altri dettagli qui...</p>
        {/* Aggiungi più contenuto... */}
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>

        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>
        <p>Altri dettagli qui...</p>

        <p>Altri dettagli qui...</p>
      </div>
    </div>
  );
};

export default MainPage;
