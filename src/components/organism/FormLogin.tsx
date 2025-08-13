import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import FormInputWithicon from "../atoms/form/FormInputTextWithIcon";
import ForminputWithouticon from "../atoms/form/FormInputTextWithoutIcon";
import BtnSecondaryWithouticon from "../atoms/button/BtnSecondaryWithoutIcon";
import BtnTertiaryWithicon from "../atoms/button/BtnTertiaryWithIcon";
import useAuthStore from "../../store/authstore";

const LoginForm = () => {
  const { login, isLoading } = useAuthStore();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "identifier") {
      setIdentifier(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier && !password) {
      setError({
        identifier: "Silakan isi Username atau Email.",
        password: "Silakan isi Password.",
      });
    } else if (!identifier) {
      setError({
        identifier: "Silakan isi Username atau Email.",
        password: "",
      });
    } else if (!password) {
      setError({
        identifier: "",
        password: "Silakan isi Password.",
      });
      
    } else {
      setError({ identifier: "", password: "" });
      try {
        await login(identifier, password);
        navigate("/");
      } catch (err) {
        toast.error("Login gagal: " + (err as Error));
      }
      setError({
        identifier: "",
        password: "",
      });
    }
  };

  return (
    <form className="max-w-md mx-auto m-6" onSubmit={handleSubmit}>
      <ToastContainer theme="dark" />
      <div className="flex flex-col items-center gap-2 mb-8">
        <Link to="/">
          <img
            src="assets/Logo-Horizon.png"
            alt="Chill Movie"
            className="mb-6"
          ></img>
        </Link>
        <h1 className="text-white text-4xl font-medium font-myfont">Masuk</h1>
        <span className="text-white text-lg font-normal font-myfont">
          Silahkan Masuk
        </span>
      </div>
      <div className="mb-4">
        <ForminputWithouticon
          label="Username"
          id="identifier"
          name="identifier"
          type="text"
          placeholder="Masukan Username / Email Address"
          onChange={handleChange}
          value={identifier}
        />
        {error.identifier && (
          <p className="text-red-500 text-sm font-normal">{error.identifier}</p>
        )}
      </div>

      <div className="mb-4">
        <FormInputWithicon
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Masukan Password"
          onChange={handleChange}
          value={password}
        />
        {error.password && (
          <p className="text-red-500 text-sm font-normal">{error.password}</p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-base font-normal font-myfont">
          Belum Punya Akun?
          <Link
            to="/Register"
            className="text-white text-base font-bold font-myfont"
          >
            Daftar
          </Link>
        </span>

        <Link
          to="/forgotPassword"
          className="text-white text-base font-medium font-myfont"
        >
          Lupa Kata Sandi?
        </Link>
      </div>
      <div className="flex flex-col items-center gap-6">
        <BtnSecondaryWithouticon
          className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full bg-secondary cursor-pointer text-sm font-medium font-myfont mt-12"
          label={isLoading ? <>Loading</> : "Masuk"}
          type="submit"
        />
        <span className="text-gray-400 text-base font-normal">Atau</span>
        <BtnTertiaryWithicon
          className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full border border-gray-700 cursor-pointer text-sm font-medium font-myfont"
          label="Masuk Dengan Google"
          type="button"
        />
      </div>
    </form>
  );
};

export default LoginForm;
