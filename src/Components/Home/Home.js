import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Banner from '../Banner/Banner';
import CardDetails from '../CardDetails/CardDetails';

const Home = () => {
    const data = fakeData.filter(item => item.key <= 4);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(data);
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Grid container direction="row" justify="center" className="py-5">
                {courses.map(course => (
                    <CardDetails course={course} key={course.key}></CardDetails>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
