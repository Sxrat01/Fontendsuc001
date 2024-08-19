import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="page.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.js">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="service.js">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.js">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit">Sig up</button>
        <button className="btn btn-outline-success" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</nav>

<div className="row">
  <div className="col-md-12 text-center bg-info p-0">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7DB1/production/_131577123_gettyimages-1725013151.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2150879290.jpg?c=16x9&q=h_833,w_1480,c_fill" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.cnn.com/api/v1/images/stellar/prod/230903122621-01-jude-bellingham-real-madrid.jpg?c=16x9&q=h_833,w_1480,c_fill" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div>
ิ<br></br>

<div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Surat 01</h5>
        <p className="card-text">my name is arm </p>
        <a href="#" className="btn btn-primary">codeding</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">jude bellingham</h5>
        <p className="card-text">the next future </p>
        <a href="#" className="btn btn-primary">Go lets gooooooooooooooolllllllllll</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cristiano Ronaldo </h5>
        <p className="card-text">Cristiano Ronaldo retire</p>
        <a href="#" className="btn btn-primary">im so saddddd</a>
      </div>
    </div>
  </div>
</div>

<div className="row">
          <div className="col-md-12 text-center bg-white p-5">
          <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 kruanuchatcmtc</p>
    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Service</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
  </footer>
</div>

          </div>
</div>
    </>
  );
}