import React, { useReducer } from "react";
import {
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import { Pencil } from "react-bootstrap-icons";

//  Initial State
const initialState = {
  selected: [],
};

//  Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STYLE":
      return {
        ...state,

        selected: state.selected.includes(action.payload)
          ? state.selected.filter(
              (item) => item !== action.payload
            )
          : [...state.selected, action.payload],
      };

    default:
      return state;
  }
};

//  Toggle Buttons Data
const toggleButtons = [
  {
    id: 1,
    type: "bold",
    label: <b>B</b>,
  },
  {
    id: 2,
    type: "italic",
    label: <i>I</i>,
  },
  {
    id: 3,
    type: "underline",
    label: <u>U</u>,
  },
  {
    id: 4,
    type: "strike",
    label: <s>S</s>,
  },
];

const RBButtons = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  //  Dynamic Style
  const textStyle = {
    fontWeight: state.selected.includes("bold")
      ? "bold"
      : "normal",

    fontStyle: state.selected.includes("italic")
      ? "italic"
      : "normal",

    textDecoration: `
      ${
        state.selected.includes("underline")
          ? "underline"
          : ""
      }
      ${
        state.selected.includes("strike")
          ? "line-through"
          : ""
      }
    `,
  };

  return (
    <div className="p-4">

      {/*  Button Styles */}
      <h1 className="mb-4">Button Styles</h1>

      <div className="d-flex gap-3 flex-wrap mb-5">

        <Button variant="primary">
          Normal Button
        </Button>

        <Button variant="primary">
          <Pencil className="me-2" />
          Edit Record
        </Button>

        <Button variant="outline-primary">
          Outline Button
        </Button>

        <Button variant="primary" disabled>
          Disabled button
        </Button>

      </div>

      {/*  Button Types */}
      <h1 className="mb-4">Button Types</h1>

      <div className="d-flex gap-3 flex-wrap mb-5">

        <Button href="#">
          Link
        </Button>

        <Button>
          Button
        </Button>

        <Button type="button">
          Input
        </Button>

        <Button type="submit">
          Submit
        </Button>

        <Button type="reset">
          Reset
        </Button>

      </div>

      {/*  Toggle Buttons */}
      <h1 className="mb-4">Toggle Buttons</h1>

      <ButtonGroup className="mb-3">

        {toggleButtons.map((item) => (
          <ToggleButton
            key={item.id}
            id={`toggle-${item.id}`}
            type="checkbox"
            variant={
              state.selected.includes(item.type)
                ? "primary"
                : "outline-primary"
            }
            checked={state.selected.includes(item.type)}
            value={item.type}
            onChange={() =>
              dispatch({
                type: "TOGGLE_STYLE",
                payload: item.type,
              })
            }
          >
            {item.label}
          </ToggleButton>
        ))}

      </ButtonGroup>

      {/*  Working Content */}
      <p
        
        style={{
          fontSize: "22px",
          ...textStyle,
        }}
      >
        
        Here, the actions of the above buttons
        will be reflected.
      </p>

    </div>
  );
};

export default RBButtons;