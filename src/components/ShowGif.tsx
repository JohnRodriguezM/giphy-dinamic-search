import React, { FC } from "react";


interface SHOWGIF {
  giphySelect: any;
}

export const ShowGif: FC<SHOWGIF> = ({
  giphySelect,
  ...props
}) => {
  return (
    <>
      {giphySelect ? (
        giphySelect?.map((el: any) => {
          const {
            title,
            images: {
              original: { url },
            },
          } = el;
          return (
            <div key={title}>
              <h2>{title}</h2>
              <img src={url} alt={title} width = "80%"/>
            </div>
          );
        })
      ) : (
        <h2>esperando...</h2>
      )}
    </>
  );
};
