import React from 'react'


const Error = (props) => {
    return (
      <div>
        <div
          className="header"
          style={{
            fontSize: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {props.head}
        </div>
        <p
          style={{
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {props.message}
        </p>
      </div>
    );
}


Error.defaultProps = {
    head: "Oops page couldn't load", 
    message: "Check your internet or allow access if not allowed "
}


export default Error;