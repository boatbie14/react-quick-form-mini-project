import { TbMovie } from "react-icons/tb";

function FormHeader() {
  return (
    <>
      <div className="p-6 flex items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 text-2xl text-white font-semibold">
        <TbMovie color="white" /> Movie Survey
      </div>
    </>
  );
}

export default FormHeader;
