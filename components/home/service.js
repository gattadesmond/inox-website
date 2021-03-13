import { memo } from "react";
import cn from "classnames";
import Link from "next/link";

const ServiceList = [
  {
    name: "Phay – Tiện CNC",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-9-4637.png",
  },
  {
    name: "Đột – Dập CNC",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-189.png",
  },
  {
    name: "Chấn CNC",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-5801.png",
  },
  {
    name: "Gia công inox trang trí",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-9-213.png",
  },
  {
    name: "Cắt Laser Kim Loại",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-4556.png",
  },
  {
    name: "Khắc Laser",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-9507.png",
  },
  {
    name: " Bào  Rãnh V CNC",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-8097.png",
  },
  {
    name: " Robot Hàn Tig",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/anh-chup-man-hinh-2020-06-11-luc-10-9836.png",
  },
  {
    name: "Cắt Laser Ống Kim Loại",
    img:
      "https://inoxsaigon.com/thumb/270x220/1/upload/baiviet/cat-ong-6121.jpg",
  },
];

// console.log(ServiceList);

const ServiceItem = ({ img, name }) => {
  return (
    <div className="service__item">
      <Link href="/">
        <a className="link-absolute"></a>
      </Link>

      <div className="embed-responsive embed-responsive-4by3 rounded embed-img-hover">
        <img src={img} loading="lazy" className="embed-responsive-img" />
      </div>

      <div className="service__item__name font-heading">{name}</div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <section id="blogGrid" className="blog blog-grid pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading heading-2 text-center mb-50">
                <h2 className="heading__title">DỊCH VỤ</h2>

                <p className="">
                  Nhận gia công định hình: INOX – MICA – GỖ….. , cắt gia công cơ
                  khí chi tiết phức tạp với độ chính xác cao theo yêu cầu của
                  khách hàng
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {ServiceList &&
              ServiceList.map((item, index) => (
                <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
                  <ServiceItem img={item.img} name={item.name} />
                </div>
              ))}
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

export default Service;
