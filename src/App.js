// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

function App() {
  return (
    <div className="container" color="primary" style={{ height: "100vh" }}>
      <div class="row mt-3" color="primary" style={{ height: "100vh" }}>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
