
import { useState } from "react";
import Search from "./components/search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper"></div>
      <header className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/hero.bg.png')" }}
>
  <img
    src="/hero.png"
    alt="Hero Banner"
    className="relative z-10"
  />

  <h1 className="relative z-10 text-white text-4xl text-center">
    Find the <span className="text-gradient">Movies</span> You'll Enjoy without any Hussle
  </h1>
</header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="text-white">{searchTerm}</h1>
    </main>
  )
}

export default App
