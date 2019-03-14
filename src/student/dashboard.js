import React, { Component } from 'react'
import { Button, Table } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../action/stud_action'
import Cmp from '../cmp/cmp'
import AddStud from './addStud'

class dashboard extends Component {
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

  componentDidMount() {
    this.props.action.Student.getDataAction()
  }

  onClick = () => {
    this.props.onButtonClick(true);
  };

  btnClick = () => {
    console.log('props', this.props.student.studData)
    this.setState({
        modal:true
    })
  }
  render() {
    let stud = '';
    stud = this.props.student.studData.map( (stud, key) => {
      return <tr key={key}>
        <td>{stud.id}</td>
        <td>{stud.name}</td>
        <td>{stud.branch}</td>
        <td>{stud.email}</td>
        <td><Button classname="buttonclass" color="primary">Edit</Button>{' '}
        <Button classname="buttonclass" color="danger">Delete</Button>{' '}</td>
      </tr>
    });
    return (
      <div>
        <center><h2 style={{ marginTop: '30px' }}>Student Data</h2>
        <Cmp/>
          <Table style={{ marginTop: '20px' , width : '70%' }} striped >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stud}
            </tbody>
          </Table>

          <div style={{ marginTop: '30px' }}>
            <Button  classname="buttonclass" color="info" onClick={this.btnClick} id="btn">Add New Student</Button>{' '}
            {this.state.modal ? <AddStud/> : null}
            <button name="clickbtn">Click me</button>
          </div>
        </center>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { student } = state
  return {
    student: student
  }
};

const mapDispatchToProps = dispatch => ({
  action: {
    Student: bindActionCreators(actions, dispatch)
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
//export default dashboardy