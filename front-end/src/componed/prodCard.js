import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../helpers/localStorage';


function ProdCard({prod}) {
  // console.log(prod);
  
  const user = getLocalStorage('User');
  const navigate = useNavigate();  
  
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={prod?.image[0]} alt = "prod" />
      <Card.Body>
        <Card.Title>{prod.nameProdut}</Card.Title>
        <Card.Text>
          {prod.productDescription}
          <br/>
          {prod.price}
          <br/>
          {prod.postedBy.firstName}
          <br/>
          {prod.category?.nameCat}
        </Card.Text>
          {user?._id !== prod.postedBy?._id ?  <Button  onClick={()=>navigate(`/detail/${prod._id}`)} variant="primary">See more</Button>
           :  <Button>Edit</Button> }
           
          </Card.Body>
    </Card>
  );
}

  
  export default ProdCard;