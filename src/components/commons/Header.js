import React, { useLayoutEffect } from "react";
import { useInitState } from "../welaaaContext";

import HeaderWeb from "./HeaderWeb";
import HeaderMobile from "./HeaderMobile";
function Header() {
  const state = useInitState();

  return <>{state.device ? <HeaderMobile /> : <HeaderWeb />}</>;
}

export default Header;
