import { memo } from "react";
import cn from "classnames";

const Product = () => {
  return (
    <>
      <section
        id="bannerLayout4"
        className="banner banner-layout4 bg-overlay bg-parallax bg-img"
        style={{ backgroundImage: "url(/images/banners/6.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading heading-2 text-center heading-white  mb-40">
                <h2 className="heading__title">Sản phẩm chủ lực</h2>
              </div>
            </div>

            <ul className="list-unstyle list-inline list-phanloai">
              <li className="list-inline-item">
                <span>Đồ dùng công nghiệp</span>
              </li>

              <li className="list-inline-item">
                <span>Đồ dùng y tế</span>
              </li>

              <li className="list-inline-item">
                <span>Đồ dùng nhà hàng khách sạn</span>
              </li>

              <li className="list-inline-item">
                <span>Đồ dùng gia dụng nhà bếp</span>
              </li>

              <li className="list-inline-item">
                <span>Thiết bị chế biến thực phẩm</span>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/1.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Petroleum &amp; <br /> Gas Energy
                  </h4>
                  <p className="service__desc">
                    Petroleum and gas are nonrenewable sources of energy.
                    Petroleum is a liquid mixture found underground that can be
                    used to make gasoline, diesel fuel.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/2.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Construction &amp; <br /> Engineering
                  </h4>
                  <p className="service__desc">
                    Construction engineering is a professional discipline deals
                    with designing, planning, construction of infrastructures
                    such as roads, tunnels, bridges, airports.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/3.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Auto &amp; Mechanical <br /> Engineering
                  </h4>
                  <p className="service__desc">
                    Mechanical engineering is the discipline that applies
                    engineering, physics, maths, and materials science
                    principles to design, analyze, manufacture, and maintain.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/4.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Basic &amp; Industrial <br /> Chemicals
                  </h4>
                  <p className="service__desc">
                    Construction engineering is a professional discipline deals
                    with designing, planning, construction of infrastructures
                    such as roads, tunnels, bridges, airports.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/5.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Automotive <br /> Manufacturing
                  </h4>
                  <p className="service__desc">
                    Construction engineering is a professional discipline deals
                    with designing, planning, construction of infrastructures
                    such as roads, tunnels, bridges, airports.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img
                    src="/images/services/6.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                {/* /.service-img */}
                <div className="service__content">
                  <h4 className="service__title">
                    Bridge <br /> Construction
                  </h4>
                  <p className="service__desc">
                    Mechanical engineering is the discipline that applies
                    engineering, physics, maths, and materials science
                    principles to design, analyze, manufacture, and maintain.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.service-content */}
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
          </div>
        </div>
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

export default Product;
