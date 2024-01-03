import Image from "next/image";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

const Knowabout = () => {
  return (
    <div>
      <div>
        <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
        <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
        <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
        <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
        <div className="md:m-20 m-10 relative">
          <h1 className=" text-7xl font-anton bg-gradient-to-t from-purple-500 to-teal-500 text-transparent bg-clip-text text-center">
            About Us
          </h1>
          <p className="font-bold text-2xl md:px-20 pt-10 text-center ">
            Welcome to Know Organization , where excellence meets innovation. As
            a dynamic and forward-thinking organization, we take immense pride
            in our achievements, our unwavering vision, and the empowering
            working environment we&apos;ve cultivated.
          </p>
          {/* custom services */}
          <div className="md:w-full md:flex md:justify-center relative">
            <div className="w-full md:w-3/5  flex flex-col justify-center float-left">
              <h1 className=" text-4xl font-anton pt-20   md:px-20 pb-10 font-bold  float-left text-center lg:text-left">
                Our Achievements
              </h1>
              <p className=" md:px-20  md:text-lg text-center lg:text-left text-xl ">
                We&apos;ve carved out a remarkable journey filled with milestones
                that speak volumes about our dedication to excellence. From
                pioneering groundbreaking solutions in domain to collaborating
                with industry leaders, our achievements stand as a testament to
                our commitment to pushing boundaries and setting new standards.
                Our recognitions are a reflection of our team&apos;s relentless
                pursuit of excellence.
              </p>
            </div>

            {/* cs Image */}
            <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
              <div className="md:flex justify-center h-full items-center ">
                <Image
                  src={img1}
                  className="w-full md:w-3/4 lg:w-full"
                  alt="img"
                />
              </div>
            </div>
          </div>
          {/* web development */}

          <div className="md:w-full md:flex md:justify-center relative">
            <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
            <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
            <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
              <div className="md:flex  justify-center h-full items-center">
                <Image
                  src={img2}
                  className="w-full md:w-3/4 lg:w-full"
                  alt="img"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 md:p-10 py-10  lg:h-screen h-auto flex flex-col justify-center float-left ">
              <h1 className="text-4xl font-anton pt-20   pb-10 font-bold  float-left text-center lg:text-left">
                Our Vision
              </h1>
              <p className="  md:text-lg text-center lg:text-right text-xl ">
                At Know Organization, our vision is to create a world that
                thrives on innovation, sustainability, and positive change. We
                envision a future where our pioneering efforts lead the industry
                towards new horizons, where our solutions become benchmarks for
                excellence, and where our impact reverberates across global
                communities. <br />
                <br /> We see a future where technology and humanity harmonize
                to address the most pressing challenges of our time. Through our
                innovative products, services, solutions, we aim to reshape
                industry by transformation, elevating standards and inspiring
                others to follow suit. Our vision encompasses not only industry
                leadership but also a profound commitment to ethical practices
                and social responsibility. <br />
                <br /> As we journey forward, we remain dedicated to nurturing a
                culture of continuous learning and collaboration, where every
                member of our team is empowered to explore, experiment, and
                contribute their unique perspectives. Our vision extends beyond
                profit margins; it encompasses fostering an environment where
                innovation flourishes, diversity is celebrated, and collective
                efforts lead to meaningful progress. <br />
                <br /> Together with our partners, employees, and stakeholders,
                we are building a tomorrow that embodies our shared values, a
                future where the ripple effects of our actions today create a
                better and brighter reality for generations to come. This vision
                propels us to push boundaries, challenge conventions, and
                tirelessly pursue excellence in all that we do.
              </p>
            </div>
          </div>
          {/* application development */}
          <div className="md:w-full md:flex md:justify-center relative">
            <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
            <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>

            <div className="w-full md:w-3/5 lg:h-screen h-auto flex flex-col justify-center float-left">
              <h1 className=" text-4xl font-anton pt-20   pb-10 font-bold  float-left text-center lg:text-left">
                Our Working Environment
              </h1>
              <p className="  md:text-lg text-center lg:text-left text-xl ">
                We believe that the best results are born in an environment that
                fosters collaboration, creativity, and growth. Our team is our
                greatest asset, and we&apos;re committed to providing them with a
                workspace that&apos;s inspiring, inclusive, and supportive. With a
                culture that values diversity of thought and encourages open
                communication, we&apos;ve created a platform for every individual to
                flourish and contribute meaningfully. <br />
                <br />
                In our existence, we&apos;ve embraced innovation as part of our DNA.
                We encourage our team to challenge conventions, explore
                uncharted territories, and find ingenious solutions to complex
                challenges. With a strong emphasis on professional development,
                we offer continuous learning opportunities, mentorship, and room
                for advancement, ensuring that each team member&apos;s journey is
                marked by progress and accomplishment.
              </p>
            </div>

            {/* cs Image */}
            <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
              <div className="flex  justify-center h-full items-center">
                <Image
                  src={img3}
                  className="w-full md:w-3/4 lg:w-full"
                  alt="img"
                />
              </div>
            </div>
          </div>
          {/* devops */}
          <div className="md:w-full md:flex md:justify-center relative">
            <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
            <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
            <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>

            <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
              <div className="md:flex  justify-center h-full items-center">
                <Image
                  src={img4}
                  className="w-full md:w-3/4 lg:w-full"
                  alt="img"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 md:p-10 py-10  lg:h-screen h-auto flex flex-col justify-center float-left">
              <h1 className="text-4xl font-anton pt-20   pb-10 font-bold  float-left text-center lg:text-left">
                Join Us in Shaping the Future
              </h1>
              <p className="  md:text-lg text-center lg:text-left text-xl">
                We are not just focused on professional success; we are equally
                dedicated to making a positive impact on the communities we
                serve. Through our various corporate social responsibility
                initiatives, we strive to give back and create a better world.
                Whether it&apos;s through sustainability efforts, educational
                programs, or philanthropic partnerships, we believe in
                leveraging our success to drive meaningful change. We invite you
                to join us on our journey of innovation, achievement, and
                collaboration. Whether you&apos;re a prospective team member, a
                partner, or a stakeholder, together we can make a lasting impact
                on industry. Let&apos;s embark on a future where possibilities are
                limitless, and together, we&apos;ll continue to redefine success.
              </p>
            </div>
          </div>
          <p className="md:text-xl text-xl text-center font-montserrat pt-14">
            At Know. organization, our services are driven by a commitment to
            excellence, innovation, and customer satisfaction. Whether it&apos;s
            custom software, web development, application creation, or DevOps
            integration, we&apos;re here to empower your business with
            cutting-edge solutions tailored to your needs. Contact us today to
            discuss how we can transform your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Knowabout;
