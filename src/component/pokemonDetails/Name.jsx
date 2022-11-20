import React from "react";

export default function Name({ id, english, japanese, chinese, french }) {
  return (
    <table className="table-success  text-center" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th scope="row">ID {id}</th>
          <td>English</td>
          <td>Japanese</td>
          <td>Chinese</td>
          <td>French</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{english}</td>
          <td>{japanese}</td>
          <td>{chinese}</td>
          <td>{french}</td>
        </tr>
      </tbody>
    </table>
  );
}
