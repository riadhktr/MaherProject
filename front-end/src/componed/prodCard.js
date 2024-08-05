import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../app/cartSlice';

function ProdCard({prod}) {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={prod?.image[4]} alt = "prod" />
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
        <Button  onClick={()=>navigate(`/detail/${prod._id}`)} variant="primary">See more</Button>
        <Button  onClick={()=>dispatch(addToCart(prod))} variant="primary">add shop</Button>
      </Card.Body>
    </Card>
  );
}

  
  export default ProdCard;