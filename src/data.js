import NestedFlow from "./NestedFlow";

export const INITIAL_STATE = [
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
          ]}
        />
      ),
    },
    position: { x: 100, y: 125 },
  },
];
