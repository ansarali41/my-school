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
            <div className="text-center py-2">
                <h3>Best Courses</h3>
            </div>
            <Grid container direction="row" justify="center" className="pt-3 pb-5">
                {courses.map(course => (
                    <CardDetails course={course} key={course.key}></CardDetails>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
