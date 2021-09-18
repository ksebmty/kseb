import React, { Component } from 'react';
import firebase from '../../base';
import { Link } from 'react-router-dom';
import './delete.css'
import Navbar from '../navbar/navbar'


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('faultymeters').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('faultymeters').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="card" id="card1">
              <div className="card-body">
              <p className="p1">Consumer Number</p>
              <p className="p2">{this.state.board.cno}</p>
              </div>
            </div>
            <div className="card" id="card2">
              <div className="card-body">
              <p className="p1">Area/Day</p>
              <p className="p2">{this.state.board.area}/{this.state.board.day}</p>
              </div>
            </div>
            <div className="card" id="card3">
              <div className="card-body">
              <p className="p1">Date</p>
              <p className="p2">{this.state.board.fdate}</p>
              </div>
            </div>
            <div className="card" id="card4">
              <div className="card-body">
              <p className="p1">Type</p>
              <p className="p2">{this.state.board.type}</p>
              </div>
            </div>
              
            <Link to={`/edit/${this.state.key}`} className="btn btn-succes">Edit</Link>
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-dangers">Delete</button>


            <div class="container">
  <div class="box"></div>
</div>

      </div>
    );
  }
}

export default Show;