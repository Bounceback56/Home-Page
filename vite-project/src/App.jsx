import { useState } from "react";
import  Header  from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
    const [searchText,setsearchText]=useState("");
    const handleChange = (e) => {
        setsearchText(e.target.value);
    };

  return (
    <>
      <Header searchText={searchText} handleChange={handleChange}/>
      <Body searchText={searchText}/>
      <Footer />
    </>
  )
}

export default App
