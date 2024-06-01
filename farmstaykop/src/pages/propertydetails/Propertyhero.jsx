import React from 'react'

const Propertyhero = () => {
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

</>
  )
}

export default Propertyhero