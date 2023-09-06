import Image from "next/image";
import cs from "../../assets/images/cs.png";
import wd from "../../assets/images/wd.png";
import ad from "../../assets/images/ad.png";
import dev from "../../assets/images/dev.png";
const Knowservices = () => {
  return (
    <div>
      <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
      <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
      <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
      <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
      <div className="md:m-20 m-10 relative">
        <h1 className=" text-7xl font-anton bg-gradient-to-t from-purple-500 to-teal-500 text-transparent bg-clip-text text-center">
          What We Do
        </h1>
        {/* custom services */}
        <div className="md:w-full md:flex md:justify-center relative">
          <div className="w-full md:w-3/5 lg:h-screen h-auto flex flex-col justify-center float-left">
            <h1 className=" text-4xl font-anton pt-20   md:px-20 pb-10 font-bold  float-left text-center lg:text-left">
              Custom Software Development
            </h1>
            <p className=" md:px-20  md:text-lg text-center lg:text-left text-xl font-anton">
              At Know. organization , we recognize that your business is unique,
              and so are your software needs. Our custom software services are
              designed to create tailored solutions that perfectly align with
              your goals and processes. We follow a comprehensive process to
              ensure the success of your project: <br /> <br />
              <b className="text-xl">Requirements Gathering:</b>
              Our experts collaborate with you to deeply understand your
              business objectives, workflows, and challenges. This enables us to
              define clear and precise requirements for your custom software.{" "}
              <br />
              <b className="text-xl">Design and Architecture:</b>
              Our skilled designers and architects translate your requirements
              into a well-thought-out software design. We focus on creating
              intuitive user interfaces, robust system architecture, and
              scalability to accommodate future growth. <br />
              <b className="text-xl">Development and Testing:</b>
              Our experienced development team leverages cutting-edge
              technologies to bring your software to life. Rigorous testing
              ensures that every feature functions seamlessly and reliably.{" "}
              <br />
              <b className="text-xl">Customization and Flexibility:</b>
              We build software that evolves with your business. Our solutions
              are highly customizable, allowing you to adapt to changing
              requirements and market dynamics. <br />
              <b className="text-xl">Quality Assurance:</b>
              Thorough testing and quality checks are integral to our process.
              We identify and address any issues before deployment, ensuring a
              flawless end product. <br />
              <b className="text-xl">Deployment and Support:</b>
              We manage the deployment process to minimize disruptions. After
              launch, we provide ongoing support and maintenance to keep your
              software running smoothly. <br />
            </p>
          </div>

          {/* cs Image */}
          <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
            <div className="md:flex justify-center h-full items-center ">
              <Image src={cs} className="w-full md:w-3/4 lg:w-full" alt="img" />
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
              <Image src={wd} className="w-full md:w-3/4 lg:w-full" alt="img"/>
            </div>
          </div>
          <div className="w-full md:w-3/5 md:p-10 py-10  lg:h-screen h-auto flex flex-col justify-center float-left ">
            <h1 className="text-4xl font-anton pt-20   pb-10 font-bold  float-left text-center lg:text-left">
              Web Development
            </h1>
            <p className="  md:text-lg text-center lg:text-left text-xl font-anton">
              Our web development services are aimed at creating dynamic,
              responsive, and user-friendly websites that make a lasting impact:
              <br />
              <br />
              <b className="text-xl">Front-End Development:</b>
              Our front-end developers combine creativity and functionality to
              craft visually appealing and intuitive user interfaces. We ensure
              seamless navigation and engaging user experiences across devices.
              <br />
              <b className="text-xl">Back-End Development:</b>
              Our skilled back-end developers build the backbone of your
              website, focusing on data management, security, and performance
              optimization.
              <br />
              <b className="text-xl">E-Commerce Solutions:</b>
              If you&apos;re looking to establish an online store, we create robust
              e-commerce platforms that facilitate seamless transactions,
              inventory management, and customer engagement. <br />
              <b className="text-xl">Content Management Systems (CMS):</b>
              We specialize in developing custom CMS solutions that allow you to
              effortlessly manage and update your website content.
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
              Application Development
            </h1>
            <p className="  md:text-lg text-center lg:text-left text-xl font-anton">
              Our application development services cover a wide spectrum of
              platforms and technologies: <br />
              <br />
              <b className="text-xl">Mobile App Development:</b>
              We create stunning and feature-rich mobile apps for iOS and
              Android platforms. From concept to launch, we ensure your app
              stands out in the app stores. <br />
              <b className="text-xl">Desktop Application Development:</b>
              Our desktop applications combine functionality with ease of use,
              catering to various operating systems and user requirements.{" "}
              <br />
              <b className="text-xl">Cross-Platform Development:</b>
              We utilize frameworks that enable us to develop applications that
              run seamlessly across multiple platforms, saving time and
              resources.
            </p>
          </div>

          {/* cs Image */}
          <div className="w-full md:w-2/5 md:flex hidden justify-center py-10 md:py-0 lg:h-screen h-auto items-center">
            <div className="flex  justify-center h-full items-center">
              <Image src={ad} className="w-full md:w-3/4 lg:w-full" alt="img" />
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
              <Image src={dev} className="w-full md:w-3/4 lg:w-full" alt="img" />
            </div>
          </div>
          <div className="w-full md:w-3/5 md:p-10 py-10  lg:h-screen h-auto flex flex-col justify-center float-left">
            <h1 className="text-4xl font-anton pt-20   pb-10 font-bold  float-left text-center lg:text-left">
              DevOps Consultation, Adoption, and Migration:
            </h1>
            <p className="  md:text-lg text-center lg:text-left text-xl font-anton">
              We offer comprehensive DevOps services to optimize your
              development and deployment processes: <br />
              <br />
              <b className="text-xl">Consultation:</b>
              Our DevOps experts analyze your existing processes, tools, and
              workflows to identify areas for improvement. We provide strategic
              guidance on how to streamline development and operations. <br />
              <b className="text-xl">Adoption: </b>
              We help you transition to a DevOps culture, fostering
              collaboration between development and IT operations teams. This
              results in faster development cycles, improved quality, and
              enhanced customer experiences. <br />
              <b className="text-xl">Migration:</b>
              If you&apos;re considering migrating your applications to the cloud, we
              ensure a smooth transition. Our team handles migration tasks,
              ensuring minimal downtime and maximum efficiency. <br />
            </p>
          </div>
        </div>
        <p className="md:text-2xl text-xl text-center font-montserrat pt-14">
          At Know. organization, our services are driven by a commitment to
          excellence, innovation, and customer satisfaction. Whether it&apos;s custom
          software, web development, application creation, or DevOps
          integration, we&apos;re here to empower your business with cutting-edge
          solutions tailored to your needs. Contact us today to discuss how we
          can transform your ideas into reality.
        </p>
      </div>
    </div>
  );
};

export default Knowservices;
