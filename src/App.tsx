import { Navbar } from "./components/Navbar";
import { Popular } from "./components/Popular";

export const App = () => {
  return (
    <main className="background w-full h-screen">
      <Navbar />
      <Popular />
    </main>
  );
};
