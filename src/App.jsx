import Nav from "./Components/nav";
import OurServices from "./Components/OurServices";
import Footer from "./Components/footer";

function App() {
  return (
    <main>
      <section className="p-12">
        <Nav />
      </section>
      <section>
        <OurServices />
      </section>
      <footer className="mt-[4rem]">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
