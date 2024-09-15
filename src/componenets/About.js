import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  library.add(fab, fas, far);
  return (
    <>
      <div className="about px-5 md:px-10 py-10 text-lg md:text-2xl font-basic text-white font-medium text-center">
        <p>
          Welcome to Snippy! 🚀 We’re here to simplify your coding with a
          treasure trove of handy code snippets for all your development needs.
          Whether you’re working with JavaScript, CSS, React, or Node.js, we’ve
          got you covered with easy-to-use snippets to speed up your projects.
          Explore, share, and get inspired by our user-friendly platform. Happy
          coding! 💻✨
        </p>
      </div>

      <div className="contact flex justify-center text-white text-xl md:text-3xl font-basic font-semibold py-5">
        <p>Contact me!</p>
      </div>

      <div className="flex justify-center py-5 md:py-10">
        <ul className="flex flex-row gap-3 md:gap-5">
          <a
            href="https://github.com/Harrybbbb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                style={{ color: "white" }}
                size="2x md:3x"
                beatFade
              />
            </li>
          </a>
          <a
            href="https://www.instagram.com/harry_birla04?igsh=NGtjNmYxcDh6eHE3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                style={{ color: "white" }}
                size="2x md:3x"
                beatFade
              />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/dev-harsh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                style={{ color: "white" }}
                size="2x md:3x"
                beatFade
              />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
