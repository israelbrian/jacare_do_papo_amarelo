import {SpeedInsights} from "@vercel/speed-insights/react";
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>  
      <AppRouter />;
      <SpeedInsights />
    </>
  )
}

export default App;


