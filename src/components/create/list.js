import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../base';
import './list.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('faultymeters');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { cno, area, day, fdate, type } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        cno,
        area,
        day,
        fdate,
        type
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);



  }

  render() {
    return (
      <div>
        

                <div className="row row-cols-4" id="headTable">
                  <div className="col"><span>C#</span></div>
                  <div className="col"><span>Area/Day</span></div>
                  <div className="col"><span>Date</span></div>  
                  <div className="col"><span>Type</span></div>
                </div>


                {this.state.boards.map(board =>
                  <div className="row row-cols-4" id="contentTable">
                    <div className="col"><span><Link to={`/delete/${board.key}`} className="conLink">{board.cno}</Link></span></div>
                    <div className="col"><span>{board.area}/{board.day}</span></div>
                    <div className="col"><span>{board.fdate}</span></div>
                    <div className="col"><span>{board.type}</span></div>
                  </div>
                )}


      </div>
    );
  }
}

export default App;