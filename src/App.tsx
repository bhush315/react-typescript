import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Alice" /> {/* Pass a string as a prop */}
      <Counter /> {/* Counter component has no props */}
    </div>
  );
};

export default App;
