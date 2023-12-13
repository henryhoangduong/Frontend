import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CreateProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id="createproduct" variant="outline-primary" onClick={handleShow}>
        Create
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="" class="col-sm-3 col-form-label">
                Brand
              </label>
              <div class="col-sm-8">
                <input name="brand" type="" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Description
              </label>
              <div class="col-sm-8">
                <textarea
                  type="textarea"
                  class="form-control"
                  name="description"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Image URL
              </label>
              <div class="col-sm-8">
                <input name="image_url" type="" class="form-control" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Name
              </label>
              <div class="col-sm-8">
                <input name="name" type="" class="form-control" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Price
              </label>
              <div class="col-sm-8">
                <input name="price" type="" class="form-control" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProduct;
