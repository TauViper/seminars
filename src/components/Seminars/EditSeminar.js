import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./Seminars.css";
import {API} from "../api";
const EditSeminar = () => {
  const [seminars, setSeminars] = useState( []);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getApi = API;

  useEffect(() => {
    getSeminars();
  }, []);

  const getSeminars = () => {
    axios
      .get(getApi.concat("/") + id)
      .then((item) => {
        setSeminars(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setSeminars({ ...seminars, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    fetch(getApi.concat("/") + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seminars),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
  };

  return (
    <div className="user-form">
      <div className="heading">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
        <p>Редактирование новости</p>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Название семинара
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={seminars.title}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={seminars.description}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            id="date"
            name="date"
            value={seminars.date}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            name="time"
            value={seminars.time}
            onChange={handelInput}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          ИЗМЕНИТЬ
        </button>
      </form>
    </div>
  );
};
export default EditSeminar;
