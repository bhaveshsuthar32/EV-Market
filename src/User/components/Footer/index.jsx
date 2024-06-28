import React from "react";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="stay-tuned">
            <h3>Stay Tuned With Us</h3>
            <p>
              Subscribe to our newsletter and never miss our latest news and
              promotions. Our newsletter is sent once a week, every Thursday.
            </p>
            <form>
              <div className="form-group">
                <div className="group-img">
                  <i className="feather-mail"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Top */}
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="#">
                      <img src="/assets/img/footerlogo.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p>
                      B-9, Ratnam Park, Nr Amin Party Plot,Nr C H Vidyalaya,
                      High Tension Road, Gotri, Baroda, Gujarat. 390023.{" "}
                    </p>
                  </div>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-2 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">EV Services</h2>
                  <ul>
                    <li>
                      <a href="/about.html">New EVs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Used EVs</a>
                    </li>
                    <li>
                      <a href="/service-details.html">Sell EV</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">EV Service</a>
                    </li>
                    <li>
                      <a href="/contact.html">Retrofitter</a>
                    </li>
                    <li>
                      <a href="/contact.html">Charging Points</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-2 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Service</h2>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">EV Spares</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">EV Jobs</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">EV Training</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">EV Startup</a>
                    </li>
                    <li>
                      <a href="/blog-list.html">Complaint</a>
                    </li>
                    <li>
                      <a href="/blog-list.html">Youtuber Reviews</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-2 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">About Us</h2>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Terms & Condition</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget">
                  <h2 className="footer-title">Communication</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <img src="/assets/img/call-calling.svg" alt="Callus" />
                      <p>
                        <span>Call Us</span> <br /> +91 &nbsp; 9586363303{" "}
                      </p>
                    </div>
                    <div className="footer-address">
                      <img src="/assets/img/sms-tracking.svg" alt="Callus" />
                      <p>
                        <span>Send Message</span> <br />{" "}
                        electricvehiclesknowledge@gmail.com{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
          {/* Footer Counter Section */}
          <div className="footercount">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,532</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,53264546</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,53264546</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>We Accept</p>
                  <ul className="d-flex">
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/amex-pay.svg"
                          alt="amex"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/apple-pay.svg"
                          alt="pay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/gpay.svg"
                          alt="gpay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/master.svg"
                          alt="paycard"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/phone.svg"
                          alt="spay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src="/assets/img/visa.svg"
                          alt="visa"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Counter Section */}
        </div>

        {/* /Footer Top */}

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    All Copyrights Reserved &copy; 2023 - Listee.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <a href="/privacy-policy.html">Privacy</a>
                    </li>
                    <li>
                      <a href="/faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="/terms-condition.html">Terms</a>
                    </li>
                  </ul>
                </div>
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
    </>
  );
}
