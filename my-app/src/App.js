import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditonalRenderingClass from './components/ConditonalRenderingClass';
import ConditonalRenderingFunctional from './components/ConditonalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I am a stateful class component!" name="Joe" />
      <EventsClass />
      <EventsFunctional />
      <EventBinding /> 
      <ConditonalRenderingClass />
      <ConditonalRenderingFunctional connected={false}/>
      <NestingComponents />
      <MethodsAsPropsParent />*/}
      <RenderingLists />
    </div>
  );
}

export default App;
