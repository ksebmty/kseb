import React from "react";
import { db } from "../../base";
import './list.css'
import {Col,Container,Row} from 'react-bootstrap'

class SavedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faultymeters: []
    };
  }

  componentDidMount() {
    db.collection("faultymeters")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ faultymeters: data });
      });
  }

  render() {
    const { faultymeters } = this.state;
    return (
      <div className="listDiv">
        <Container>
            {faultymeters.map(user => (
          <div key={user.uid}>              
                <Row>
                    <Col className="listCol1">{user.cno}</Col>
                    <Col className="listCol2">{user.area}/{user.day}</Col>
                    <Col className="listCol3">{user.fdate}</Col>
                    <Col className="listCol4">{user.type}</Col>
                </Row>
          </div>
            ))}
        </Container>
      </div>
    );
  }
}

export default SavedList;