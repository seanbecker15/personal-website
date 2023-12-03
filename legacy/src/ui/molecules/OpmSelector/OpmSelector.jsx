import { useState } from "react";

const weeks = new Array(18).fill(null).map((_, idx) => idx + 1);

export default function OpmSelector() {
  const [week, setWeek] = useState(null);

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