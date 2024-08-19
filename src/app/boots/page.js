
export default function Home() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">JUDEJUDE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sv">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/boots">Boots</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <a href="/singup" className="btn btn-outline-success" type="submit">Sigup</a>
        <a href="/singin" className="btn btn-outline-success" type="submit">Signin</a>
        </form>
      </div>
    </div>
  </nav>
  
  <div align="center" className="starter-template">
    <h1>Boots</h1>
    <p className="lead">Control your speed as you wish</p>
  </div>
  <br></br>
  <div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80338fbc-81a2-491a-96af-62f239c7f341/PHANTOM+LUNA+II+ELITE+FG.png" className="d-block w-100" alt="..." />
        <h5 className="card-title">NIKE</h5>
        <p className="card-text">Nike Phantom Luna 2 Elite Electric </p>
        <a href="#" className="btn btn-primary">฿10,100 บาท</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4fefcee-a7d7-46db-ae9f-d71e68b93e5d/ZM+SUPERFLY+10+ELITE+FG.png" className="d-block w-100" alt="..." />
        <h5 className="card-title">NIKE</h5>
        <p className="card-text">Nike Mercurial Superfly 10 Elite </p>
        <a href="#" className="btn btn-primary">฿9,600 บาท</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca52989d-a4ff-49fb-9b70-e7eb735389e6/PHANTOM+GX+II+ELITE+AG-PRO.png" className="d-block w-100" alt="..." />
        <h5 className="card-title">NIKE</h5>
        <p className="card-text">Nike Phantom GX 2 Elite</p>
        <a href="#" className="btn btn-primary">฿8,700 บาท</a>
      </div>
    </div>
  </div>
</div>




<br></br>
<div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69ba6a94fb3a42ad9cae1c3b30d43ed2_9366/F50_Elite_Firm_Ground_IF8818_22_model.jpg" className="d-block w-100" alt="..." />
        <h5 className="card-title">ADIDAS</h5>
        <p className="card-text">F50 Elite Firm Ground </p>
        <a href="#" className="btn btn-primary">฿8,500 บาท</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/774deb3f07694529931c10c1a735050f_9366/Predator_Elite_Firm_Ground_IF8867_22_model.jpg" className="d-block w-100" alt="..." />
        <h5 className="card-title">ADIDAS</h5>
        <p className="card-text">Predator Elite Firm Ground</p>
        <a href="#" className="btn btn-primary">฿8,500 บาท</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/22c904f49e7b4648b66e6f368f287180_9366/X_CRAZYFAST.1_FG_GY7416_22_model.jpg" className="d-block w-100" alt="..." />
        <h5 className="card-title">ADIDAS</h5>
        <p className="card-text">X CRAZYFAST.1 FG</p>
        <a href="#" className="btn btn-primary">฿5,100 บาท</a>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }