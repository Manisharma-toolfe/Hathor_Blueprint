import One from "../assets/images/1.avif";
import Two from "../assets/images/2.avif";
import Three from "../assets/images/3.avif";

const OurServices = () => {
  return (
    <div className="mt-12">
      <div className="lg:flex lg:mr-[12rem] lg:px-12">
        <h2 className="ml-[1rem] lg:ml-[10rem] lg:text-right text-center font-extrabold text-6xl mr-5 pr-5 lg:border-r border-gray-100">
          <span className="text-yellow-300 lg:text-white">
            {" "}
            OUR <br />
          </span>
          SERVICES
        </h2>
        <p className="lg:mt-1 p-10 lg:p-0 text-left leading-6 lg:leading-9">
          Our comprehensive services cover company registration, smooth
          incorporation, in-depth analysis, and financial guidance for a
          prosperous future. With exclusive insights and growth strategies, we
          drive your success. We also offer exit planning to ensure a smooth
          transition. Your goals are our roadmap to success.
        </p>
      </div>

      <div className="mx-auto mt-[1rem] lg:mt-[3rem] services-tagline text-3xl leading-9 lg:leading-snug w-[20rem] h-[23rem] lg:w-[70rem] lg:h-[30rem]">
        <h2 className="mt-5 text-[#ccfe01] text-center hidden lg:block lg:text-8xl font-bold lg:font-semibold">
          BUSINESS PLANNING
        </h2>
        <p className="my-[1rem] lg:my-[12rem] mx-[1rem] lg:mx-[6rem] text-left">
          Streamline Your Business Journey With Hassle-Free Company Registration
          Services. We Handle The Paperwork, So You Can Focus On What Matters
          Most
        </p>
      </div>

      <h3 className="service-packages-heading text-center text-6xl text-[#ccfe01] my-[3.5rem] font-semibold">OUR SERVICE PACKAGES</h3>
      <div className="service-cards ">
        <div className="service-card  hover:box-content hover:border-green-500 service-card:hover">
          <img
            className="mx-auto rounded-2xl shadow-xl w-[150px] h-[100px] lg:w-[200px] lg:h-[150px]"
            src={One}
          />
          <h1 className="service-card-h1">StartUp</h1>
          <p className="service-card-p"> Starting at</p>
          <p className="text-black font-extrabold">$599/mo</p>
          <p className="service-card-p">Lorem ipsum dolor</p>
          <button className="p-1 lg:p-2 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-green-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              TALK TO AN EXPERT
            </span>
          </button>
          <ul className="service-card-ul">
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="service-card box-border hover:box-content hover:border-green-500 service-card:hover">
          <img
            className="mx-auto rounded-2xl shadow-xl w-[150px] h-[100px] lg:w-[200px] lg:h-[150px]"
            src={Two}
          />
          <h1 className="service-card-h1">Growth</h1>
          <p className="service-card-p">Starting at</p>
          <p className="text-black font-extrabold">$1,499/mo</p>
          <p className="service-card-p">Lorem ipsum dolor</p>
          <button className="p-1 lg:p-2 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-green-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              TALK TO AN EXPERT
            </span>
          </button>
          <ul className="service-card-ul">
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
            <li className="service-card-li">
              Etiam sodales ac felis id interdum
            </li>
          </ul>
        </div>
        <div className="service-card box-border hover:box-content hover:border-green-500 service-card:hover">
          <img
            s
            className="mx-auto rounded-2xl shadow-xl w-[150px] h-[100px] lg:w-[200px] lg:h-[150px]"
            src={Three}
          />
          <h1 className="service-card-h1">Enterprise</h1>
          <p className="service-card-p">Starting at</p>
          <p className="text-black font-extrabold">$2,499/mo</p>
          <p className="service-card-p">Lorem ipsum dolor</p>
          <button className="p-1 lg:p-2 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-green-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              TALK TO AN EXPERT
            </span>
          </button>
          <ul className="service-card-ul">
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
            <li className="service-card-li">Learn ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
