import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I am a stateful class component!" name="Joe" />
      <EventsClass />
      <EventsFunctional />
    </div>
  );
}

export default App;
