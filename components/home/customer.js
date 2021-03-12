import { memo } from "react";
import cn from "classnames";

const Customer = () => {
  return (
    <>
      <section
        id="servicescarousel"
        className="services services-carousel pt-120 pb-90 bg-gray"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading heading-2 text-center mb-40">
                <span className="heading__subtitle">Dịch vụ</span>
                <h2 className="heading__title">Khách hàng của chúng tôi</h2>
              </div>
              {/* /.heading */}
            </div>
            {/* /.col-lg-10 */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
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
                   Trường học
                  </h4>
                  <p className="service__desc">
                    Petroleum and gas are nonrenewable sources of energy.
                    Petroleum is a liquid mixture found underground that can be
                    used to make gasoline, diesel fuel.
                  </p>
                
                </div>
                {/* /.service-content */}
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.Services carousel */}

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

export default memo(Customer);
