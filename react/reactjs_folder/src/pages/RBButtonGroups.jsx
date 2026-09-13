import React, { useReducer } from "react";

import {
  ButtonGroup,
  ToggleButton,
  Card,
} from "react-bootstrap";

import {
  TextLeft,
  TextCenter,
  TextRight,
} from "react-bootstrap-icons";

//  Initial State
const initialState = {
  align: "start",
};

//  Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALIGN":
      return {
        ...state,
        align: action.payload,
      };

    default:
      return state;
  }
};

//  Button Data
const buttons = [
  {
    id: 1,
    value: "start",
    label: "Left",
    icon: <TextLeft className="me-2" />,
  },
  {
    id: 2,
    value: "center",
    label: "Center",
    icon: <TextCenter className="me-2" />,
  },
  {
    id: 3,
    value: "end",
    label: "Right",
    icon: <TextRight className="me-2" />,
  },
];

const RBButtonGroups = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="p-4">

      {/* Heading */}
      <h1 className="mb-4">
        Button Groups
      </h1>

      {/* Button Group */}
      <ButtonGroup className="mb-3">

        {buttons.map((item) => (
          <ToggleButton
            key={item.id}
            id={`align-${item.id}`}
            type="radio"
            name="alignment"
            value={item.value}
            variant="primary"
            checked={state.align === item.value}
            onChange={(e) =>
              dispatch({
                type: "SET_ALIGN",
                payload: e.currentTarget.value,
              })
            }
          >
            {item.icon}
            {item.label}
          </ToggleButton>
        ))}

      </ButtonGroup>

      {/* Content Box */}
      <Card>

        <Card.Body
          className={`text-${state.align}`}
        >
          <p className="mb-0 fs-5">
            Here, the actions of the above
            buttons will be reflected.
          </p>
        </Card.Body>

      </Card>

    </div>
  );
};

export default RBButtonGroups;