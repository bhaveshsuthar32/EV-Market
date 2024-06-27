import React from "react";

export function TwoWheeler() {
  return (
    <div className="list-content mb-5">
      <div className="container">
        <h5 className="text-lg font-semibold mb-4">E-Scooter In Your City</h5>
        <div className="row">
          <div className="col-lg-3">
            <div className="sticky top-0">
              <div className="bg-white p-4 rounded shadow-md">
                <div className="row border-b pb-4 mb-4 text-sm">
                  <div className="col">
                    <h6 className="flex items-center">
                      <img
                        src="path/to/details-icon.svg"
                        alt="details-icon"
                        className="mr-2"
                      />
                      Filter
                    </h6>
                  </div>
                  <div className="col">
                    <h6 className="text-primary text-right cursor-pointer">
                      Reset All
                    </h6>
                  </div>
                </div>

                <form>{/* Other form elements can be included here */}</form>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="count-search mb-4">
              <h4 className="text-lg font-semibold">
                Scooter for Sale <span className="text-sm">(Showing 82)</span>
              </h4>
              <p>There are 259 new Scooter available for sale online</p>
            </div>

            <div className="row sorting-div mb-4">
              <div className="col-lg-4 col-md-4 col-sm-4 flex items-center">
                <div className="count-search">
                  <p className="text-sm mb-2">Useful links:</p>
                  <div className="flex text-sm text-primary space-x-4">
                    <a href="#">Upcoming E-Scooter</a>
                    <a href="#">Popular New E-Scooter</a>
                    <a href="#">Latest New E-Scooter</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 flex items-center justify-end">
                <div className="sortbyset flex items-center">
                  <span className="sortbytitle mr-2">Sort by</span>
                  <div className="sorting-select">
                    <select className="form-control">
                      <option>Default</option>
                      <option>Price Low to High</option>
                      <option>Price High to Low</option>
                    </select>
                  </div>
                </div>
                <div className="grid-listview ml-4">
                  <ul className="flex space-x-4">
                    <li>
                      <a href="listing-list-sidebar.html">
                        <i className="feather-list"></i>
                      </a>
                    </li>
                    <li>
                      <a href="listing-grid-sidebar.html" className="active">
                        <i className="feather-grid"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid-view listgrid-sidebar mb-4">
              <div className="row">
                {/* Replace with dynamic data */}
                <div className="col-lg-4 col-md-5 mb-4">
                  <div className="card">
                    <div className="blog-widget">
                      <div className="blog-img">
                        <a href="#">
                          <img
                            src="path/to/scooter-image.jpg"
                            className="img-fluid h-48 w-full object-cover"
                            alt="blog-img"
                          />
                        </a>
                      </div>
                      <div className="bloglist-content">
                        <div className="card-body p-3">
                          <div className="amount-details mb-2 text-dark">
                            <span>Scooter Name</span>
                            <div className="ratings">
                              <span>New</span>
                            </div>
                          </div>
                          <div className="blogfeaturelink m-0">
                            <div className="blog-features mb-2">
                              <p>₹ Price</p>
                            </div>
                          </div>
                          <div className="blog-location-details mb-2">
                            <div className="location-info">
                              <p>Electric Color</p>
                              <img
                                src="path/to/color-icon.png"
                                alt=""
                                className="inline-block w-4 ml-2"
                              />
                            </div>
                            <div className="location-info">
                              <p>Interior Color</p>
                              <img
                                src="path/to/color-icon.png"
                                alt=""
                                className="inline-block w-4 ml-2"
                              />
                            </div>
                          </div>
                          <div className="blog-location-details grid grid-cols-4 gap-2 text-center text-xs text-black mb-2">
                            <div>
                              <img
                                src="path/to/logo-1.png"
                                alt=""
                                className="w-8 mx-auto"
                              />
                              <p>Motor Type</p>
                            </div>
                            <div>
                              <img
                                src="path/to/logo-2.png"
                                alt=""
                                className="w-8 mx-auto"
                              />
                              <p>Range</p>
                            </div>
                            <div>
                              <img
                                src="path/to/logo-3.png"
                                alt=""
                                className="w-8 mx-auto"
                              />
                              <p>ChargeTime</p>
                            </div>
                            <div>
                              <img
                                src="path/to/logo-4.png"
                                alt=""
                                className="w-8 mx-auto"
                              />
                              <p>Transmission</p>
                            </div>
                          </div>
                          <div className="blog-location-details grid grid-cols-4 gap-2 text-center text-xs text-dark mb-2">
                            <div>Motor Power</div>
                            <div>Range Charge</div>
                            <div>Charging Time</div>
                            <div>Automatic Transmission</div>
                          </div>
                          <div className="amount-details flex justify-between items-center mt-2">
                            <a
                              href="path/to/view-data"
                              className="bg-green-500 text-white text-xs py-1 px-4 rounded"
                            >
                              View Data
                            </a>
                            <div className="ratings mt-2">
                              <input type="checkbox" /> Add To Compare
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat this block for each scooter */}
              </div>
            </div>

            <div className="grid-view" id="budget_new">
              <h5 className="text-lg font-semibold mb-4">
                Have a specific Budget in mind?
              </h5>
              <div className="row text-sm">
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 30,000</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 40,000</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 50,000</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 70,000</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 1 Lakh</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 mb-2">
                  <button className="btn">Under 3 Lakh</button>
                </div>
              </div>

              <div className="row" id="btn_load">
                <button className="btn">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


