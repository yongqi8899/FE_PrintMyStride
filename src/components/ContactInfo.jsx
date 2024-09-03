import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="p-6 rounded-lg w-80">
      <h2 className="mb-4 text-2xl text-secondary">Contact Information</h2>
      <p className="mb-2 ">
        123 Example Street
        <br />
        Springfield, 12345
        <br />
        Germany
      </p>
      <p className="mb-2 ">Call Us: +49 555-123-4567</p>
      <p className="mb-4 ">
        We are open from Monday - Friday
        <br />
        09:00 am - 06:00 pm
      </p>
      <h3 className="mt-6 text-xl rounded-lg text-secondary">Follow Us</h3>
      <div className="flex justify-start gap-6 mt-2">
        <span className="cursor-pointer">
          <FaSquareFacebook fontSize="1.8em" />
        </span>
        <span className="cursor-pointer">
          <FaSquareInstagram fontSize="1.8em" />
        </span>
        <span className="cursor-pointer">
          <FaXTwitter fontSize="1.8em" />
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
