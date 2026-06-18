import Navbar from "./components/Navbar";
import HelpCenter from "./components/HelpCenter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HelpCenter />
      </main>
      <Footer />
    </div>
  );
}
