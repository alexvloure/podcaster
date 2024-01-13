import './App.css';
import { Routing } from '@/routes/Routing';
import { AppProviders } from '@/lib/providers';

function App() {
  return (
    <AppProviders>
      <Routing />
    </AppProviders>
  );
}

export default App;
