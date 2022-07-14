import './App.css';

function App() {
  return (<>
    {/* Navbar Header */}
    <section>
      <header>
        <nav>
          <div className="logoText">
            <h1><a href="mfaiz.social">mfaiz</a></h1>
          </div>
        </nav>
      </header>
    </section>

    {/* Hero Section */}
    <section>
      <div className="hero">
        <h3>Just Randoms (from Unsplash)</h3>
        <img src="https://source.unsplash.com/1600x900" alt="random" />
      </div>
    </section>

    {/* Footer */}
    <section>
      <footer>
        <p>mfaiz &copy; 2022</p>
        <p><a href="mailto:mfaizgr@gmail.com" className="footer">mfaizgr@gmail.com</a></p>
      </footer>
    </section>

  </>
  );
}

export default App;
