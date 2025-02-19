import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  //const step = 1;//we want to make this piece of state dynamic
  //First we add a new state variable, 2. we use it the code 3. we update the piece of state in some event handler
  //note that useState function is known as a hook; we can identify a hook by use... and also you can only call a hook on the top level of the component function; also not in the if statement
  const [step, setStep] = useState(1);
  //event handler function right in the component
  function handlePrevious() {
    // alert("Previous");
    //to prevent negative values add a guard if(step>1) only then set the step
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // alert("Next");
    //3.step update the step in the event handler
    //step here is the current step:1
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          {/* -1 because the array is zero based*/}
          {step}:{messages[step - 1]}
        </p>
        <div className="buttons">
          {/*handling event in react way: click is the event name and we also add on, then we pass in a function; we add an event listerner right where it is going to happen
          the function will be executed whenever there is a click on this DOM element
          it is very important to stress that it is a callback function not a function call like this onClick={alert('Test)}*/}
          <buton
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            // onClick={() => alert("Previous")}
            //onMouseEnter={() => alert("Test")}
            onClick={handlePrevious}
          >
            Previous
          </buton>
          <buton
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            // onClick={() => alert("Next")}
            onClick={handleNext}
          >
            Next
          </buton>
        </div>
      </div>
    </>
  );
}

export default App;
