
import './App.css';
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './component/Name';
import Price from './component/Price';
import Description from './component/Description';
import Image from './component/Image';
import { Card, Container } from 'react-bootstrap';
  
const firstName = "hussein"


function App () {
  return (  

    <div>
          <div> 
<Name/>
<Price/>
<Description/>
<Image/>

        
    </div>
    <Container className="mt-5">
      <Card style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          <Card.Text><Price /></Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-4">
        <h4>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h4>
        {firstName && (
          <img
            src="https://via.placeholder.com/150"
            alt="Welcome"
            style={{ marginTop: '20px', borderRadius: '50%' }}
          />
        )}
      </div>
    </Container>
  
    </div>
  );
}
 
export default App;
