import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=27093480-16431ed1c2ea3dfe9a653ecdf&q=${params.imgname}&image_type=photo`
      )
      .then((res) => setData(res.data.hits));
  }, [params.imgname]);

  return (
    <div>
      <div className="row">
        {data &&
          data.map((imgObj) => {
            return (
              <div className="col-md-3">
                <div className="card m-3">
                  <img
                    className="card-img-top "
                    src={imgObj.largeImageURL}
                    height="200"
                    width="200"
                    alt="search results"
                  />
                  <div className="card-body">
                    {" "}
                    <h5 className="fs-5 text-center">{imgObj.tags}</h5>{" "}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
