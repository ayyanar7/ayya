
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
        console.log('localStorage.getItem("DB_CONFIG_ITEM_IMG") '+ localStorage.getItem(DB_CONFIG_ITEM_IMG));
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
     var jsonproductId = localStorage.getItem(DB_CONFIG_ITEM_IMG);
     var productsdata= JSON.parse(jsonproductId);
     var productids =  productsdata.temArr;
     console.log("productids : "+productids)
     console.log("this.state.imgCollection.size : "+this.state.imgCollection.size)
     console.log("productids.size : "+productids.size)
     if(this.state.imgCollection.length !== productids.length){
      console.log("return void")

       return;
     }
           var jsonArray = [];
       for (const key of Object.keys(this.state.imgCollection)) {
        console.log('b4 resize: '+this.state.imgCollection[key].name);
        let image = await resizeFile(this.state.imgCollection[key]);
        console.log('file: '+image);
        var obj = {};      
        //let jsonimg  = dataURIToBlob(image);
        const splitDataURI = image.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  //to decode
  
  for (let i = 0; i < byteString.length; i++)
   ia[i] = byteString.charCodeAt(i);
   
 var blobobj = new Blob([ia], { type: mimeString });
 const reader = new FileReader();
 let tempurl = window.URL.createObjectURL(blobobj);

 console.log("productids[key] "+productids[key].name);
 console.log("tempurl "+tempurl);
 console.log("this.state.imgCollection[key].name "+this.state.imgCollection[key].name);
  //  if(this.state.imgCollection[key].name.includes(productids[key].name)){
  //    console.log("name match");
  //    productids[key].data = tempurl;
  //    jsonArray.push(productids);
  //  }
   
  productids.forEach(product => {
    console.log("product "+product.name);
    if(this.state.imgCollection[key].name.includes(product.name)){
      console.log("name match");
     // product.data = tempurl;
      product.data = tempurl;
    console.log("objprod "+product);
    jsonArray.push(product);  
    }else{
      console.log("not matched");
    }
  });

   console.log("jsonArray "+jsonArray);
 // This fires after the blob has been read/loaded.
/**reader.addEventListener('loadend', (e) => {
  const text = e.srcElement.result;
  console.log("reader: "+text);
  console.log("inside anaonymus fun: "+jsonArray)
 //jsonArray.push(text);
 console.log("inside anaonymus fun: "+jsonArray)
 });

// Start reading the blob as text.
reader.readAsText(blobobj);
**/
// obj.value = blobobj;
   //console.log('obj.value: '+obj.value); 
       // obj.key = key;
        //blob is converted and stored
        //obj.value = image;//Array.from(new Uint8Array(jsonimg));
        //jsonArray.push(obj);
        console.log('key: '+key);
        //console.log('After resize newFile: '+jsonimg );
        //console.log('After resize newFile: '+jsonimg.size);
          // formData.append(key, newFile);
          // console.log('formData: '+formData);
          //json[key] = newFile;
          //jsonArray.push(json);
       }
  
     
       
       var jsonObject = { }
       jsonObject.key = 'jsonarray';
       jsonObject.value = jsonArray;
      let jsondata =JSON.stringify(jsonObject);

      
      // axios.post("http://localhost:4000/api/upload-images", formData, {
      // }).then(res => {
      //     console.log(res.data)
      // })
      console.log("Json: "+jsondata)
      localStorage.setItem(DB_CONFIG_ITEM_IMG,jsondata);
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