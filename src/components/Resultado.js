import React from 'react'

export const Resultado = () => {

  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");


  return (
    <>
    <h2>Resultados</h2>
    <p>
      vas a buscar {keyword}
    </p>
    </>
  )
}
