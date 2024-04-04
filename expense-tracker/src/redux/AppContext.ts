// import React, { createContext, useReducer, useContext } from "react";

// //Shape of State

// interface AppState {
//   budget: Number;
//   expenses: Expense[];
// }

// // shape of action
// type AppAction =
//   | { type: "ADD_EXPENSE"; payload: Expense }
//   | { type: "REMOVE_EXPENSE"; payload: number };

// // Define the shape of an expense
// interface Expense {
//   id: number;
//   name: string;
//   cost: number;
// }

// // Define initial state
// const initialState: AppState = {
//   budget: 4000,
//   expenses: [
//     { id: 12, name: "shopping", cost: 40 },
//     { id: 13, name: "holiday", cost: 400 },
//     { id: 14, name: "car service", cost: 50 },
//   ],
// };

// // create context

// export const AppContext = createContext<{
//   state: AppState;
//   dispatch: React.Dispatch<AppAction>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// // Reducer function

// const appReducer = (state: AppState, action: AppAction) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return {
//         ...state,
//         expenses: [...state.expenses, action.payload],
//       };
//     case "REMOVE_EXPENSE":
//       return {
//         ...state,
//         expnses: state.expenses.filter(
//           (expense) => expense.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
// export const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(appReducer, initialState);

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useAppContext = () => useContext(AppContext);
