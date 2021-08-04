import { useEffect, useState } from "react";
import ReactFlow, { addEdge, ReactFlowProvider } from "react-flow-renderer";
import { IFrame } from "./Iframe";
import { onDragStopHandler, uniqueBy } from "./utils";

export default function NestedFlow({ id, elements }) {
  const [children, setChildren] = useState([]);

  const onConnect = (params) => setChildren((els) => addEdge(params, els));

  const frameId = "iframe-" + id;
  useEffect(
    function () {
      setChildren(uniqueBy("id", [...children, ...elements]));
    },
    [elements]
  );

  return (
    <div id={id} style={{ height: "100%" }}>
      {/* <Iframe domId="ads" /> */}

      <IFrame id={frameId}>
        <div style={{ height: "100%" }}>
          <ReactFlowProvider>
            <ReactFlow
              elements={children}
              onConnect={onConnect}
              onNodeDragStop={(event, node) => {
                onDragStopHandler({
                  node,
                  elements: children,
                  setElements: setChildren,
                  iframeId: frameId,
                });
              }}
            />
          </ReactFlowProvider>
        </div>
      </IFrame>
    </div>
  );
}
