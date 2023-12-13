import React from "react";
import axios from "axios";

function Result() {
  async function handleRequestWithToken() {
    const token = localStorage.getItem("token");

    const url = "http://127.0.0.1:8000/api/user";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(url, { headers });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleRequestWithToken}>Click</button>
    </div>
  );
}

export default Result;
