import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Home(){
    return (
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Singup</a>
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
       <div>
       <center><img src="https://export-download.canva.com/_2DGE/DAGONQ_2DGE/5/0/0001-5476814985358924543.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240818%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240818T083006Z&X-Amz-Expires=26054&X-Amz-Signature=bb83c7f3329ebde64755cb99a5d3b494dc164f1fb0a00f1881fbfca739f84255&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Black%2520and%2520White%2520Minimal%2520Monogram%2520Logo.jpg&response-expires=Sun%2C%2018%20Aug%202024%2015%3A44%3A20%20GMT"/></center>
  
  <div className="mb-3 row">
    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail" />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>
</div>

       <div className="col-mb-4">
        <div>
            <input type="text" className="form-control" placeholder="ชื่อ" aria-label="ชื่อ" />
            <div className="col-mb-6">
            <br /> <br /> 
            
            <input type="text" className="form-control" placeholder="นามสกุล" aria-label="นามสกุล" />
            </div>

            </div>
       </div>
       <br /> <br /> 
       <div className="row">
           <div className="col-mb-2"><select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
           <option selected>เลือกเพศ</option>
           <option value="1">นาย</option>
           <option value="2">นาง</option>
           <option value="3">นางสาว</option>
           </select></div></div>
           <center><button type="submit" class="btn btn-secondary btn-block">บันทึก</button></center>
        </div>
        </>
    );
}
    
