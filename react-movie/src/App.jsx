
import { useState } from "react";
import Search from "./components/search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper"></div>
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find the <span className="text-gradient">Movies</span> You'll Enjoy without any Hussle </h1>
      </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </main>
  )
}

export default App
