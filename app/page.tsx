import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Expertises from "./components/Expertises/Expertises";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Expertises />
      <Info />
      <Contact />
    </div>
  );
}
