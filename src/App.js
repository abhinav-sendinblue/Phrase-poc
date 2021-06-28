import { FormattedMessage } from 'react-intl';

const steps = [
  "Create a separate project on Phase, add all the locales",
  "enable github sync and Personal access token, enable autofill",
  "install phrase in local pc, (brew install phrase)",
  "(af-phraseapp) vs code extention to autofind translation",
  "install react-intl",
  "create a EN translation file",
  "Push branch on github",
  "Check all the keys new key react there or not",
]

function App() {
  return (
    <div className="App">
      <h3>
        <FormattedMessage id="heading" />
      </h3>
      <p>
        Steps:-
        {
          steps.map((li, i)=><li key={i}>{li}</li>)
        }
      </p>
    </div>
  );
}

export default App;


// Not clear

// Enable translators to edit translations of all types
// Otherwise, translators are not allowed to edit translations other than strings