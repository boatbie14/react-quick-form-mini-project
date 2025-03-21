import { useState } from "react";
import FormResult from "./FormResult";
import { GrPowerReset } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";

function MovieForm() {
  const [formData, setFormData] = useState({ name: "", email: "", favMovie: "", comment: "" });
  const [errorFields, setErrorFields] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleReset() {
    setFormData({ name: "", email: "", favMovie: "", comment: "" });
    setErrorFields([]);
    setSubmittedData(null);
  }

  function validForm() {
    let emptyData = Object.entries(formData)
      .filter(([key, value]) => value === "")
      .map(([key]) => key);

    if (emptyData.length > 0) {
      setErrorFields(emptyData);
      return false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const checkEmail = emailRegex.test(formData.email);

      if (checkEmail) {
        return true;
      } else {
        setErrorFields(["emailFormat"]);
        return false;
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validForm(formData);
    if (isValid) {
      setSubmittedData({ ...formData });
      setErrorFields([]);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`${submittedData !== null ? "hidden" : ""}`}>
        <div className="flex flex-col gap-10 p-6">
          {/* Name Input */}
          <div>
            <label className="text-sm font-medium" htmlFor="name">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              className={`flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm
            ${errorFields.includes("name") ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              id="name"
              placeholder="กรุณากรอกชื่อของคุณ"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errorFields.includes("name") && <div className="input-error">โปรดใส่ชื่อของคุณ</div>}
          </div>

          {/* Email Input */}
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              className={`flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:text-sm
            ${errorFields.includes("email") ? "border-red-500 focus-visible:ring-red-500" : ""}
            ${errorFields.includes("emailFormat") ? "border-red-500 focus-visible:ring-red-500" : ""}
            `}
              id="email"
              placeholder="กรุณากรอกชื่อของคุณ"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errorFields.includes("email") && <div className="input-error">โปรดใส่อีเมลของคุณ</div>}
            {errorFields.includes("emailFormat") && <div className="input-error">รูปแบบอีเมลไม่ถูกต้อง</div>}
          </div>

          {/* Radio Box */}
          <div>
            <label className="text-sm font-medium">
              เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
            </label>
            <div
              className={`select-favmovie pt-4 flex flex-col gap-4 ${
                errorFields.includes("favMovie") ? "border border-red-500 p-1 rounded-sm" : ""
              }`}
            >
              {movies.map((movie, index) => (
                <div key={movie.title} className="flex flex-row gap-4 items-center hover:bg-gray-200 px-2 py-2">
                  <input
                    type="radio"
                    id={`movie-${index}`}
                    name="favMovie"
                    value={movie.title}
                    checked={formData.favMovie === movie.title}
                    onChange={handleChange}
                    className="w-5 h-5 accent-black cursor-pointer"
                  />

                  <div>
                    <label htmlFor={`movie-${index}`} className="font-medium cursor-pointer">
                      {movie.title} ({movie.year})<p className="text-sm text-gray-500">Director: {movie.director}</p>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {errorFields.includes("favMovie") && <div className="input-error">กรุณาเลือกหนังที่คุณชอบ</div>}
          </div>

          {/* Comment Textarea */}
          <div>
            <label className="text-sm font-medium" htmlFor="comment">
              ความคิดเห็นเกี่ยวกับหนัง <span className="text-red-500">*</span>
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="comment"
              name="comment"
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
              rows="4"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        {/* Btn Container */}
        <div className="items-center flex justify-between p-6 pt-4 border-t border-[#c8c8c8]">
          <button
            className="justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground  px-4 py-3 flex items-center gap-1 cursor-pointer"
            type="button"
            onClick={handleReset}
          >
            <GrPowerReset />
            รีเซ็ต
          </button>
          <button
            className="justify-center whitespace-nowrap rounded-md text-sm px-4 py-3 bg-gradient-to-r from-purple-700 to-indigo-600 text-white flex items-center gap-1 cursor-pointer"
            type="submit"
          >
            <IoIosSend />
            ส่งแบบสำรวจ
          </button>
        </div>
      </form>
      {submittedData && <FormResult data={submittedData} onReset={handleReset} />}
    </>
  );
}

export default MovieForm;
