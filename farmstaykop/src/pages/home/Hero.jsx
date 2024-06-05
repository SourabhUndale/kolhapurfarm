import React from 'react'



const Hero = () => {
    return (
        <>


            {/* <!-- Header Start --> */}
            {/* <div className="container-fluid header bg-white p-0" style={{ "marginTop": "50px" }}>
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-5">
                        <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                        <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                    </div>
                    

                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="/assets/img/property-1.jpg" alt="" />
                            </div>
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="/assets/img/property-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Header End --> */}
            <div id="landing">
                <div className="svg-wrapper">
                    <a id="jump" href="#portfolio">
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="60" width="320" />
                            {/* <h2>F.hsdhs</h2> */}
                            {/* <div className="text">F. Agnoletto</div> */}
                        </svg></a>
                    <h2 className='text'>Kolhapur</h2>
                </div>
            </div>
            {/* <div id="portfolio">
                <div id="port-wrapper">
                    <div className="text-2">
                        <button id="first" href="#text-changer-1"><h2>About me</h2></button>
                        <button id="second" href="#text-changer-2"><h2>Portfolio</h2></button>
                        <button id="third" href="#text-changer-3"><h2>Contacts</h2></button>
                        <div id="text-changer-1" className="content">
                            <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/497606/profile/profile-512_1.jpg" width="100px" align="left" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div id="text-changer-2" className="content row">
                            <div className="col-sm-3 col-xs-6">Project 1<br /><div className="project"></div></div>
                            <div className="col-sm-3 col-xs-6">Project 2<br /><div className="project"></div></div>
                            <div className="col-sm-3 col-xs-6">Project 3<br /><div className="project"></div></div>
                            <div className="col-sm-3 col-xs-6">Project 4<br /><div className="project"></div></div>
                        </div>
                        <div id="text-changer-3" className="content">
                            <p>Get in touch or follow me at:<br />
                                <div className="social">
                                    <a href="https://twitter.com/fragno92" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                                    <a href="https://github.com/Kornil" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                                    <a href="https://codepen.io/Kornil" target="_blank"><i className="fa fa-codepen fa-2x" aria-hidden="true"></i></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- Search Start --> */}
            <div id='search' className="container-fluid  mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ "padding": "35px" }}>
                <div className="container" >
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Property Type</option>
                                        <option value="1">Property Type 1</option>
                                        <option value="2">Property Type 2</option>
                                        <option value="3">Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}

            <div id="parallax-world-of-ugg">

                <section>
                    <div className="title">
                        <h3>Let's do some</h3>
                        <h1>PARALLAX</h1>
                    </div>
                </section>


                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div id="propertyCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/assets/img/property-1.jpg" class="d-block w-100" alt="Property Image 1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets/img/property-1.jpg" class="d-block w-100" alt="Property Image 2" />
                                    </div>

                                </div>
                                <a class="carousel-control-prev" href="#propertyCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#propertyCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                            <div class="additional-images mt-3">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="/assets/img/property-1.jpg" alt="Property Image 3" />
                                    </div>
                                    <div class="col-md-4">
                                        <img src="/assets/img/property-1.jpg" alt="Property Image 4" />
                                    </div>
                                    <div class="col-md-4">
                                        <img src="/assets/img/property-1.jpg" alt="Property Image 5" />
                                    </div>

                                </div>
                            </div>

                            <div class="property-details mt-3">
                                <h2>Beautiful Family House</h2>
                                <p>Located in a serene environment, this beautiful family house offers a perfect blend of comfort and luxury. It features 4 bedrooms, 3 bathrooms, a spacious living room, and a modern kitchen.</p>
                                <p>With a large backyard, a two-car garage, and proximity to schools and shopping centers, this house is perfect for families looking for a new home.</p>
                                <p class="price">$350,000</p>
                                <a href="mailto:info@realestate.com" class="contact">Contact Us for More Info</a>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3>Request More Information</h3>
                            <form>
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone:</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter your phone number" />
                                </div>
                                <div class="form-group">
                                    <label for="message">Message:</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                            <div class="advertisement mt-3">
                                <h4>Advertisement</h4>
                                <p>This is an advertisement space. You can add any content or advertisement here.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-xxl py-5">
                    <div className="container">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">


                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="/assets/img/property-4.jpg" alt="" /></a>
                                                <div className=" rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="/assets/img/property-5.jpg" alt="" /></a>
                                                <div className=" rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href=""><img className="img-fluid" src="/assets/img/property-6.jpg" alt="" /></a>
                                                <div className=" rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                        <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <section>
                    <div className="parallax-two">
                        <h2>NEW YORK</h2>
                    </div>
                </section>

                {/* <section>
    <div className="block">
      <p><span className="first-character ny">B</span>reaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
      <p className="line-break margin-top-10"></p>
      <p className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
    </div>
  </section> */}




                {/*   
  <section>
    <div className="block">
      <p><span className="first-character atw">W</span>hen the New York fashion community notices your brand, the world soon follows. The widespread love for UGG extended to Europe in the mid-2000's along with the stylish casual movement and demand for premium casual fashion. UGG boots and shoes were now seen walking the streets of London, Paris and Amsterdam with regularity. To meet the rising demand from new fans, UGG opened flagship stores in the UK and an additional location in Moscow. As the love spread farther East, concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an international brand that is loved by all. This love is a result of a magical combination of the amazing functional benefits of sheepskin and the heightened emotional feeling you get when you slip them on your feet. In short, you just feel better all over when you wear UGG boots, slippers, and shoes.</p>
      <p className="line-break margin-top-10"></p>
      <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
    </div>
  </section> */}

            </div>

        </>
    )
}

export default Hero