import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <main className="text-center">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-lg mb-8">
          Donix!
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 text-xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Click Me!
        </button>
      </main>
    </div>
  );
}

export default App;
