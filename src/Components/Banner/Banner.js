import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            style={{
                background: `linear-gradient(to bottom,
            rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
            url('https://i.ibb.co/qmy7Vpp/banner-img.jpg')`,
                height: '300px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="text-center pt-5">
                <h1>Best Online School</h1>
                <div className="d-flex justify-content-center">
                    <FormControl type="text" placeholder="Search Courses.." className="mr-sm-6 w-25" />
                    <Button className="ml-2" variant="primary">
                        Search
                    </Button>
                </div>
                <div className="p-5">
                    <Link to="/contact">
                        <Button className="ml-2" variant="success">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
