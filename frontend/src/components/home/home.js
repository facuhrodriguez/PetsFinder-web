import "./homestyle.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import firebaseApp from "../../fb";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// src={require("../../assets/images/petlost5.jpg")}
const HomeComponent = () => {
  const [pets, setList] = useState([]);
  useEffect(() => {
    const storage = getStorage(firebaseApp);
    axios
      .get("https://mascotapp-api.herokuapp.com/api/pets/losts")
      .then(async (response) => {
        const auxPets = response.data;
        if (auxPets) {
          const petsList = [];
          for (const petsIt of auxPets) {
            if (petsIt.photos) {
              const [coverPhoto] = petsIt.photos;
              const downloadUrl = await getDownloadURL(
                ref(storage, coverPhoto)
              );
              const newObject = {
                url: downloadUrl,
                ...petsIt,
              };
              petsList.push(newObject);
            }
          }
          setList(petsList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default HomeComponent;
