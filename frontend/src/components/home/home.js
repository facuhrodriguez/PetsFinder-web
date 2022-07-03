import "./homestyle.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { fb } from "../../fb";

// src={require("../../assets/images/petlost5.jpg")}
const HomeComponent = () => {
  const [pets, setList] = useState([]);
  console.log("entra home");
  useEffect(() => {
    console.log("lo llama");
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto") //https://mascotapp-api.herokuapp.com/api/pets/losts
      .then((response) => {
        setList(response.data);
        console.log("entro");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <div>
        {pets.map((data) => {
          return (
            <div className="container-pets">
              <div className="p-3 pets">
                <div className="image-pet mb-2">
                  <img className="img-fluid" src={data.url} />
                </div>
                <div className="pets-info m-0 p-0">
                  <p>
                    <strong>Animal :</strong> {data.type}
                  </p>
                  <p>
                    <strong>Edad :</strong> {data.age}
                  </p>
                  <p>
                    <strong>Descripción : </strong> {data.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default HomeComponent;
