import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
import CandidateJobSearchPage from "./components/CandidateJobSearchPage";

function App() {
  return (
    <Provider store={appStore}>
      <CandidateJobSearchPage />
    </Provider>
  );
}

export default App;
