import { faEnvelope, faEnvelopeSquare, faSms, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 pb-5">
                    <form>
                        <div class="card border-dark rounded-0">
                            <div class="card-header p-0">
                                <div class="bg-dark text-white text-center py-2">
                                    <h3>
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                                        Contact Us
                                    </h3>
                                    <p class="m-0">Feel free to contact us</p>
                                </div>
                            </div>
                            <div class="card-body p-3">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <FontAwesomeIcon icon={faUser} className="text-dark" />
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Your Full Name" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <FontAwesomeIcon icon={faEnvelopeSquare} className="text-dark" />
                                            </div>
                                        </div>
                                        <input type="email" class="form-control" id="nombre" name="email" placeholder="Email address, ex:abc@gmail.com" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <FontAwesomeIcon icon={faSms} className="text-dark" />
                                            </div>
                                        </div>
                                        <textarea class="form-control" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <input type="submit" value="Send" class="btn btn-dark btn-block rounded-0 py-2" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
