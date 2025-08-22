import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-black lg:pt-48 pt-40">
      <div className="w-[95%] lg:w-[80%] mx-auto mb-7 lg:mb-9">
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co.com/gMhM2nhv/logo-footer.png"
            alt=""
          />
          {/* Footer Child Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mt-7 lg:mt-12 text-center lg:text-left">
            <div>
              <h2 className="text-white font-bold text-[18px]">About Us</h2>
              <p className="text-[#9b9da3] max-w-[291px] mx-auto lg:mx-0">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-white text-[18px] font-bold">Quick Links</h3>
              <ul>
                <li>
                  <a className="text-[#9b9da3]" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#9b9da3]" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-[#9b9da3]" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-[#9b9da3]" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-white">Subscribe</h3>
              <p className="max-w-[291px] text-[#9b9da3] mx-auto lg:mx-0">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="newsletter_letter_button mt-3">
                <input
                  className="rounded-l-lg lg:w-[70%] inline-block"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
                <button className="font-bold rounded-r-lg w-[30%]  inline-block mt-4 lg:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_container py-5 lg:py-8">
        <p className="text-[#9b9da3] text-center">
          @2025 Dream XI All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
