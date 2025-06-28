import LoginForm from '../components/organism/FormLogin';

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('assets/img/bg-login.jpg')" }}
    >
      <div className="bg-background/80 px-6 py-4 rounded-lg w-full max-w-md m-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
