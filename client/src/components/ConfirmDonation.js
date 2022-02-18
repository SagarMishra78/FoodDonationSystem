import React, { useEffect, useState } from "react";

const ConfirmDonation = () => {
  const [requests, setRequests] = useState({});

  const callConfirmPage = async () => {
    try {
      const res = await fetch("/confirmdonation", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setRequests(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callConfirmPage();
  });

  const DisplayData = data.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.address}</td>
        <td>{info.phone}</td>
        <td>{info.addinfo}</td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Addtional Information</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </>
  );
};

export default ConfirmDonation;
