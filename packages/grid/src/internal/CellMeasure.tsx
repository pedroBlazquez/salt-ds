import "./CellMeasure.css";
import { useEffect, useRef } from "react";
import { makePrefixer } from "@salt-ds/core";

const withBaseName = makePrefixer("saltGridCellMeasure");

export interface CellMeasureProps<T> {
  setRowHeight: (rowHeight: number) => void;
}

// Renders a cell in invisible location, measures its height and provides it to
// the grid.
export function CellMeasure<T>(props: CellMeasureProps<T>) {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const heightRef = useRef<number>(-1);

  const { setRowHeight } = props;

  useEffect(() => {
    if (rowRef.current) {
      const height = rowRef.current.getBoundingClientRect().height;
      if (heightRef.current !== height) {
        // console.log(`Row height changing to ${height}px`);
        heightRef.current = height;
        setRowHeight(height);
      }
    }
  });

  return (
    <div className={withBaseName()}>
      <table aria-hidden>
        <thead>
          <tr ref={rowRef}>
            <th>Invisible Cell</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
