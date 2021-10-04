import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardDetails.css';

const CardDetails = props => {
    const { name, photo, key } = props.course;

    return (
        <Link
            to={`/volunteer/${key}`}
            className="course
        course-card"
        >
            <Card style={{ width: '15rem', height: '20rem' }}>
                <Card.Img variant="top" style={{ height: '14rem' }} src={photo} />
                <Card.Body className="text-center" style={{ backgroundColor: 'lightblue' }}>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default CardDetails;
