import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const FormPage = () => {
  const { register, handleSubmit, errors, clearErrors } = useForm<FormData>();

  const formSubmit = (formData: FormData) => {
    console.log(formData);
    clearErrors();
  };
  console.log(errors);
  return (
    <main className="flex items-center justify-center h-screen bg-warmGray-200">
      <div className="flex flex-col items-center w-64 p-6 bg-white rounded-lg shadow">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-lg font-semibold text-warmGray-600">
            Formulário
          </h1>
          <input
            ref={register({ required: true })}
            type="text"
            name="name"
            className={`w-full h-12 px-2 mb-4 border-2 rounded border-${
              !errors.name ? "warmGray" : "red"
            }-400 placeholder-warmGray-300`}
            placeholder="Nome"
          />
          <input
            ref={register({ required: true })}
            type="text"
            name="email"
            className={`w-full h-12 px-2 mb-4 border-2 rounded border-${
              !errors.email ? "warmGray" : "red"
            }-400 placeholder-warmGray-300`}
            placeholder="E-mail"
          />
          <input
            ref={register({
              required: true,
              minLength: { value: 6, message: "Tamanho mínimo é 6" },
            })}
            type="password"
            name="password"
            className={`w-full h-12 px-2 mb-4 border-2 rounded border-${
              !errors.password ? "warmGray" : "red"
            }-400 placeholder-warmGray-300`}
            placeholder="Senha"
          />
          <button
            type="submit"
            className="w-full h-12 mt-4 text-lg font-semibold text-white rounded bg-cyan-600 hover:bg-cyan-700">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default FormPage;
