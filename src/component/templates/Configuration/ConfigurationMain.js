import React, { Component } from 'react'
import ExcelOperation from '../../utils/FileOperations/ExcelOperation'
import {  Col, Input, InputGroup,  FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';


  class ConfigurationMain extends Component {
  render() {
    return (
      <div> 
         
         <Container     className="bg-light text-dark p-5"     fluid="sm"   >
     
              <h1 className="display-3">Configuration</h1>                                  
              <hr className="my-2" />           
             <Container>
              <FormGroup row>
            <Label for="Search & Edit" xs={6} sm={4} lg={2} size="lg">Upload</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>                              
                  <input type="file" hidden   ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
                  <Button color="info" style={{color: "white", zIndex: 0}} ><i className="cui-file"></i> Search&hellip;</Button>
               
                {/* <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                               */}
                <FormFeedback>    
                  {/* <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                   Invalid search text!
                  </Fade>                                                                 */}
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>

          </Container>
             
              <Container > 
              { <ExcelOperation/> }
                 </Container>
                

           </Container>  
      </div>
    )
  }
}

export default ConfigurationMain