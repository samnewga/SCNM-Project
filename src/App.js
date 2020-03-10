import React from 'react';
import Accordion from './AccordionMenu/Accordion';
import PlaceHolder from './Components/PlaceHolder';

function App() {
  return (
    <div>
      <Accordion title="Patient Information">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Social History">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Anthropometrics">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Medical Condition">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Medication">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Past Medical Care">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Substance Use">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
      <Accordion title="Physical History">
        <span className="accordion-text">
          <PlaceHolder />
        </span>
      </Accordion>
    </div>
  );
}

export default App;
