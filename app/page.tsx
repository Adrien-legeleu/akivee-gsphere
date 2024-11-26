import About from "./components/About/About";
import Expertises from "./components/Expertises/Expertises";
import Header from "./components/Header/Header";
import Info from "./components/Info.tsx/info";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Expertises />
      <Info />
    </div>
  );
}
