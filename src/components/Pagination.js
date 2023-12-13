import React from 'react'
import './Pagination.css'

function Pagination() {
  return (
    <nav
      id='pagination'
      aria-label="Page navigation example"
    >
      <ul class=" pagination">
        <li class="page-item">
          <a class="page-link" href="">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="">
            5
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination
