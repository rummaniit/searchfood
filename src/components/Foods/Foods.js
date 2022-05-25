import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Foods.css'

const Foods = (props) => {
    let { idMeal, strMealThumb, strMeal, strInstructions } = props.food
    let navigate = useNavigate()
    let handleclick = () => {
        navigate(`/food/${idMeal}`)
    }
    return (
        <>
            <Card border='success' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 150)}
                    </Card.Text>
                    <Button onClick={handleclick}>Load More</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Foods;