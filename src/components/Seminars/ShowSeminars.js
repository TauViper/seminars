import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";
import {API} from "../api";

const ShowSeminars = () => {
  const showUserApi = API;
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelDelete = async (id) => {
    console.log("id : -", id);
    setIsLoading(true);
    try {
       await fetch(showUserApi.concat("/") + id, {
        method: "DELETE",
      });
      setSeminars(seminars.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSeminars();
  }, []);

  const getSeminars = () => {
    axios
      .get(showUserApi)
      .then((res) => {
        setSeminars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(seminars)

  if (seminars.length < 0) {
    return <h1>no news found</h1>;
  } else {
    return (
      <div className="mt-5">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}

            {seminars?.map((item, ) => {
              return (
                  <div key={item.id}>
                    <ul  className={"list-group mt-5"}>
                      <li  className={'list-group-item d-flex flex-column'}>
                        <h2 className={'text-center justify-content-center'}>{item.title}</h2>
                        <p className={'text-align-justify text-break'}>{item.description}</p>
                        <p className={'text-align-justify text-break'}>{item.date}</p>
                        <p className={'text-align-justify text-break'}>{item.time}</p>
                        < img className={'d-flex justify-content-end'} src={item.photo} alt={item.title}/>
                      </li>
                      <div>
                        <Link to={`/edit-seminars/${item.id}`}>
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <Link to={`/seminars/${item.id}`}>
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>

                        <i
                            className="fa fa-trash-o"
                            aria-hidden="true"
                            onClick={() => handelDelete(item.id)}
                        ></i>
                      </div>
                    </ul>

                  </div>
              );

            })}
      </div>
    );
  }
};

export default ShowSeminars;
