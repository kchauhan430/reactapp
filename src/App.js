import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import MainContent from './MainContent.js';


function App() {
  return (
    <div className="App">
          <Header />
          <MainContent />
          <Footer />
    </div>
  );
}

export default App;