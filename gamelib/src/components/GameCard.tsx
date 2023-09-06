import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface GameCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

function GameCard(props: GameCardProps) {
  
  //to build them dynamically, we use props
  const { title, description, image, link } = props;
  return (
    <div className='gameCard'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </div>
  );
}

export default GameCard ;