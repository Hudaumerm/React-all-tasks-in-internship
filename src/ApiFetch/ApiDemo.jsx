import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiDemo() {
  const [value, setvalue] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setvalue(res.data));
      console.log(value)
  }, [value]);

  return (
    <div>
      
      {value.map((i) =>
        <h2>{i.name}</h2>
        
      )}
    </div>
  );
}

export default ApiDemo;
