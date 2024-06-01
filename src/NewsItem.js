import React, { Component } from 'react'
export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello i am a ctor");
    }
  render() {
     let {title,description,imageUrl,newsUrl,publishedAt,author,source} = this.props;
    return (
      <div>
       <div className="card my-4" >
        <div style={{display:"flex",position:"absolute",right:"0",justifyContent:"flex-end"}}>

       <span className="badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
    {source}
  </span>
        </div>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
    <p className="card-text">{description}...</p>  
    <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}