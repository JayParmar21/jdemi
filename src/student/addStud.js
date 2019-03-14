import React,{ Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class addStud extends Component{

    constructor(props) {
        super(props);
        this.state = {
          student: {
            id: 0,
            name: "",
            dept: "",
            email: "",
          },
          modal:false
        };
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Player Data</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="First name">First name</Label>
                                    <Input type="text" name="firstname" id="firstname" placeholder="firstname" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Last name">Last name</Label>
                                    <Input type="text" name="lastname" id="lastname" placeholder="lastname" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="score">Score</Label>
                                    <Input type="number" name="score" id="score" placeholder="score(between 0-100)"/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            {this.state.edit ? 
                            <Button color="primary">Edit</Button>
                            : <Button color="primary">Add</Button>}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        )
    }
}

export default addStud;