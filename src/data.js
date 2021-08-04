import NestedFlow from "./NestedFlow";

export const INITIAL_STATE = [
  {
    id: "3",
    // you can also pass a React component as a label
    style: {
      height: 200,
      width: 400,
    },
    sourcePosition: "top",
    children: [
      {
        id: "1-c",
        type: "input", // input node
        data: { label: "Input Node" },
        position: { x: 5, y: 5 },
      },
      {
        id: "2-c",
        type: "output", // input node
        data: { label: "Output Node" },
        position: { x: 5, y: 100 },
      },
      {
        id: "3-c",
        // type: "output", // input node
        data: { label: "Random Node" },
        position: { x: 200, y: 5 },
      },
    ],
    data: {
      label: (
        <NestedFlow
          id="nested 2"
          elements={[
            {
              id: "1-c",
              type: "input", // input node
              data: { label: "Input Node" },
              position: { x: 5, y: 5 },
            },
            {
              id: "2-c",
              type: "output", // input node
              data: { label: "Output Node" },
              position: { x: 5, y: 100 },
            },
            {
              id: "3-c",
              // type: "output", // input node
              data: { label: "Random Node" },
              position: { x: 200, y: 5 },
            },
          ]}
        />
      ),
    },
    position: { x: 25, y: 380 },
  },
  {
    id: "0",
    type: "input", // input node
    data: { label: "Another input" },
    position: { x: 50, y: 25 },
  },
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    style: {
      height: 200,
      width: 400,
    },

    children: [
      {
        id: "1-a",
        type: "input", // input node
        data: { label: "Input Node" },
        position: { x: 5, y: 5 },
      },
      {
        id: "2-a",
        type: "output", // input node
        data: { label: "Output Node" },
        position: { x: 5, y: 100 },
      },
      {
        id: "3-a",
        // type: "output", // input node
        data: { label: "Random Node" },
        position: { x: 200, y: 5 },
      },
    ],
    data: {
      label: (
        <NestedFlow
          id="nested 1"
          elements={[
            {
              id: "1-a",
              type: "input", // input node
              data: { label: "Input Node" },
              position: { x: 5, y: 5 },
            },
            {
              id: "2-a",
              type: "output", // input node
              data: { label: "Output Node" },
              position: { x: 5, y: 100 },
            },
            {
              id: "3-a",
              // type: "output", // input node
              data: { label: "Random Node" },
              position: { x: 200, y: 5 },
            },
            { id: "enested1-2", source: "1-a", target: "2-a", animated: true },
          ]}
        />
      ),
    },
    position: { x: 200, y: 105 },
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-2", source: "3", target: "0", animated: false },
];
