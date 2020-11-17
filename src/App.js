import React from "react";
import  Header  from "./component/Header/index.js"
import Main from "./component/Main/index.js"
import Footer from "./component/Footer/index.js"


function App() {
  return (
    <div className="service_page">
      <header>
          <Header/>
      </header>
      <main>
          <Main/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
