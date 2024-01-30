import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className=" bg-white">
      <footer className=" relative bottom-0 left-0 right-0">
        <hr />
        <div className="ml-5 mr-5 mb-2">
          <div className="flex justify-between ">
            <div className=" font-extrabold text-[3.8rem]">
              <p>DICE</p>
              <p className="ml-20 mt-[-2.8rem]">GAME</p>
            </div>
            <div className="flex flex-col  justify-center w-64">
              <span className="text-2xl flex justify-center ">Contact Me</span>
              <ul className="flex justify-between ">
                <li className="hover:underline cursor-pointer">
                  <a href="https://www.facebook.com/anwit.dahal" target="_blank">
                    Facebook
                  </a>
                </li>
                <li className="hover:underline cursor-pointer">
                  <a href="https://www.instagram.com/anwit.dahal/" target="_blank">
                    Instagram
                  </a>
                </li>
                <li className="hover:underline cursor-pointer">
                  <a href="https://twitter.com/DahalAnwit" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex justify-between mt-2 text-gray-500">
            <div>
              <p>
                &#169;Copyright2024
                <a
                  href="https://www.anwitdahal.com.np"
                  target="_blank"
                  className="hover:underline"
                >
                  www.anwitdahal.com.np
                </a>
              </p>
            </div>
            <div className="flex justify-between w-52">
              <a href="https://www.facebook.com/anwit.dahal" target="_blank">
                <FaFacebook className="text-xl " />
              </a>
              <a href="https://github.com/AnwitDahal" target="_blank">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.instagram.com/anwit.dahal/" target="_blank">
                <BsInstagram className="text-xl" />
              </a>
              <a href="https://twitter.com/DahalAnwit" target="_blank">
                <FaTwitter className="text-xl" />
              </a>
              <a href="mailto:dahalanwit0707@gmail.com" target="_blank">
                <MdOutlineMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;