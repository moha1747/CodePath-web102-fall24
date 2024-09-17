import "./App.css";
import Calendar from "./components/Calendar";


const App = () => {
  return (
    <div className="App">
      <h1>Itenaray for 7 days in Minneapolis 🏙️</h1>
      <h2>
        Welcome to Minneapolis, User! Check out this calendar to get to know this
        city and see all the sights during your stay.
      </h2>
      <Calendar />
    </div>
  );
};

export default App;
