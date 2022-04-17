//@flow
import type { Element, ChildrenArray, Node } from "react";
import { Children, useEffect, useRef } from "react";
import Dot from "../Dot";

type Props = {
  size: number,
  xOffset: number,
  yOffset: number,
  children: ChildrenArray<Element<typeof Dot>>,
};

export default function Matrix(props: Props): Node {
  const canvasRef = useRef(null);

  const { size, xOffset, yOffset } = props;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas ref is not defined...");
      return;
    }

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000000";

    // vertical line
    ctx.moveTo(size / 2 + xOffset, yOffset);
    ctx.lineTo(size / 2 + xOffset, size + yOffset);

    // horizontal line
    ctx.moveTo(xOffset, size / 2 + yOffset);
    ctx.lineTo(size + xOffset, size / 2 + yOffset);
    ctx.stroke();

    Children.forEach(props.children, (child) => {
      const { urgency, importance, title } = child.props;
      // urgency = x
      // urgency: 0 -> low urgency, x coordinate should be size
      // urgency: 10+ -> high urgency, x coordinate should be xOffset
      const urgencyCoordinate = xOffset + size - (urgency / 10) * size;
      // importance = y
      // importance: 0 -> low importance, y coordinate should be size
      // importance: 10+ -> high importance, y coordinate should be 0
      const importanceCoordinate = yOffset + size - (importance / 10) * size;

      ctx.beginPath();
      ctx.arc(urgencyCoordinate, importanceCoordinate, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = "10px Comic Sans MS";
      ctx.fillText(title, urgencyCoordinate + 8, importanceCoordinate + 3);
    });
  }, [props.children, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size + 2 * xOffset}
      height={size + 2 * yOffset}
    />
  );
}
