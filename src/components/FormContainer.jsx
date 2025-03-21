import FormHeader from "./FormHeader";
import MovieForm from "./MovieForm";

function FormContainer() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-md shadow-lg rounded-b-xl bg-white">
        <FormHeader />
        <MovieForm />
      </div>
    </main>
  );
}

export default FormContainer;
