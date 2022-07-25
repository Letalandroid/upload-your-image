import { useEffect, useState } from "react";

export const Fetching = (url: any) => {
  const [resultado, setResultado] = useState({ cargando: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  const getDatos = async (Url: any) => {
    setResultado({
      cargando: true,
      data: null,
    });

    const res = await fetch(Url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();

    setResultado({ cargando: false, data });
  };

  return resultado;
};
