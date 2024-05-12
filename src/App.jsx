import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
