import React, { useEffect, useState } from "react";

function App() {
  const [backedData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);
  console.log(backedData);
  return (
    <div className="main">
      {typeof backedData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backedData.users.map((item, id) => <p key={id}>{item}</p>)
      )}
    </div>
  );
}

export default App;
