import React from "react";

const FormPage = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-warmGray-200">
      <div className="flex flex-col items-center w-64 p-6 bg-white rounded-lg shadow h-72">
        <h1 className="text-lg font-semibold text-warmGray-600">Formulário</h1>
        <input
          type="text"
          className="w-full h-12 px-2 mt-4 mb-4 border-2 rounded border-warmGray-400 placeholder-warmGray-300"
          placeholder="Nome"
        />
        <input
          type="text"
          className="w-full h-12 px-2 mb-4 border-2 rounded border-warmGray-400 placeholder-warmGray-300"
          placeholder="E-mail"
        />
        <input
          type="text"
          className="w-full h-12 px-2 mb-4 border-2 rounded border-warmGray-400 placeholder-warmGray-300"
          placeholder="Senha"
        />
        <button
          type="submit"
          className="w-full h-12 mt-4 text-lg font-semibold text-white rounded bg-cyan-600 hover:bg-cyan-700">
          Enviar
        </button>
      </div>
    </main>
  );
};

export default FormPage;
