import { FormattedMessage } from 'react-intl';
import {steps_listing} from './translations/messages-en.json';

function App() {
  return (
    <div className="App">
      <h3>
        <FormattedMessage id="heading" />
      </h3>
      <p>
        <FormattedMessage id="steps" />:-
        {
          steps_listing.map((li, i)=><li key={i}>{li}</li>)
        }
      </p>
    </div>
  );
}

export default App;


// Not clear

// Enable translators to edit translations of all types
// Otherwise, translators are not allowed to edit translations other than strings