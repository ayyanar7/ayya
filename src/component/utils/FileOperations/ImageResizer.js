
   import React, {Component, useState} from "react";
 
   import Resizer from "react-image-file-resizer";
  import {DB_CONFIG_ITEM_IMG} from '../constants/Global'
  
     
export  class ImageResizer extends Component{
  constructor(props) {
    super(props);
    this.onChange =  this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state = {
        imgCollection: ''
    }
}
       onChange (event) {
      this.setState({ imgCollection: event.target.files })
       //const file = event.target.files[0];
       
       localStorage.getItem(DB_CONFIG_ITEM_IMG);
        console.log('localStorage.getItem("resizedImage") '+ localStorage.getItem(DB_CONFIG_ITEM_IMG));
      //  const res = await fetch(
      //     Url,
      //    {
      //      method: "POST",
      //      body: formData
      //    }
      //  );
      //  const data = await res.text();
      //  console.log('response: '+data);
     }
     async  onSubmit(e) {
      e.preventDefault()
       
     // var formData = new FormData();
     const json = {};
    
       for (const key of Object.keys(this.state.imgCollection)) {
        console.log('b4 resize: '+this.state.imgCollection[key].size);
        let image = await resizeFile(this.state.imgCollection[key]);
        console.log('file: '+image);
        
        json[key]  = dataURIToBlob(image);
        console.log('key: '+key);
        console.log('After resize newFile: '+json[key] );
        console.log('After resize newFile: '+json[key] .size);
          // formData.append(key, newFile);
          // console.log('formData: '+formData);
          //json[key] = newFile;
         
       }
       var jsonArray = [];
     
       jsonArray.push(json);
       var jsonObject = {jsonArray}
      let jsondata =JSON.stringify(jsonObject, null, '  ');

      
      // axios.post("http://localhost:4000/api/upload-images", formData, {
      // }).then(res => {
      //     console.log(res.data)
      // })

      localStorage.setItem(DB_CONFIG_ITEM_IMG,JSON.stringify(jsondata));
  }
     render(){
     return (
      //  <div className="App">
      //    <input onChange={this.onChange} type="file" multiple/>
      //  </div>
       <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>

     );
}
   }
   export default ImageResizer; 

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
const dataURIToBlob = (dataURI) => {
  
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};