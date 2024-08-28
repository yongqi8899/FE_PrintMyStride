import img from "@/assets/img/shoe.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-wrap gap-10 m-10 md:flex-nowrap">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold">INTRODUCTION</h2>
        <div className="flex gap-10">
          <h2 className="text-4xl font-thin">TO PrintMyStride</h2>
          <div class="flex items-center space-x-2 z-1">
            <div class="border-t-2 border-dashed border-base-content w-20 md:w-55"></div>
            <div class="transform rotate-45 border-t-2 border-r-2 border-base-content w-3 h-3 z-1"></div>
          </div>
        </div>
        <div className="mt-6">
          <img src={img} alt="a image about shoe" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <p>
          PrintMyStride is on a mission to revolutionize the way we think about
          footwear and walking posture. Incorrect walking habits can lead to
          serious health issues, including joint pain, muscle strain, and
          long-term discomfort. Unfortunately, the current market is filled with
          products that either lack comfort, style, or the necessary
          customization to truly address these issues. At PrintMyStride, we
          believe you shouldn't have to compromise. That's why we've developed a
          unique solution—3D-printed, custom shoes that not only correct your
          walking posture but also ensure maximum comfort and style. Our goal is
          to provide footwear that helps you step confidently into a healthier,
          more comfortable future.
        </p>
        <h3 className="mt-10 text-xl font-bold">ABOUT</h3>
        <h2 className="mt-5 text-xl">PrintMyStride</h2>
        <p className="mt-4">
          PrintMyStride is a pioneering footwear brand dedicated to solving the
          challenges posed by incorrect walking posture. We combine advanced 3D
          printing technology with a deep understanding of biomechanics to
          create custom-made shoes that are tailored to each individual’s unique
          needs. Our innovative approach allows us to deliver footwear that not
          only improves posture but also excels in comfort and style. We
          identified a significant gap in the market—existing products designed
          to correct walking posture are often uncomfortable, unattractive, and
          lack the necessary personalization to be truly effective. At
          PrintMyStride, we’re changing that narrative. Our shoes are crafted
          with precision, ensuring they fit perfectly and provide the support
          needed to maintain proper alignment. By offering highly customizable
          options, we make sure that you no longer have to choose between
          aesthetics, comfort, and effectiveness. At PrintMyStride, we believe
          that everyone deserves to walk with confidence, free from pain and
          discomfort. Our mission is to empower you to take every step
          comfortably and stylishly, with footwear that’s as unique as you are.
        </p>
        <Link
          to="/contact"
          role="button"
          className="w-2/3 mt-5 btn btn-gradient-blue"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};
export default About;
