import './App.css';
import Counter from './Hooks/Counter';
import Page from './Hooks/ContextEx/Page';
import UseLayoutEffectEx from './Hooks/UseLayoutEffect';
import UseReducerEx from './Hooks/UseReducerEx';
import { MemoizationEx } from './Hooks/useMemo/MemoizationEx';
import UseMemoEx from './Hooks/useMemo/useMemo';

function App() {
  return (
    <div className="App">
      {/* <Counter/>  */}
      {/* <UseLayoutEffectEx /> */}
      {/* <Page /> */}
      {/* <UseReducerEx /> */}
      {/* <MemoizationEx /> */}
      <UseMemoEx />
    </div>
  );
}

export default App;
