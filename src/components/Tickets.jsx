import React from 'react';
const Tickets = () => {
    return (<>
      <div className="ticket">
      <h2>Ticket All</h2>
      <table className="customers">
        <tr>
          <th>Customers Name</th>
          <th>Movies</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Ahmad</td>
          <td>Nobody</td>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41TotNyv1-L.png"
              alt=""
            />Resolved
          </td>
        </tr>
        <tr>
          <td>Aseel</td>
          <td>Nobody</td>
          <td>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-office-icons-1/140/Artboard_1-11-512.png"
              alt=""
            />Pending resolution
          </td>
        </tr>
        <tr>
          <td>Raneem</td>
          <td>Dream Horse</td>
          <td>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/1024px-Deletion_icon.svg.png"
              alt=""
            />
            Dismissed
          </td>
        </tr>
        <tr>
          <td>Mohammad</td>
          <td>Tom & Jerry</td>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41TotNyv1-L.png"
              alt=""
            />Resolved
          </td>
        </tr>
        <tr>
          <td>Salam</td>
          <td>Dream Horse</td>
          <td>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/1024px-Deletion_icon.svg.png"
              alt=""
            />
            Dismissed
          </td>
        </tr>
        <tr>
          <td>Sami</td>
          <td>Dream Horse</td>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41TotNyv1-L.png"
              alt=""
            />Resolved
          </td>
        </tr>
        <tr>
          <td>Lama</td>
          <td>Tom & Jerry</td>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41TotNyv1-L.png"
              alt=""
            />Resolved
          </td>
        </tr>
        <tr>
          <td>Tahani</td>
          <td>Giovanni Rovelli</td>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41TotNyv1-L.png"
              alt=""
            />Resolved
          </td>
        </tr>
        <tr>
          <td>Jamal</td>
          <td>Simon Crowther</td>
          <td>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-office-icons-1/140/Artboard_1-11-512.png"
              alt=""
            />Pending resolution
          </td>
        </tr>
      </table>
    </div>
    </>)
}

export default Tickets;