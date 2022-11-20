import React from "react";

export default function Base({
  HP,
  Attack,
  Defense,
  Speed,
  SpeedAttack,
  SpeedDefense,
}) {
  return (
    <table className="table-success text-center" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th scope="row">Base</th>
          <td>HP</td>
          <td>Attack</td>
          <td>Defense</td>
          <td>Speed</td>
          <td>Speed Attack</td>
          <td>Speed Defense</td>
        </tr>
        <tr>
          <th scope="row">Number</th>
          <td>{HP}</td>
          <td>{Attack}</td>
          <td>{Defense}</td>
          <td>{Speed}</td>
          <td>{SpeedAttack}</td>
          <td>{SpeedDefense}</td>
        </tr>
      </tbody>
    </table>
  );
}
