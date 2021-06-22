import TrackerPage from './components/tracker/TrackerPage';
import { HistoryGlobalProvider } from './components/context/history context/HistoryGlobalState';
import './App.css';

function App() {
  return (
  <HistoryGlobalProvider>
    <div className="App">
      
        <TrackerPage />
      
      </div>
    </HistoryGlobalProvider>
  );
}

export default App;
