import { useState} from "react";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import FormInputWithicon from "../atoms/form/FormInputTextWithIcon";
import ForminputWithouticon from "../atoms/form/FormInputTextWithoutIcon";
import BtnSecondaryWithouticon from "../atoms/button/BtnSecondaryWithoutIcon";
import BtnTertiaryWithicon from "../atoms/button/BtnTertiaryWithIcon";
import useUserChillStore from "../../store/userStore";


const RegisterForm = () => {
  const { register,isLoading , user } = useUserChillStore();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = userData;

    if (
      !userData.username &&
      !userData.email &&
      !userData.password &&
      !userData.konfirmasiPassword
    ) {
      setError((prev) => ({
        ...prev,
        username: "Silahkan isi username.",
        email: "Silahkan isi email.",
        password: "Silahkan isi password.",
        konfirmasiPassword: "Silahkan isi konfirmasi password."
      }));

      return;
    } else if (
      user.some(
        (user: { username: string }) => user.username === userData.username
      )
    ) {
      return setError((prev) => ({
        ...prev,
        username: "Username sudah digunakan.",
      }));
    } else if (
      user.some((user: { email: string }) => user.email === userData.email)
    ) {
        return setError((prev) => ({
        ...prev,
        email: "Email sudah digunakan.",
      }));
    } else if (!userData.email) {
      return setError((prev) => ({
        ...prev,
        email: "Silahkan isi email.",
      }));
    } else if (!userData.password) {
          return setError((prev) => ({
        ...prev,
        password: "Silahkan isi password.",
      }));
    } else if (userData.password.length < 6) {
         return setError((prev) => ({
        ...prev,
        password: "Password kurang dari 6 karakter.",
      }));
    } else if (userData.password !== userData.konfirmasiPassword) {
        return setError((prev) => ({
        ...prev,
        konfirmasiPassword: "Konfirmasi password dan password harus sama.",
      }));
    } else {
      try {
        await register({ username, email, password });
        toast.success("Pendaftaran Berhasil");
        setUserData({
          username: "",
          email: "",
          password: "",
          konfirmasiPassword: "",
        });
      } catch (err: unknown) {
        toast.error("Pendaftaran gagal: " + err);
        console.log(err);
      }
      setError({
        username: "",
        email: "",
        password: "",
        konfirmasiPassword: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-4">
      <ToastContainer theme="dark" />
      <div className="flex flex-col items-center gap-2 mb-4">
        <Link to="/">
          <img
            src="assets/Logo-Horizon.png"
            alt="Chill Movie"
            className="mb-4"
          ></img>
        </Link>
        <h1 className="text-white text-4xl font-medium font-myfont">Daftar</h1>
        <span className="text-white text-lg font-normal font-myfont">
          Selamat Datang!
        </span>
      </div>
      <div className="mb-4">
        <ForminputWithouticon
          label="Username"
          id="username"
          name="username"
          type="text"
          placeholder="Masukan Username"
          value={userData.username}
          onChange={handleChange}
        />
        {error.username && (
          <small className="text-red-500 text-sm font-normal">
            {error.username}
          </small>
        )}
      </div>
      <div className="mb-4">
        <ForminputWithouticon
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Masukan Email"
          value={userData.email}
          onChange={handleChange}
        />
        {error.email && (
          <small className="text-red-500 text-sm font-normal">
            {error.email}
          </small>
        )}
      </div>
      <div className="mb-4">
        <FormInputWithicon
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Masukan Password"
          value={userData.password}
          onChange={handleChange}
        />
        {error.password && (
          <small className="text-red-500 text-sm font-normal">
            {error.password}
          </small>
        )}
      </div>

      <div className="mb-4">
        <FormInputWithicon
          label="Konfirmasi Password"
          id="konfirmasi-password"
          name="konfirmasiPassword"
          type="password"
          placeholder="Konfirmasi Password"
          value={userData.konfirmasiPassword}
          onChange={handleChange}
        />
        {error.konfirmasiPassword && (
          <small className="text-red-500 text-sm font-normal">
            {error.konfirmasiPassword}
          </small>
        )}
      </div>

      <div className="flex items-center">
        <span className="text-gray-400 text-base font-normal font-myfont">
          Sudah Punya Akun?
          <Link
            to="/Login"
            className="text-white text-base font-bold font-myfont"
          >
            Masuk
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <BtnSecondaryWithouticon
          className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full bg-secondary cursor-pointer text-sm font-medium font-myfont mt-4"
          label={
  isLoading ? (
    <>
    Loading
    </>
  ) : (
    "Daftar"
  )}
          type="submit"
        />
        <span className="text-gray-400 text-base font-normal">Atau</span>
        <BtnTertiaryWithicon
          className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full border border-gray-700 cursor-pointer text-sm font-medium font-myfont"
          label="Daftar Dengan Google"
          type="button"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
