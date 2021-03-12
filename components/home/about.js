import { memo } from "react";
import cn from "classnames";

const About = ({ sticky = true }) => {
  return (
    <>
      <section id="aboutLayout1" className="about about-layout1 pt-70 pb-70 bg-metal" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about__img">
                <img
                  src="https://inoxsaigon.com/thumb/578x378/1/upload/hinhanh/e87ea37743a4befae7b5-988.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="cta__banner">
                  <div className="cta__icon">
                    <i className="icon-factory-2" />
                  </div>
                  <h5 className="cta__title">
                    Building The Future, Restoring The Past
                  </h5>
                  <p className="cta__desc">
                    One of the World's leading Industry Corporation!
                  </p>
                  <a href="#" className="btn btn__white btn__link">
                    <i className="icon-arrow-right" />
                  </a>
                </div>
              </div>
              {/* /.about__img */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading heading-2 mt-50 mb-30">
                <span className="heading__subtitle">GIỚI THIỆU</span>
                <h2 className="heading__title">INOX SÀI GÒN</h2>
                <p className="heading__desc">
                  <strong>INOXSAIGON</strong> trước năm 2000 là một cơ sở gia công chuyên ngành
                  INOX, sản phẩm thép không rỉ mà Việt Nam cũng như các Quốc Gia
                  lân cận có khí hậu ẩm thấp ưa chuộng, INOX còn được gọi là
                  STAINLESS STEEL cũng chiếm thị phần đáng kể tại Châu Âu cũng
                  như Úc Châu. Nhìn thấy được thị trường tiềm năng ấy,
                  INOXSAIGON luôn luôn cố gắng, học hỏi, nâng cao kiến thức, du
                  nhập kỹ thuật, máy móc hiện đại cùng với đội ngũ Kỹ Sư, Nhà
                  Thiết Kế, Công Nhân ưu tú đưa đến khách hàng sản phẩm INOX
                  hoàn hảo, tuyệt vời và đặt tôn chỉ: Chất lượng, thành tín, hậu
                  mãi lên hàng đầu. Sản phẩm đạt tiêu chuẩn TCVN
                  ISO9001:2015/ISO: 9001:2015
                </p>
              </div>
              {/* /heading */}
              <a href="#" className="btn btn__secondary mr-30">
                <i className="fa fa-arrow-right" />
                <span>Xem thêm</span>
              </a>
              <img
                src="https://inoxsaigon.com/images/quatest.png"
                alt="singnture"
                className="signature img-fluid"
                style={{width: "80px"}}
              />
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.About layout 1 */}

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

export default memo(About);
