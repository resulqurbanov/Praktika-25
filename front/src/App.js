import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  function dataget(){
    axios.get(`http://localhost:7777/users/`).then((res) => {
      setProducts(res.data);
    });
  }
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dataget()
  }, []);
  return (
    <>
  
      {products.map((element) => {
        return (
          <>
            <div>
            <img src={element.imageUrl} alt=""/>
              <h1>{element.title}</h1>
              <h1>{element.description}</h1>
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
