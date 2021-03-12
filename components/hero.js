import { memo } from "react";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";

const Hero = ({ sticky = true }) => {
  return (
    <>
      <section
        className="banner p-0 pos-r fullscreen-banner text-center"
        style={{ height: "500px" }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="banner-slider owl-carousel no-pb"
        >
          {[1, 2, 3].map((item, index) => (
            <SwiperSlide
              key={index}
              className="item"
              style={{ backgroundImage: "url(/images/bg/01.jpg)" }}
              data-overlay={6}
            >
              <div className="align-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 mr-auto ml-auto">
                      <div
                        className="box-shadow px-5 xs-px-1 py-5 xs-py-2 banner-1 pos-r"
                        data-bg-color="rgba(255,255,255,0.030)"
                      >
                        <h5 className="text-white mb-3 letter-space-3 animated6">
                          Misto Industrial
                        </h5>
                        <h1 className="text-white mb-3 animated8">
                          Experience <span className="text-theme">And</span>{" "}
                          High
                          <span className="text-theme">Quality</span> Service
                        </h1>
                        <p className="lead text-white animated5 mb-3">
                          Misto has provide Best Service our amet,
                          <br />
                          consectetur adipisicing elit.
                        </p>
                        <a
                          className="btn btn-theme btn-radius animated7"
                          href="about-us.html"
                        >
                          Learn More
                        </a>
                        <a
                          className="btn btn-border btn-radius animated6"
                          href="contact-1.html"
                        >
                          Contact US
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

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

export default memo(Hero);
