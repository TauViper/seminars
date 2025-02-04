import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Seminars.css";
import {API} from "../api";
const Seminars = () => {
  const [seminars, setSeminars] = useState([]);
  const { id } = useParams()
  const api = API;
  console.log(seminars)


  useEffect(() => {
    getSeminars();
  }, []);

  const getSeminars = () => {
    axios
      .get(api.concat("/") + id)
      .then((item) => {
        console.log(item.data)
        setSeminars(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>Объект</th>
        <th>Значение</th>


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Title:</td>
        <td>{seminars.title}</td>
      </tr>
      <tr>
        <td>Description:</td>
        <td>{seminars.description}</td>
      </tr>
      <tr>
        <td>Date:</td>
        <td>{seminars.date}</td>
      </tr>
      <tr>
        <td>Time:</td>
        <td>{seminars.time}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default Seminars;
