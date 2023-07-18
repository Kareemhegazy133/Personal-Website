import AppBar from './components/AppBar/AppBar';
import { CssBaseline } from '@mui/material';
import Home from './views/Home/Home';
import AboutMe from './views/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <AppBar />
      <main>
        <section>
          {/* Content of the About Me section */}
          <Home />
        </section>
        <section>
          {/* Content of the About Me section */}
          <AboutMe />
        </section>
      </main>
    </div>
  );
}

export default App;