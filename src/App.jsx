import "./App.css";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Sistema de Feedback</h1>
        <p>Deixe sua opinião abaixo</p>
      </header>

      <FeedbackForm />
    </main>
  );
}

export default App;
