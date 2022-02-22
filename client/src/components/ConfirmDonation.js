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

  const data = [{"_id":"61f2b3a38f77b0fc151f639e","name":"SMishra","address":"Nallasopara","phone":9021702993,"addinfo":"sagar","__v":0},{"_id":"61f3aff13544aa9e08711c47","name":"SMishra","address":"Nallasopara","phone":9021702993,"addinfo":"donate","__v":0},{"_id":"61fa41647453ef39af8ab93b","name":"sonam ","address":"06, 90fit road","phone":8652203837,"addinfo":"bhvg","__v":0},{"_id":"61fa56724574bbd35a39a3e2","name":"sonam ","address":"06, 90fit road","phone":8652203837,"addinfo":" b hbhbh","__v":0},{"_id":"61fc035f58f7da5ce98fe247","name":"SMishra","address":"Nallasopara","phone":9021702993,"addinfo":"ghg","__v":0},{"_id":"61fc036558f7da5ce98fe383","name":"SMishra","address":"Nallasopara","phone":9021702993,"addinfo":"ghg","__v":0},{"_id":"620bb49019672e75f671c689","name":"SMishra","address":"Nallasopara","phone":9021702993,"addinfo":"sagar","__v":0}]
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
