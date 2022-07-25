import { useState } from "react";
import { Fetching } from "../fetching";

export default function Main() {

    const [url] = useState('http://upload-your-image-backend.herokuapp.com/images');
    const estado = Fetching(url);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log(data.images);

  return (
    <main className="m-4">
      <form
        action="https://upload-your-image-backend.herokuapp.com/upload"
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
      <div className="d-flex justify-content-center flex-wrap mx-2 my-4">
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
