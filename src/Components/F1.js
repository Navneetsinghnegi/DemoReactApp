import { useEffect } from 'react';
import Axios from 'axios';

function F1() {
  useEffect(() => {
    Axios.get("https://www.linkedin.com")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default F1;
