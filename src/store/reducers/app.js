export const initialState = {
  language: 'en',
};

const actionsMap = {};

export default (state = initialState, action) => {
  const actionHandler = actionsMap[action.type];
  if (!actionHandler) {
    return state;
  }
  return actionHandler(state, action);
};
