import React, { useEffect, useState } from "react";
import SkillTree from "../Components/SkillTree/SkillTree";
import SidePanel from "../Components/SidePanel/SidePanel";
import ContextMenu from "../Components/ContextMenu/ContextMenu";

export interface Position {
  x: number;
  y: number;
}

export const MainPage = () => {
  //const [contextMenuPos, setContextMenuPos] = useState<Position>();
  let child1SetState: any;
  const invokeChild1 = (setStateCallback: any) => {
    console.log(setStateCallback);
    if (child1SetState) {
      //child1SetState({ x: setStateCallback.x, y: setStateCallback.y });
    }
    if (setStateCallback) {
      /* When Child1 is mounted, store 
        its reference in a variable
      */
      child1SetState = setStateCallback[1];
    } else if (setStateCallback.x && setStateCallback.y) {
      child1SetState(setStateCallback.x);
    } else {
      /* When user clicks on a button in 
        child 2, the argument won't be 
        provided meaning we have ref to 
        child1SetState and is ready to be
        invoked and it will re-render child1 
        component.
      */
      console.log(setStateCallback);
      child1SetState(Math.random());
    }
  };

  const handleClick = (e: any) => {
    if (e.button === 0) {
      console.log("left");
    } else if (e.button === 2) {
      e.preventDefault();
      console.log("ree");
      //constInvokeChild();
    }
  };

  return (
    <div id={"main-page-id"}>
      <SkillTree updateChild1={invokeChild1} setContextMenu={child1SetState ? child1SetState : undefined}></SkillTree>
      <SidePanel></SidePanel>
    </div>
  );
};
