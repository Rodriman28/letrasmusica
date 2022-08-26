import { useState, createContext } from "react";
import { parseText } from "../helpers";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");

  const busquedaLetra = async (busqueda) => {
    const { artista, cancion } = busqueda;
    const newArtista = parseText(artista);
    const newCancion = parseText(cancion);
    const options = {
      method: "GET",
      url: `https://lyrics-finder1.p.rapidapi.com/${newArtista}/${newCancion}`,
      headers: {
        "X-RapidAPI-Key": "b65acef5d0mshe1f115886c989e7p12f790jsn9002d9c3f34e",
        "X-RapidAPI-Host": "lyrics-finder1.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0].songName);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LetrasContext.Provider value={{ alerta, setAlerta, busquedaLetra }}>
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };

export default LetrasContext;
