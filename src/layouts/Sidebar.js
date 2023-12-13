import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link " href="">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="">
            <i class="bi bi-truck-front-fill"></i>
            <span>Shipments</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="">
            <i class="bi bi-card-checklist"></i>
            <span>Orders</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="">
            <i class="bi bi-people"></i>
            <span>Customers</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="">
            <i class="bi bi-stickies"></i>
            <span>Products</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
