import About from "./About/About";
import Expertises from "./components/Expertises/Expertises";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Landing />
      <Expertises />
    </div>
  );
}
