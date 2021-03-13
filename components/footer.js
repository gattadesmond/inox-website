import { memo } from "react";
import cn from "classnames";


const Footer = ({ sticky = true }) => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 footer__widget footer__widget-about">
                <h6 className="footer__widget-title">Quick Contact</h6>
                <div className="footer__widget-content">
                  <p className="color-gray">
                    If you have any questions or need help, feel free to contact
                    with our team.
                  </p>
                  <p className="footer__contact-phone">
                    <i className="icon-phone" />
                    <a href="tel:5565454117">55 654 54117</a>
                  </p>
                  <p>
                    2307 Beverley Rd Brooklyn, New York <br />
                    11226 United States.
                  </p>
                  <ul className="social__icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                  {/* /.social-icons */}
                </div>
              </div>
              {/* /.col-xl-3 */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 offset-xl-1 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Company</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="#">News &amp; Media</a>
                      </li>
                      <li>
                        <a href="#">Case Studies</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget-content */}
              </div>
              {/* /.col-xl-2 */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Industries</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Retail &amp; Consumer</a>
                      </li>
                      <li>
                        <a href="#">Sciences &amp; Healthcare</a>
                      </li>
                      <li>
                        <a href="#">Industrial &amp; Chemical</a>
                      </li>
                      <li>
                        <a href="#">Power Generation</a>
                      </li>
                      <li>
                        <a href="#">Food &amp; Beverage</a>
                      </li>
                      <li>
                        <a href="#">Oil &amp; Gas</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget-content */}
              </div>
              {/* /.col-xl-2 */}
              <div className="col-sm-12 col-md-10 col-lg-6 col-xl-4 footer__widget footer__widget-newsletter">
                <div className="footer__widget-content">
                  <p>
                    Sign up for industry alerts, our latest news, thoughts, and
                    insights from Koira.
                  </p>
                  <form className="widget__newsletter-form">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <button
                        type="submit"
                        className="btn btn__primary btn__hover2"
                      >
                        <i className="icon-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.footer-widget-content */}
                <p className="text-right fz-13 mt-20 mb-0">
                  You may withdraw your consent at any time!
                </p>
              </div>
              {/* /.col-xl-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="/images/logo/logo-footer.png" alt="logo" />
              </div>
              {/* /.col-lg-3 */}
              <div className="col-sm-12 col-md-9 col-lg-9 text-right">
                <div className="footer__copyright">
                  <nav>
                    <ul className="footer__copyright-links list-unstyled d-flex flex-wrap justify-content-end">
                      <li>
                        <a href="#">Terms &amp; Conditions </a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Employee login</a>
                      </li>
                    </ul>
                  </nav>
                  <p className="mb-0">
                    {" "}
                    © 2020 Koira, All Rights Reserved. With Love by
                    <a href="http://themeforest.net/user/7oroof">7oroof.com</a>
                  </p>
                </div>
                {/* /.Footer-copyright */}
              </div>
              {/* /.col-lg-9 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.Footer-bottom */}
      </footer>
      {/* /.Footer */}

      <style jsx>{``}</style>
    </>
  );
};

export default memo(Footer);
