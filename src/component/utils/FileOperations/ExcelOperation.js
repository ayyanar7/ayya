import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './ExcelOperation.css';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
 import {  Col, Input, InputGroup,  FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { DB_CONFIG_ITEM_DATA, DB_CONFIG_ITEM_IMG } from '../constants/Global'
 import ImageResizer from '../../utils/FileOperations/ImageResizer';
class ExcelOperation extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
      uploadedFileName : ""
      
     
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);  
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
    
     let temArr = [];
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows
         
          });

         resp.rows.forEach(row => {
            let objimgData = {};
            objimgData.name = row[0];
            objimgData.data = '';            
            temArr.push(objimgData);            
            
          });
           
let jsonim = {temArr};

          console.log("DB_CONFIG_ITEM_DATA : "+DB_CONFIG_ITEM_DATA);
          console.log("String resp: "+JSON.stringify(resp, null, 2));
           localStorage.setItem(DB_CONFIG_ITEM_DATA,JSON.stringify(resp, null, 2));
           localStorage.setItem(DB_CONFIG_ITEM_IMG,JSON.stringify(jsonim, null, 2));

           console.log("getting resp: "+localStorage.getItem(DB_CONFIG_ITEM_DATA));
           console.log("getting productid: "+localStorage.getItem(DB_CONFIG_ITEM_IMG));

          }
      }); 
      
  }

  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }               
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openFileBrowser = () => {
    this.fileInput.current.click();
  }

  

  render() {
    return (
      <div>
       
              <Container>
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">Upload</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                 
                  <Button color="info" style={{color: "white", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button>
                  <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
             
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    Please select a .xlsx file only !
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>   
        </form>

        {this.state.dataLoaded && 
        <div>
          <Container>
            
              <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              <div>
                <div> 
                 Please note Images names must be same as the productID.
                   </div>
                <div>
                <ImageResizer/>
              </div>

              <Button color="info" style={{color: "white", zIndex: 0}}  > <NavLink to="/ConfigurationSetup"><i className="cui-file"></i> Proceed&hellip;</NavLink></Button>

            </div> 
          </Container>  
        </div>
        
        }
        </Container>
        
     </div>
    );
  }
}

export default ExcelOperation;