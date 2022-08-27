import React, { ReactElement, RefObject, useEffect, useRef } from "react";
import "./SkillTree.scss";
import { Position } from "../../Pages/MainPage";
import { MouseEvent } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";

interface SkillProps {
  id?: number;
  name?: string;
  updateChild1: (pos: Position) => void;
  setContextMenu: any;
}

//@ts-ignore
const SkillTree = (props: SkillProps) => {
  const skills = [];

  const contextMenuRef = useRef<{ updatePosition: (pos: Position) => void }>(null);

  const hanldeContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    contextMenuRef.current?.updatePosition({ x: e.clientX - 133, y: e.clientY });
  };

  return (
    <div onContextMenu={(e) => hanldeContextMenu(e)} className={"skill-tree"}>
      <>SkillTree</>
      <ContextMenu ref={contextMenuRef}></ContextMenu>
    </div>
  );
};

export default SkillTree;
