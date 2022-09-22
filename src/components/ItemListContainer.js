import './ItemListContainer.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) =>{
    return(
        <Container>
            <Card body className="greeting">{greeting}</Card>
        </Container>
    )
}
export default ItemListContainer;

