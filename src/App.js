import './App.css';
import Counter from './Hooks/Counter';
import Page from './Hooks/ContextEx/Page';
import UseLayoutEffectEx from './Hooks/UseLayoutEffect';
import UseReducerEx from './Hooks/UseReducerEx';

function App() {
  return (
    <div className="App">
      {/* <Counter/>  */}
      {/* <UseLayoutEffectEx /> */}
      {/* <Page /> */}
      <UseReducerEx />
    </div>
  );
}

export default App;
