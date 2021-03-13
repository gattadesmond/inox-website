import { memo } from "react";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";

const Hero = ({ sticky = true }) => {
  return (
    <>
    

      <section id="slider1" className="slider slider-1">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="banner-slide no-pb"
        >
          {[1, 2, 3].map((item, index) => (
            <SwiperSlide
              key={index}
              className="slide-item align-v-h bg-overlay bg-soju"
              style={{ backgroundImage: "url(https://inoxsaigon.com/upload/hinhanh/045891389322815vithumb_1366x752.jpg)" }}
              data-overlay={6}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <div className="slide__content text-left">
                      <h2 className="slide__title">
                      Bếp công nghiệp
                      </h2>
                      <p className="slide__desc">
                        We produce positive results from ever-growing Industrial
                        &amp; manufacturing estates, we have established a
                        corporate mandate to maintain strong core values.
                      </p>
                      <a
                        href="#"
                        className="btn btn__primary btn__hover2 mr-30"
                      >
                        <i className="fa fa-arrow-right" />
                        <span>About Us</span>
                      </a>
                      <a href="#" className="btn btn__white btn__bordered">
                        <i className="fa fa-arrow-right" />
                        <span>Our Services</span>
                      </a>
                    </div>
                    {/* /.slide-content */}
                  </div>
                  {/* /.col-xl-9 */}
                </div>
                {/* /.row */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <style jsx>{`
       
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
