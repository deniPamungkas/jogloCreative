import Benefit from "@/components/card-benefit";
import CardService from "@/components/card-service";
import Footer from "@/components/footer";
import GradientBtn from "@/components/gradientBtn";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-white  h-[100vh] px-20 py-10">
        <div className="w-[400px] m-auto text-center flex flex-col gap-y-2">
          <span className="text-orange-600 font-bold"> WE ARE BETTER</span>
          <h1 className="text-2xl font-bold">FOR YOUR BUSSINESS</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            necessitatibus alias ad fugit.
          </p>
        </div>
        <br />
        <br />
        <div className="w-full grid grid-cols-3 gap-10">
          <Benefit />
          <Benefit />
          <Benefit />
          <Benefit />
          <Benefit />
          <Benefit />
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animilaborum impedit"
            }
            img={"images/landing-page.png"}
          />
          <CardService
            title={"Company Profile"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animilaborum impedit"
            }
            img={"images/company-profile.png"}
          />
          <CardService
            title={"Custom Page"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animilaborum impedit"
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
          <div className="p-24 flex flex-col gap-y-7 bg-primaryColor bg-opacity-70 absolute top-0 left-0 right-0 bottom-0 z-20">
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
