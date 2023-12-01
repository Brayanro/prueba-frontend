import banner from "../assets/banner.png";
import { Form } from "../components/Form";

export const Login = () => {
  return (
    <main className="background lg:flex lg:flex-row w-full h-screen">
      <section className="lg:w-1/3">
        <Form />
      </section>
      <section
        className="hidden lg:block lg:w-2/3 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      />
    </main>
  );
};
