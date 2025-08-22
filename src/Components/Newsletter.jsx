import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="main_newsletter_container p-2 lg:p-6 absolute w-full translate-y-[-50%]">
      <div className="newsletter_content_container py-10 lg:py-16">
        <h3 className="font-bold text-xl text-center">
          Subscribe to our Newsletter
        </h3>
        <p className="text-[#595959] text-center my-3">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="w-fit mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-l-xl lg:w-[400px]"
          />
          <button className="rounded-r-xl">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
