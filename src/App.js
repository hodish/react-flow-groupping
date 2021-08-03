import ReactFlow, { removeElements } from "react-flow-renderer";
import { useState } from "react";
import { onDragStopHandler } from "./utils";
import { INITIAL_STATE } from "./data";

function App() {
  const [elements, setElements] = useState(INITIAL_STATE);

  return (
    <div style={{ height: "100vh", backgroundColor: "rgba(100,100,100,0.1)" }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={(elementsToRemove) =>
          setElements((els) => removeElements(elementsToRemove, els))
        }
        onNodeDragStop={(event, node) =>
          onDragStopHandler({ node, elements, setElements })
        }
      />
    </div>
  );
}

export default App;
