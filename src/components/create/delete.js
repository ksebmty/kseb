import React, { Component } from 'react';
import firebase from '../../base';
import { Link } from 'react-router-dom';
import './delete.css'
import Navbar from '../navbar/navbar'




// Banner Image //
import Banner1 from '../../asset/banner1.png';
import Banner2 from '../../asset/banner2.png';
import Banner4 from '../../asset/banner4.png';
import Banner5 from '../../asset/banner5.png';


// Banner Image //


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
              <img src={Banner5} className="banner1" alt="" />
              <div className="centered1"><p className="p1">Consumer Number</p>
                  <p className="p2">{this.state.board.cno}</p>
              </div>
              <img src={Banner2} className="banner2" alt="" />
              <div className="centered2"><p className="p1">Area/Day</p>
                  <p className="p2">{this.state.board.area}/{this.state.board.day}</p>
              </div>
              <img src={Banner1} className="banner3" alt="" />
              <div className="centered3"><p className="p1">Date</p>
                  <p className="p2">{this.state.board.fdate}</p>
              </div>
              <img src={Banner4} className="banner4" alt="" />
              <div className="centered4"><p className="p1">Type</p>
                  <p className="p2">{this.state.board.type}</p>
              </div>
              
            <Link to={`/edit/${this.state.key}`} class="btn btn-succes">Edit</Link>
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-dangers">Delete</button>

      </div>
    );
  }
}

export default Show;