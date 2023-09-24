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
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequest from './components/HTTPRequest';
import HTPPPost from './components/HTPPPost';

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
      <MethodsAsPropsParent />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForm />
      <SearchBar />
      <ControlledFormHooks />
      <UseStateWithArrays />
      <UseStateWithObjects />
      <UseEffectCounter />
      <UseEffectCounterContainer />
      <HTTPRequest />*/}
      <HTPPPost />
    </div>
  );
}

export default App;
