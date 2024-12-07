import { benefit } from "@/assets/constants";
import Benefit from "@/components/card-benefit";
import CardService from "@/components/card-service";
import Footer from "@/components/footer";
import GradientBtn from "@/components/gradientBtn";
import Header from "@/components/header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-white  h-[100vh] px-20 py-10">
        <div className="w-[400px] m-auto text-center flex flex-col gap-y-2 mb-14">
          <span className="text-thirdColor font-bold"> WE ARE BETTER</span>
          <h1 className="text-2xl font-bold">FOR YOUR BUSSINESS</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            necessitatibus alias ad fugit.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-8">
          {benefit.map((item) => {
            return (
              <Benefit
                key={item.label}
                img={item.img}
                label={item.label}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <section className="w-full h-[100vh] bg-white px-20">
        <div className="w-[400px] m-auto text-center flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi
            laborum impedit.
          </p>
        </div>
        <br />
        <br />
        <div className="flex justify-between">
          <CardService
            title={"Landing Page"}
            description={
              "Drive more conversions with a professionally designed landing page tailored to grab attention and inspire action. Enhance your digital marketing efforts with a fast, modern, and responsive design."
            }
            img={"images/landing-page.png"}
          />
          <CardService
            title={"Company Profile"}
            description={
              "Make a lasting first impression with an elegant and informative company profile website. Highlight your business strengths with stunning visuals and easy navigation for an exceptional user experience."
            }
            img={"images/company-profile.png"}
          />
          <CardService
            title={"Custom Page"}
            description={
              "Get a custom-built website designed specifically for your business needs. We deliver personalized solutions with advanced features, API integrations, and unique functionalities to support your business growth."
            }
            img={"images/custom-page.png"}
          />
        </div>
      </section>
      <section className="w-full h-[100vh] bg-white px-20 py-10">
        <div className="w-full h-[300px] rounded-xl overflow-hidden relative">
          <img
            src="images/bg-nego.jpg"
            alt="bg-nego"
            className="object-cover -translate-y-[300px]"
          />
          <div className="p-24 flex flex-col gap-y-6 bg-primaryColor bg-opacity-70 absolute top-0 left-0 right-0 bottom-0 z-20">
            <h1 className="text-3xl font-bold text-white">
              Free Consultation until reach agreement with Us
            </h1>
            <GradientBtn>Contact Us</GradientBtn>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
