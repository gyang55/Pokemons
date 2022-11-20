import React from "react";

export default function Types({ types }) {
  console.log({ types });
  return (
    <table className="table-success  text-center" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th scope="row">Types</th>
          {types.map((type, i) => {
            return <td key={i}>{type}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}
