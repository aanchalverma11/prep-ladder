import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* Dummy page content — sirf dekhne ke liye */}
      <main style={{ maxWidth: "1200px", margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "2rem", color: "#1e1b4b", marginBottom: "1rem" }}>
          PrepLadder — Crack NEET-PG with Confidence
        </h1>
        <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
          Thanks for visit!!
        </p>
      </main>
    </div>
  );
}
