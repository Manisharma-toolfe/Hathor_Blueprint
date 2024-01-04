import Bg from "../assets/images/bg.avif";
import TwoImg from "../assets/images/2.png";
import ThreeImg from "../assets/images/3.png";
import Logo from "../assets/images/logo.jpg";
import { VscFoldDown } from "react-icons/vsc";

const Nav = () => {
  function myFun() {
    let menuEl = document.getElementById("menu");
    if (menuEl.classList.contains("hidden")) {
      menuEl.classList.remove("hidden");
    } else {
      menuEl.classList.add("hidden");
    }
  }

  return (
    <div className="services-section mx-auto relative">
      {/* <img className="w-full bg-cover" src={Bg} alt="" /> */}

      <div className="container">
        <div className="flex mt-1">
          <img
            className="lg:ml-3 w-[100px] lg:h-[100px]"
            src={Logo}
            alt="Logo"
          />
          <div className="my-auto mx-auto mr-12">
            <button className="lg:hidden" onClick={myFun}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-11 h-11 ml-[6rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <ul className="hidden lg:flex font-bold text-gray-600 my-auto mx-auto mr-0">
            <li className="pr-12">
              <button className="p-3 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  H o m e
                </span>
              </button>
            </li>
            <li className="pr-12">
              <button className="p-3 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  A B O U T
                </span>
              </button>
            </li>
            <li className="pr-12">
              <button className="p-3 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  P O R T F O L I O
                </span>
              </button>
            </li>
            <li className="pr-12">
              <button className="p-3 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  S E R V I C E S
                </span>
              </button>
            </li>
            <li className="pr-12">
              <button className="p-3 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  C O N T A C T
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden" id="menu">
          <ul className="lg:hidden text-gray-600 text-3xl">
            <li className="mt-6 ml-1 ">
              <a
                href="#"
                className="text-3xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Home
              </a>
            </li>
            <li className="mt-6 ml-1 ">
              <a
                href="#"
                className="text-3xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                About
              </a>
            </li>
            <li className="mt-6 ml-1 ">
              <a
                href="#"
                className="text-3xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Portfolio
              </a>
            </li>
            <li className="mt-6 ml-1 ">
              <a
                href="#"
                className="text-3xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Services
              </a>
            </li>
            <li className="mt-6 ml-1 ">
              <a
                href="#"
                className="text-3xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex py-12 lg:py-36">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#ccfe01] text-center lg:text-left text-5xl lg:text-8xl font-bold lg:font-semibold">
              HATHOR
            </h2>
            <p className="text-center text-5xl lg:text-8xl lg:text-left mt-4 lg:mt-3 font-bold lg:font-semibold">
              BLUEPRINT
            </p>
            <button className="Brightning-btn hidden lg:block p-3 mt-7 btn relative items-center justify-start">
              PERSONALIZED BUSINESS PLANNING
            </button>
          </div>

          <div className="flex flex-wrap">
            <div class="w-full z-50 lg:absolute bottom-0 top-[7rem] right-[12rem] bg-purple-50 rounded-2xl p-5 shadow-xl mt-10 lg:mt-0 lg:w-[450px] lg:h-[460px]">
              <img
                src={TwoImg}
                alt=""
                class="mx-auto rounded-2xl shadow-xl lg:w-[550px] lg:h-[250px]"
              />
              <h2 class="mt-5 text-3xl font-bold text-purple-900 text-center lg:text-left">
                GENERAL
              </h2>
              <p class="mt-2 text-gray-400 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                asperiores consequuntur quisquam atque, nemo exercitationem
                accusantium deleniti sit repudiandae rerum architecto ut qui
                inventore non. Mollitia tempore quasi explicabo? A!
              </p>
            </div>

            <div class="w-full lg:absolute bottom-0 top-[11rem] right-[2rem] bg-purple-50 rounded-2xl p-5 shadow-xl mt-10 lg:mt-0 lg:w-[450px] lg:h-[420px]">
              <img
                src={ThreeImg}
                alt=""
                class="mx-auto rounded-2xl lg:w-[450px] lg:h-[190px]"
              />
              <h2 class="mt-5 text-3xl font-bold text-purple-900 text-center lg:text-left">
                GENERAL
              </h2>
              <p class="mt-2 text-gray-400 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                asperiores consequuntur quisquam atque, nemo exercitationem
                accusantium deleniti sit repudiandae rerum architecto ut qui
                inventore non. Mollitia tempore quasi explicabo? A!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
        <VscFoldDown className="Scroll-icon w-[2rem] h-[2rem]" />
          <span className="Scroll-btn ml-2 text-xl font-semibold">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
