// @flow

import type { Node } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const weeks = new Array(18).fill(null).map((_, idx) => idx + 1);

export default function OpmSelector(props: Props): Node {
  const [week, setWeek] = useState<string | null>(null);

  return (
    <div>
      <select
        onChange={(e) => {
          const value = e.target.value;
          setWeek(value);
        }}
      >
        <option value="">Select week</option>
        {weeks.map((w) => (
          <option key={w} value={w}>
            Week {w}
          </option>
        ))}
      </select>
      {week && (
        <a href={`/assets/docs/3gs/2022/week${week}.csv`}>Download CSV</a>
      )}
    </div>
  );
}

function getDefaultWeek() {
  return 15;
}
