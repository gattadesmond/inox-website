import { memo } from "react";
import cn from "classnames";

import NavBar from "./navbar";

const Header = ({ sticky = true }) => {
  return (
    <>
      <header id="header" className="header header-transparent">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="/images/logo/logo-light.png"
                className="logo-light"
                alt="logo"
              />
              <img
                src="/images/logo/logo-dark.png"
                className="logo-dark"
                alt="logo"
              />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines">
                <span />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav ml-auto">
                <li className="nav__item with-dropdown">
                  <a
                    href="index.html"
                    className="dropdown-toggle nav__item-link active"
                  >
                    Home
                  </a>
                  <i className="fa fa-angle-right" data-toggle="dropdown" />
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <a href="index.html" className="nav__item-link">
                        Home Moderm
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="home-classic.html" className="nav__item-link">
                        Home classic
                      </a>
                    </li>
                    {/* /.nav-item */}
                  </ul>
                  {/* /.dropdown-menu */}
                </li>
                {/* /.nav-item */}
                <li className="nav__item with-dropdown">
                  <a
                    href="about-us.html"
                    className="dropdown-toggle nav__item-link"
                  >
                    Company
                  </a>
                  <i className="fa fa-angle-right" data-toggle="dropdown" />
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <a href="about-us.html" className="nav__item-link">
                        About Us
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="why-us.html" className="nav__item-link">
                        Why Choose Us
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="leadership-team.html" className="nav__item-link">
                        Leadership Team
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="pricing.html" className="nav__item-link">
                        Pricing &amp; Plans
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="faqs.html" className="nav__item-link">
                        Help &amp; FAQs
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a href="careers.html" className="nav__item-link">
                        careers
                      </a>
                    </li>
                    {/* /.nav-item */}
                  </ul>
                  {/* /.dropdown-menu */}
                </li>
                {/* /.nav-item */}
                <li className="nav__item with-dropdown">
                  <a
                    href="Industries-industry-served.html"
                    className="dropdown-toggle nav__item-link"
                  >
                    Industries
                  </a>
                  <i className="fa fa-angle-right" data-toggle="dropdown" />
                  <ul className="dropdown-menu wide-dropdown-menu">
                    <li className="nav__item">
                      <div className="row mx-0">
                        <div className="col-sm-6 dropdown-menu-col">
                          <h6>Industries Served</h6>
                          <ul className="nav flex-column">
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Petroleum &amp; Gas
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Construction &amp; Engineering
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Mechanical Engineering
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Industrial Chemicals
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Automotive Manufacturing
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-industry.html"
                              >
                                Bridge Construction
                              </a>
                            </li>
                            {/* /.nav-item */}
                          </ul>
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6 dropdown-menu-col">
                          <h6>Industry Sectors</h6>
                          <ul className="nav flex-column">
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Retail &amp; Consumer
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Sciences &amp; Healthcare
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Industrial &amp; Chemical
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Power Generation
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Food &amp; Beverage
                              </a>
                            </li>{" "}
                            {/* /.nav-item */}
                            <li className="nav__item">
                              <a
                                className="nav__item-link"
                                href="industries-single-sector.html"
                              >
                                Oil &amp; Gas
                              </a>
                            </li>
                            {/* /.nav-item */}
                          </ul>
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.row */}
                    </li>
                    {/* /.nav-item */}
                  </ul>
                  {/* /.dropdown-menu */}
                </li>
                {/* /.nav-item */}
                <li className="nav__item with-dropdown">
                  <a
                    href="blog.html"
                    className="dropdown-toggle nav__item-link"
                  >
                    News &amp; Media
                  </a>
                  <i className="fa fa-angle-right" data-toggle="dropdown" />
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <a href="blog.html" className="nav__item-link">
                        Our Blog
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a
                        href="blog-single-post.html"
                        className="nav__item-link"
                      >
                        Single Blog Post
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a
                        href="case-studies-grid.html"
                        className="nav__item-link"
                      >
                        Case Studies Grid
                      </a>
                    </li>
                    {/* /.nav-item */}
                    <li className="nav__item">
                      <a
                        href="case-studies-single.html"
                        className="nav__item-link"
                      >
                        Single Case Study
                      </a>
                    </li>
                    {/* /.nav-item */}
                  </ul>
                  {/* /.dropdown-menu */}
                </li>
                {/* /.nav-item */}
                <li className="nav__item">
                  <a href="contacs.html" className="nav__item-link">
                    Contacts
                  </a>
                </li>
                {/* /.nav-item */}
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-modules">
              <ul className="list-unstyled d-flex align-items-center modules__btns-list">
                <li>
                  <a href="#" className="module__btn module__btn-search">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="d-none d-lg-block">
                  <a
                    href="request-quote.html"
                    className="btn btn__primary btn__bordered module__btn-request"
                  >
                    <span>Get A Quote</span>
                    <i className="fa fa-arrow-right" />
                  </a>
                </li>
                <li className="d-none d-lg-block">
                  <div className="module__btn module__btn-phone d-flex align-items-center">
                    <i className="fa fa-phone" />
                    <a href="tel:5565454117">55 654 541 17</a>
                  </div>
                </li>
              </ul>
              {/* /.modules-wrapper */}
            </div>
            {/* /.navbar-modules */}
          </div>
          {/* /.container */}
        </nav>
        {/* /.navabr */}
      </header>
      {/* /.Header */}

      <style jsx>{`
        header {
        }
        header.sticky {
           {
            /* position: sticky;
          top: 0; */
          }
        }
      `}</style>
    </>
  );
};

export default memo(Header);
