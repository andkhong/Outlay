const handle_input_action = (input) => {
  return {
    type: "UPDATE_INPUT_FIELD",
    input: input.target.value
  }
}

export default handle_input_action;
