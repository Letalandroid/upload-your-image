import { useState } from "react";
import { Fetching } from "../fetching";

export default function Main() {

    const [url] = useState(`${process.env.REACT_APP_API_URL}/images`);
    const estado = Fetching(url);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log('Datos cargados correctamente');

  return (
    <main className="m-4">
      <form
        action={`${process.env.REACT_APP_API_URL}/upload`}
        method="post"
        encType="multipart/form-data"
      >
        <div className="input-group">
          <input
            type="file"
            name="image"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="inputGroupFileAddon04"
          >
            <i class="fas fa-upload"></i>
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center align-items-center flex-wrap mx-2 my-4">
        {cargando ? (
          <h1>Un momento por favor...</h1>
        ) : (
          data.images.map((_id, length) => (
            <img
              className="m-2"
              width="200px"
              src={data.images[length].image}
              alt={data.images[length]._id}
              title={data.images[length]._id}
            />
          ))
        )}
      </div>
    </main>
  );
}
