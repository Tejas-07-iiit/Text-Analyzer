function Navbar0(props) {

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom_nav">
            <div className="container-fluid">
                <a className="navbar-brand navtext text-title" href="./">Text Analyzer</a>
            </div>
            <div className="form-check form-switch custom-switch">
                <input className="form-check-input switch" onClick={props.modechange} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className= 'text-light form-check-label my-1 my-1 py-5 mx-1  text text-nowrap'>{props.mode} mode</label>
            </div>
        </nav>
    </>
  )
}

export default Navbar0;