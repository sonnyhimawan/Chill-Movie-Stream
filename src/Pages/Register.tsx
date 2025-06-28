import RegisterForm from '../components/organism/FormRegister';

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('assets/img/bg-register.jpg')" }}
    >
      <div className="bg-background/80 px-6 py-4 rounded-lg w-full max-w-md m-4">
                <RegisterForm />
        </div>

      
    </div>
  );
};

export default Register;
