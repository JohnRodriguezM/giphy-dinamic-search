import React, { useState, useEffect } from "react";

import { getData } from "../ts/functions/gerData";

const URLCATS = "https://catfact.ninja/fact";
const URLBASEGIF = "https://api.giphy.com/v1/gifs/search?"
const APIKEY = "X91VtYFffueL6G58jFQW3XqVqlrvvxeL"

export const GetCats = () => {
  const [manageBtn, setManageBtn] = useState<number>();
  const [data, setData] = useState<string>("");

  const [dataToSearch, setDataToSearch] = useState<string>("");

  //*estado para almacenar las imagenes de giphy

  const [giphySelect, setGiphySelect] = useState<any>(null);

  //function para sacar las tres primeras letras de la frase
  const extractWords = (phrase: string) => setDataToSearch(phrase.split(" ").slice(0, 3).join(" "));


  const urlGiphy = `${URLBASEGIF}api_key=${APIKEY}&q=${dataToSearch}&limit=2&offset=0&rating=g&lang=en`;
  useEffect(() => {
    //*traer el gif de gphy
    getData(
      urlGiphy,
      setGiphySelect,
    )
  }, [urlGiphy]);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const response = await fetch(url);
        const { fact } = await response.json();
        console.log("SOY LA FRASEEEEEEEEEEEEEEE", fact);
        setData(fact);
        extractWords(fact);
      } catch (err) {
        console.log(err);
      }
    };
    getData(URLCATS);
  }, [manageBtn]);

  return (
    <div>
      <button
        onClick={() => {
          setManageBtn(Math.random());
          /*extractWords(data)*/
        }}
      >
        pide una frase diferente
      </button>
      <p>
        {data}
        --- y con esta data se buscará un new gift --
        {dataToSearch}
      </p>

      <div>
        {giphySelect ? (
          giphySelect?.data?.map((el: any) => {
            return (
              <>
                {/*<img src={el.images.original.url} alt="" width="200" height="200" />*/}

                <p>{el.title}</p>

                <img
                  src={el.images?.original?.url}
                  alt=""
                  width="250"
                  height="250"
                />
              </>
            );
          })
        ) : (
          <p>no hay coincidencias</p>
        )}
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
