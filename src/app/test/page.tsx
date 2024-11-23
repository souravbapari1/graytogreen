import { Delete, EditIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="container">
      <div className="w-full overflow-auto border max-h-[80vh] ">
        <table className="tblView">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th>name</th>
              <th>email</th>
              <th>password</th> <th>name</th>
              <th>email</th>
              <th>password</th> <th>name</th>
              <th>email</th>
              <th>password</th> <th>name</th>
              <th>email</th>
              <th>password</th> <th>name</th>
              <th>email</th>
              <th>password</th> <th>name</th>
              <th>email</th>
              <th className="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 40 }).map((_, i) => {
              return (
                <tr>
                  <td>name</td>
                  <td>email</td>
                  <td>Allow column widths to adjust based on content </td>
                  <td>name</td>
                  <td>email</td>
                  <td>password</td> <td>name</td>
                  <td>email</td>
                  <td>password</td> <td>name</td>
                  <td>email</td>
                  <td>password</td> <td>name</td>
                  <td>email</td>
                  <td>password</td> <td>name</td>
                  <td>Allow column widths to adjust based on content </td>
                  <td>password</td> <td>name</td>
                  <td>Last</td>
                  <td className="action">
                    <div className="flex justify-between items-center gap-4">
                      <EditIcon />
                      <Delete color="red" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
