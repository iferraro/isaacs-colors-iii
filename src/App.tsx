import { Router, Route } from "@solidjs/router";
import Index from "./pages/Index.tsx";

function App() {
  return (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
}

export default App;
