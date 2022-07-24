import { useState } from "react";
import { Fetching } from "../fetching";

export default function Main() {

    const [url] = useState('http://127.0.0.1/images');
    const estado = Fetching(url);
    const {cargando, data} = estado;
    cargando ? console.log('cargando...') : console.log(data.images);

  return (
    <main className="m-5">
      <form
        action="http://127.0.0.1/upload"
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
            Upload
          </button>
        </div>
      </form>
      <div className="row">
        {cargando ? (
          <h1>Un momento por favor...</h1>
        ) : (
          data.images.map((_id, length) => (
            <img src={data.images[length].image} alt={data.images[length]._id} />
          ))
        )}
      </div>
    </main>
  );
}
