import './styles/App.css';
import './styles/global.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import SiteFooter from '@/components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
