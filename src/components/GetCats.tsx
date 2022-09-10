import React, { useState, useEffect, FC } from "react";

//*css
import "../css/componentsCss/GetCats.css";

import { extractWords } from "../ts/functions/extractWords";
import { getData } from "../ts/functions/getData";

import { ShowGif } from "./ShowGif";

//*urls necesarias
import { URLFETCH } from "../ts/urls";
const { APIKEY, urlCats, urlBaseGifts } = URLFETCH;

//*css


export const GetCats: FC = () => {
  const [manageBtn, setManageBtn] = useState<number>();
  const [data, setData] = useState<any>("");

  const [dataToSearch, setDataToSearch] = useState<string>("");

  //*estado para almacenar las imagenes de giphy

  const [giphySelect, setGiphySelect] = useState<any>(null);

  const urlGiphy = `${urlBaseGifts}api_key=${APIKEY}&q=${dataToSearch}&limit=1&offset=0&rating=g&lang=en`;
  useEffect(() => {
    //*traer el gif de gphy
    getData(urlGiphy).then((datos) => {
      const { data } = datos;
      setGiphySelect(data);
      //console.log(urlGiphy);
    });
  }, [urlGiphy]);

  useEffect(() => {
    getData(urlCats).then(({ fact } = data) => {
      setData(fact);
      setGiphySelect("");
      extractWords(fact, setDataToSearch);
    });
  }, [manageBtn]);

  return (
    <div className = "mainSection">
      <div>
        <button
          onClick={() => {
            setManageBtn(Math.random());
          }}
        >
          pide una frase diferente
        </button>
        <p>
          {data}
          --- y con esta data se buscará un new gift --
          {dataToSearch}
        </p>
      </div>

      <div>
        <ShowGif giphySelect={giphySelect} />
      </div>
    </div>
  );
};

{
  /*<img src={el.url} alt = "img"/>;*/
}
{
  /*<p>{el?.images?.hd?.mp4}</p>*/
}

{
  /*<img src={el.images.original.url} alt="" width="200" height="200" />*/
}
