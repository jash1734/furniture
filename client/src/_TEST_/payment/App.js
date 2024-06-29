
import {loadStripe} from '@stripe/stripe-js';

const products=[
  {
      id: 1,
      name: 'Wireless Headphones',
      price: 59.99,
  },
  {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
  }
]
const Payment = async()=>{
  const stripe = await loadStripe('pk_test_51PWs0t2MVRnUbw5KDnZQz3mDSDvhKdKY496YDXukHOzfqK7dKHsPAWMpIu2i5ca3nsOA6IUWJRKg8Qz9pbTmHiG9001eXVYw2j');

  const body= products;

  const header= {
    "content-type" : "application/json"
  }

  const response =await fetch("http://localhost:4000/api/products",{
    method:"POST",
    headers:header,
    body:JSON.stringify(body)
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId:session.id
  })

  if(result.error){
    console.log(result.error);
  }
}
function App() {
  return (
    <div className="App">
      <button onClick={Payment}>Check out</button>
    </div>
  );
}

export default App;
