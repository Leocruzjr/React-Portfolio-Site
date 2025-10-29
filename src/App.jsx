import styles from "./App.module.css";
import { About } from "./components/NavBar/About/About";
import { Hero } from "./components/NavBar/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return <div className={styles.App}>
    <NavBar />
    <Hero />
    <About />
  </div>;
}

export default App

