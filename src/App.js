import {Introduction} from "./pages/Introduction"
import { Timeline } from "./pages/Timeline"

function App() {
  return (
    <div>
        <Introduction />
        <div style={{width:"90vw",height:"100vh"}}><Timeline /></div>
    </div>
  );
}

export default App;
