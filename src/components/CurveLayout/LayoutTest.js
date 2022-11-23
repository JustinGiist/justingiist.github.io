import React, { useState } from "react";
import { setInterval } from "timers";

const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
  )

const LayoutTest = () => {
    return (
        <Circles />
    )
};
export default LayoutTest;

const Circles = () => {
    const [dataset, setDataset] = useState(
      generateDataset()
    )
    setInterval(() => {
      const newDataset = generateDataset()
      setDataset(newDataset)
    }, 2000)
    return (
      <svg width={200} height={200} viewBox="0 0 100 50">
        {dataset.map(([x, y], i) => (
          <circle
            cx={x}
            cy={y}
            r="3"
          />
        ))}
      </svg>
    )
  }