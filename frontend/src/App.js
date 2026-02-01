import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Donate from "./components/Donate";

// Home Page - All sections
const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Donate />
      <Team />
      <Volunteer />
      <Blog />
      <Contact />
    </main>
  );
};

// About Page
const AboutPage = () => {
  return (
    <main className="pt-20">
      <About />
    </main>
  );
};

// Projects Page
const ProjectsPage = () => {
  return (
    <main className="pt-20">
      <Projects />
    </main>
  );
};

// Team Page
const TeamPage = () => {
  return (
    <main className="pt-20">
      <Team />
    </main>
  );
};

// Volunteer Page
const VolunteerPage = () => {
  return (
    <main className="pt-20">
      <Volunteer />
    </main>
  );
};

// Blog Page
const BlogPage = () => {
  return (
    <main className="pt-20">
      <Blog />
    </main>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
};

// Donate Page
const DonatePage = () => {
  return (
    <main className="pt-20">
      <Donate />
    </main>
  );
};

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
