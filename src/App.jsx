import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Experience } from "./components/Experience/Experience";

function App() {
  return <div className={styles.App}>;
    <NavBar />;
    <Hero />;
    <About />;
    <Experience />;
  </div>;
}

export default App

