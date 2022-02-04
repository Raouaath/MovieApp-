import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddModal({ addMovie }) {
  const [newmovie, setnewmovie] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button class="fun" onClick={handleShow} id="addmovie">
        Add Movie
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="input">Title:</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input">Image:</label>
              <input
                type="text"
                name="image"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, image: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input">Rating:</label>
              <input
                type="text"
                name="rating"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, rating: e.target.value })
                }
              />
            </div>

            <div>
              <label className="input">Year:</label>
              <input
                type="text"
                name="Year"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, year: e.target.value })
                }
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={handleClose}
          >
            Close
          </button>

          <button class="fun" onClick={() => addMovie(newmovie)}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
