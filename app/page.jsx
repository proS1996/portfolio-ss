import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  // const downloadPdf = () => {
  //   const pdfUrl = "https://example.com/yourfile.pdf"; // Replace with your actual PDF URL
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Vijay_Chandoliya_CV.pdf"; // Specify the file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none flex flex-col gap-2">
            <span className="text-xl">Senior UX Designer & Design Leader</span>
            <h2>
              Hello I&apos;m <br />
            </h2>
            <h1 className="h1 mb-6">
              <span className=" text-accent">Vijay Chandoliya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-6">
              Results-driven Senior UX Designer with 5+ years of experience in
              creating user-centered designs for web and mobile applications.
              Proven expertise in leading design teams, conducting user
              research, and implementing design systems that enhance user
              experience and drive business goals. Adept at transforming complex
              ideas into intuitive and visually appealing interfaces, with a
              strong focus on usability and functionality.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                // onClick={downloadPdf}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
