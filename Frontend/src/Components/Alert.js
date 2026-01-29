function Alert(props) {
  return (
    
    props.alert  && <div className="alert alert-warning d-flex " style={{height:"30px",alignItems:"center"}} role="alert">
            {props.alert}
        </div>
  )
}


export default Alert
