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
