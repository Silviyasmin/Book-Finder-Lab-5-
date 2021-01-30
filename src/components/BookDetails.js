import React from "react";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
    return (<div>
        
            <div className="col s12">
                <img
                    src={props.location.image}
                    alt=""
                    style={{ marginLeft: 600, paddingTop: 10, width: 300, height: 400 }}
                />
            </div>     
            <div className="col s12 m6" style={{ margin: 20}}>
                <div className="card white">
                    <div className="card-content black-text">
                        <span className="card-title">{props.location.title}</span>
                        <div></div>
                        <span className="card-title">{props.location.author}</span>
                        <div></div>
                        <span className="card-title">{props.location.published}</span>
                        <p>{props.location.description}</p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: "/", books: props.location.props }} style={{color:"#3c3665"}}>Go to search page!</Link>
                        
                    </div>
                </div>
            </div>
        </div>

    )
};
export default BookDetails;