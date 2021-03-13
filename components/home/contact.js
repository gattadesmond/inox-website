import { memo } from "react";
import cn from "classnames";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section
        id="contactLayout2"
        className="contact contact-layout2 pt-0   bg-gray"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="contact__panel">
                <div className="contact__panel-banner">
                  <img src="/images/banners/2.jpg" alt="banner img" />
                  <div className="cta__banner">
                    <p className="cta__desc">
                      <strong>
                        We will get back to you within 24 hours, or you can call
                        us everyday, 09:00 AM - 12:00 PM
                      </strong>
                    </p>
                    <div className="contact__number d-flex align-items-center">
                      <i className="icon-phone" />
                      <a href="tel:5565454117">55 654 541 17</a>
                    </div>
                  </div>
                </div>
                <form className="contact__form-panel">
                  <div className="row">
                    <div className="col-sm-12 contact__form-panel-header">
                      <h4>Get In Touch</h4>
                      <p>
                        Complete control over products allows us to ensure our
                        customers receive the best quality prices and service.
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <select className="form-control form-group w-100">
                          <option>Select Your Industry</option>
                          <option>Industry 1</option>
                          <option>Industry 2</option>
                        </select>
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Additional Details!"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* /.col-lg-12 */}
                    <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center">
                      <button
                        type="submit"
                        className="btn btn__secondary mr-30"
                      >
                        <span>Submit Request</span>
                        <i className="icon-arrow-right" />
                      </button>
                      <div className="input-radio">
                        <label className="label-radio">
                          I accept the privacy and terms.
                          <input
                            type="checkbox"
                            name="radioGroup2"
                            defaultChecked
                          />
                          <span className="radio-indicator" />
                        </label>
                      </div>
                    </div>
                    {/* /.col-lg-12 */}
                  </div>
                  {/* /.row */}
                </form>
              </div>
              {/* /.contact__panel */}
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact layout 1 */}

      <style jsx>{`
        header {
        }
      `}</style>
    </>
  );
};

export default Contact;
