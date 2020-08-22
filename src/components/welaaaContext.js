import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useRef,
} from "react";

// 사이트의 각종 상태값들 정의
// ex) 팝업창 true,false여부
//  mobile,web 전환여부 등
// device: true === mobile , false === web
const initStateWelaaa = {
  device: false,
  allMenu: false,
  burgerMenu: false,
  searchBar: false,
};

function mainReducer(state, action) {
  switch (action.type) {
    case "DEVICE":
      return {
        ...state,
        device: action.device,
      };
    case "ALLMENU":
      return { ...state, allMenu: !state.allMenu };
    case "BURGERMENU":
      return { ...state, burgerMenu: !state.burgerMenu };
    case "SEARCHBAR":
      return { ...state, searchBar: !state.searchBar };
    default:
      throw new Error(`Unhandled action type: $(action.type)`);
  }
}

const InitStateContext = createContext();
const InitDispatchContext = createContext();

export function WelaaaProvider({ children }) {
  console.log("WelaaaProvider");
  const [state, dispatch] = useReducer(mainReducer, initStateWelaaa);

  return (
    <InitStateContext.Provider value={state}>
      <InitDispatchContext.Provider value={dispatch}>
        {children}
      </InitDispatchContext.Provider>
    </InitStateContext.Provider>
  );
}

export function useInitState() {
  const context = useContext(InitStateContext);
  if (!context) {
    throw new Error("Cannot find InitStateProvider");
  }
  return context;
}
export function useInitDispatch() {
  const context = useContext(InitDispatchContext);
  if (!context) {
    throw new Error("Cannot find InitDispatchProvider");
  }
  return context;
}
