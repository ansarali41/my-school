import React from 'react';
import './About.css';
import aboutBanner from '../../images/about.jpg';

const About = () => {
    return (
        <div className="aboutus-area">
            <div className="col-xs-12 pb-3">
                <img src={aboutBanner} alt="" style={{ width: '100%', height: '400px' }} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="aboutus-content ">
                                <div className="text-center">
                                    <h1>
                                        About <span>Us</span>
                                    </h1>
                                    <br />
                                    <h4>What we Have!</h4>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam magni commodi provident, ex cumque distinctio, illo praesentium incidunt nisi
                                    id sunt, aspernatur culpa adipisci est reprehenderit alias officiis quae quidem. Minus vitae eos laudantium ab asperiores, quisquam illo
                                    repellat eius expedita quae dolore fuga doloremque fugiat nam odio eligendi? Modi tempora deserunt id delectus ipsa et sint natus, magni
                                    tempore.
                                </p>

                                <div className="counter ">
                                    <div className="single-counter text-center">
                                        <h2 className="counter">1500</h2>
                                        <p>Students</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">10</h2>
                                        <p>international awards</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">5</h2>
                                        <p>Computer Labs</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">2</h2>
                                        <p>Library</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
