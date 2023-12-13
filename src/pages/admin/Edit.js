import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Edit({product,setproductsList,productsList}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit, setEdit] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((edit) => ({
      ...edit,
      [name]: value,
    }));
  };

  const handleSave = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`http://127.0.0.1:8000/api/update/products/${edit.id}`,edit);
      console.log("admin Edit.js handleSave: ", response.data.message,"url: ",`http://127.0.0.1:8000/api/update/products/${edit.id}`);
      setEdit(edit => (response.data.message));
      console.log("admin Edit.js handleSave after setEdit: ", edit);

        // update data with edit algorigth
        const dataObject = productsList.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {});
        dataObject[edit.id]=edit;
        const updateProduct = Object.values(dataObject);
      // console.log("admin Edit.js handleSave  dataObject: ", Object.values(dataObject));
      //
        
      setproductsList(updateProduct);
      handleClose();

    } catch {
      console.log("admin edit error")
    }
  };

  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      console.log("admin Edit.js handleDelte ");
      const handleClose = () => setShow(false);
    } catch {}
  };
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="" class="col-sm-3 col-form-label">
                Brand
              </label>
              <div class="col-sm-8">
                <input
                  name="brand"
                  value={edit.brand}
                  onChange={(e) => handleChange(e)}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword" class="col-sm-3 col-form-label">
                Category ID
              </label>
              <div class="col-sm-8">
                <input
                  value={edit.category_id}
                  name="category_id"
                  onChange={(e) => handleChange(e)}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Description
              </label>
              <div class="col-sm-8">
                <textarea
                  value={edit.description}
                  onChange={(e) => handleChange(e)}
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
                <input
                  value={edit.image_url}
                  name="image_url"
                  onChange={(e) => handleChange(e)}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Name
              </label>
              <div class="col-sm-8">
                <input
                  name="name"
                  value={edit.name}
                  onChange={(e) => handleChange(e)}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Price
              </label>
              <div class="col-sm-8">
                <input
                  value={edit.price}
                  name="price"
                  onChange={handleChange}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Button variant="outline-primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
