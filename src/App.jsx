import Navbar from "./ReUsable/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section id="home" className="p-10 text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
      </section>
    </div>
  );
}

export default App;