import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2  w-full overflow-hidden z-[100] ">
      <div className="container mx-auto ">
        <div className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
