import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import CardDetails from '../CardDetails/CardDetails';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(fakeData);
    }, []);

    return (
        <div>
            <div>All Courses</div>
            <Grid container direction="row" justify="center">
                {courses.map(course => (
                    <CardDetails course={course} key={course.key}></CardDetails>
                ))}
            </Grid>
        </div>
    );
};

export default Services;
