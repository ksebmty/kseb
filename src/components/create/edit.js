import React, { Component } from 'react';
import firebase from '../../base';
import './create.css'
import Navbar from '../navbar/navbar'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      cno: '',
      area: '',
      day: '',
      fdate: '',
      type: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('faultymeters').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          cno: board.cno,
          area: board.area,
          day: board.day,
          fdate: board.fdate,
          type: board.type
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { cno, area, day, fdate, type } = this.state;

    const updateRef = firebase.firestore().collection('faultymeters').doc(this.state.key);
    updateRef.set({
      cno,
      area,
      day,
      fdate,
      type
    }).then((docRef) => {
      this.setState({
        key: '',
        cno: '',
        area: '',
        day: '',
        fdate: '',
        type: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <>
      <Navbar />
      <div class="badge pulsate">Edit</div>
      <div class="container">
            <form onSubmit={this.onSubmit}>
            <input type="text" className="form-control" name="cno" value={this.state.cno} onChange={this.onChange} placeholder="Consumer Number" /><br />
                <select className="selectOption"  name="area" value={this.state.area} onChange={this.onChange}>
                <option value="">Select Area</option>
                    <option value="A01">A01</option>
                    <option value="A02">A02</option>
                    <option value="A03">A03</option>
                    <option value="A04">A04</option>
                    <option value="A05">A05</option>
                    <option value="B01">B01</option>
                    <option value="B02">B02</option>
                    <option value="B03">B03</option>
                    <option value="B04">B04</option>
                    <option value="B05">B05</option>
                    <option value="M01">M01</option>
                    <option value="M02">M02</option>
                    <option value="M03">M03</option>
                </select>
                <select className="selectOption"  name="day" value={this.state.day} onChange={this.onChange}>
                <option value="">Select Day</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                </select><br /><br />
                <input type="date" name="fdate" value={this.state.fdate} onChange={this.onChange} />
                <select className="selectOption"  name="type" value={this.state.type} onChange={this.onChange}>
                    <option value="">Select Type</option>
                    <option value="Damage">Damage</option>
                    <option value="Faulty">Faulty</option>
                    <option value="SF">Suspcted Faulty</option>
                </select><br /><br />
                <button type="submit" className="btn" id="submitButton">Submit</button>
            </form>
      </div>
      </>
    );
  }
}

export default Edit;