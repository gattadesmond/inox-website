import { memo } from "react";
import cn from "classnames";
import Link from "next/link";

const TinTucItem = ({ img, name }) => {
  return (
    <>
      <div className="blog-item">
        <div className="blog__img">
          <Link href="/">
            <a className="">
              <img src="/images/blog/grid/1.jpg" alt="blog image" />
            </a>
          </Link>
        </div>
        {/* /.entry-img */}
        <div className="blog__content">
          <div className="blog__meta">
            <span className="blog__meta-date">Jan 20, 2019</span>
            <div className="blog__meta-cat">
              <Link href="/">
                <a>Nhôm Inox</a>
              </Link>
            </div>
            {/* /.blog-meta-cat */}
          </div>
          {/* /.blog-meta */}
          <h4 className="blog__title">
            <Link href="/">
              <a>Importers achieve cost savings through the First Sale rule!</a>
            </Link>
          </h4>
          <p className="blog__desc">
            The trade war currently ensuing between the US and several nations
            around the globe, most fiercely with China, shows no signs of the
            first set of tariffs levied against solar...
          </p>
          <Link href="/">
            <a className="btn btn__secondary btn__link">
              <span>Xem thêm</span>
              <i className="fa fa-arrow-right" />
            </a>
          </Link>
        </div>
        {/* /.entry-content */}
      </div>
    </>
  );
};

const TinTuc = () => {
  return (
    <>
      <section id="blogGrid" className="blog blog-grid pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading heading-2 text-center mb-50">
                <h2 className="heading__title">Tin tức</h2>
              </div>
            </div>
          </div>
          {/* /.row*/}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <TinTucItem />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        header {
        }
      `}</style>
    </>
  );
};

export default TinTuc;
