import React from 'react';
import Accordion from './TabComponents/Accordion';

const placeholder =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
  'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in' +
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
  'culpa qui officia deserunt mollit anim id est laborum.';
function App() {
  return (
    <div>
      <Accordion title="Patient Information">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Social History">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Anthropometrics">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Medical Condition">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Medication">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Past Medical Care">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Substance Use">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
      <Accordion title="Physical History">
        <span className="accordion-text">{placeholder}</span>
      </Accordion>
    </div>
  );
}

export default App;
