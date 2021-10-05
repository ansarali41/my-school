import React from 'react';
import { Card } from 'react-bootstrap';
import './CardDetails.css';

const CardDetails = props => {
    const { name, photo } = props.course;

    return (
        <div
            className="course
        course-card"
        >
            <Card style={{ width: '15rem', height: '20rem' }}>
                <Card.Img variant="top" style={{ height: '14rem' }} src={photo} />
                <Card.Body className="text-center" style={{ backgroundColor: 'lightblue' }}>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardDetails;
