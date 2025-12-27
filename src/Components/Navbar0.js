function Navbar0(props) {


    return (

    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom_nav">
            <div className="container-fluid">
                <a className="navbar-brand navtext" href="./">Text Analyzer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="./navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input switch" onClick={props.modechange} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className= 'text-light form-check-label my-1 my-1 py-5 mx-1  text text-nowrap'>{props.mode} mode</label>
            </div>
        </nav>
    </>
  )
}

export default Navbar0;