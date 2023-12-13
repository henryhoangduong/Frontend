import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Droplist() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Dương Huy Hoàng
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="profile">Profile</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Droplist;
