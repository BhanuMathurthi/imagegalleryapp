import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigate = useNavigate();
  const [imgname, setImgname] = useState("");
  return (
    <div>
      <header className="main-header ">
        {/* Landing page */}

        <div className="landing-main bgimage">
          <div
            className="landing-wrapper px-5 d-flex flex-column h-100 align-items-center
           justify-content-center text-center text-white "
          >
            <h1 className="display-9">
              Stunning free images & royalty free stock
            </h1>
            <h2 className="fs-5 fw-normal pt-3 pb-5">
              Over 2.6 million+ high quality stock images, videos and music
              shared by our talented community.
            </h2>
            <div class="input-group">
              <input
                onChange={(e) => setImgname(e.target.value)}
                type="text"
                class="form-control"
              />
              <button
                onClick={() => imgname && navigate(`/search/${imgname}`)}
                type="button"
                class="btn btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
