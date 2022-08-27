import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./ContextMenu.scss";
import { Position } from "../../Pages/MainPage";

interface ContextMenuProps {
  position?: any;
}

//@ts-ignore
const ContextMenu = forwardRef((props: ContextMenuProps, ref) => {
  const [position, setPosition] = useState<Position>();

  useImperativeHandle(ref, () => ({
    updatePosition(newPosition: Position) {
      setPosition(newPosition);
    },
  }));

  return <div style={{ top: position?.y, left: position?.x }} onContextMenu={(e) => console.log("ree")} className={"context-menu"}></div>;
});

export default ContextMenu;
