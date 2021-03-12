import { memo } from "react";
import cn from "classnames";

import NavBar from "./navbar";

const Header = ({ sticky = true }) => {
  return (
    <>
      <header className={cn({ sticky })} id="site-header" className="header">
        <div className="top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="topbar-link text-left">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="mailto:themeht23@gmail.com">
                        <i className="far fa-envelope-open" />
                        themeht23@gmail.com
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="tel:+912345678900">
                        <i className="fas fa-mobile-alt" />
                        +91-234-567-8900
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 text-center">
                <div className="search-box">
                  <form
                    action="contact.html"
                    method="post"
                    className="form-inline my-2 my-lg-0"
                  >
                    <input
                      className="form-control"
                      required
                      type="search"
                      placeholder="Search"
                    />
                    <button className="btn" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 text-right">
                <div className="social-icons social-hover top-social-list text-right">
                  <ul className="list-inline">
                    <li className="social-facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-gplus">
                      <a href="#">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li className="social-twitter">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social-linkedin">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand logo" href="index.html">
                    <img
                      id="logo-img"
                      className="img-center"
                      src="images/logo.png"
                      alt=""
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    {/* Left nav */}
                    <ul className="nav navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link active dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Home
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="team-single.html">Team Details</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="error-page.html">Error 404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Solutions
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="chemical-research.html">
                              Chemical Research
                            </a>
                          </li>
                          <li>
                            <a href="energy-&-power-engineering.html">
                              Energy &amp; Power Engineering
                            </a>
                          </li>
                          <li>
                            <a href="petroleum-and-gas.html">
                              Petroleum and Gas
                            </a>
                          </li>
                          <li>
                            <a href="agriculture-engineering.html">
                              Agriculture Engineering
                            </a>
                          </li>
                          <li>
                            <a href="mechanical-engineering.html">
                              Mechanical Engineering
                            </a>
                          </li>
                          <li>
                            <a href="civil-engineering.html">
                              Civil Engineering
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown position-static">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Element
                        </a>
                        <ul className="dropdown-menu w-100 p-3">
                          <li className="container">
                            <div className="row w-100">
                              <div className="col-lg-4 col-12">
                                <ul className="list-unstyled">
                                  <li>
                                    <a href="shortcode-accordions.html">
                                      Accordion
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-button.html">Buttons</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-clients.html">Clients</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-counter.html">Counter</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-call-to-action.html">
                                      Call to action
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.col-md-4  */}
                              <div className="col-lg-4 col-12">
                                <ul className="list-unstyled">
                                  <li>
                                    <a href="shortcode-featured-box.html">
                                      Featured Box
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-tab.html">Tabs</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-blog-post.html">
                                      Post Style
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-pricing.html">
                                      Pricing tables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-progress-bar.html">
                                      Progress Bar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.col-md-4  */}
                              <div className="col-lg-4 col-12">
                                <ul className="list-unstyled">
                                  <li>
                                    <a href="shortcode-social-icon.html">
                                      Social icon
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-testimonials.html">
                                      Testimonials
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-team.html">Team</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-heading.html">
                                      Heading Style
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-typography.html">
                                      Typography
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          {/*  /.container  */}
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Blog Classic
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-fullwidth.html">Fullwidth</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Blog Grid
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="blog-grid-3.html">Grid 3</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Blog Masonry
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-masonry-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="blog-masonry-grid-3.html">Grid 3</a>
                              </li>
                              <li>
                                <a href="blog-masonry-fullwidth.html">
                                  Fullwidth
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Blog Single
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-details-left-sidebar.html">
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-right-sidebar.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-fullwidth.html">
                                  Fullwidth
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Project
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Project Grid
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="project-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="project-grid-3.html">Grid 3</a>
                              </li>
                              <li>
                                <a href="project-grid-4.html">Grid 4</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-submenu">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Project Masonry
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="project-masonary-grid-2.html">
                                  Grid 2
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-grid-3.html">
                                  Grid 3
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-grid-4.html">
                                  Grid 4
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-full-width.html">
                                  FullWidth
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Contact
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="contact-1.html">Contact 1</a>
                          </li>
                          <li>
                            <a href="contact-2.html">Contact 2</a>
                          </li>
                          <li>
                            <a href="contact-3.html">Contact 3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <NavBar />
      </header>

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
