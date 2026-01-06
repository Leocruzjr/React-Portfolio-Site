import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

function App() {
  return <div className={styles.App}>
    <NavBar />
    <Hero />
    <Experience />
    <Projects />
    <About />
    <Contact />
  </div>
}

export default App

