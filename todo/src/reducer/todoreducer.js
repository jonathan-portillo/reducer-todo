export const ADD_TASK = "ADD_TASK";
export const CLEAR_TASK = "CLEAR_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const initialState = [
  {
    task: "Wash Dishes",
    id: 0,
    completed: false,
  },
  {
    task: "Do Laundry",
    id: 1,
    completed: false,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }
    case TOGGLE_TASK: {
      return state.map((task) => {
        if (task.id === action.payload)
          return {
            ...task,
            completed: !task.completed,
          };
        return task;
      });
    }
    case CLEAR_TASK: {
      return state.filter((task) => {
        return !task.completed;
      });
    }
    default:
      return state;
  }
};
