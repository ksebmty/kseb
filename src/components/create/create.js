import React, { Component } from 'react';
import firebase from '../../base';
import './create.css'
import Navbar from '../navbar/navbar'


class Create extends Component {

    constructor() {
      super();
      this.ref = firebase.firestore().collection('faultymeters');
      this.state = {
        cno: '',
        area: '',
        day:'',
        fdate:'',
        type:''
      };
    }
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  
    onSubmit = (e) => {
      e.preventDefault();
  
      const { cno, area, day, fdate, type } = this.state;
  
      this.ref.add({
        cno,
        area,
        day,
        fdate,
        type
      }).then((docRef) => {
        this.setState({
          cno: '',
          area: '', 
          day:'',
          fdate:'',
          type:''
        });
        this.props.history.push("/add")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    }
  
    render() {
      const { cno, area, day, fdate, type } = this.state;
      return (
        <>
        <Navbar />
        <div className="container">
              <form onSubmit={this.onSubmit}>
                  <input className="createCon" type="text"  name="cno" value={cno} onChange={this.onChange} placeholder="Consumer Number" required /> {/* CONSUMER NUMBER */}
                  <select className="createArea"  name="area" value={area} onChange={this.onChange} required >  {/* AREA CODE */}
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
                    <select className="createDay"  name="day" value={day} onChange={this.onChange} required>  {/* DAY CODE */}
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
                    </select>
                    <input className="createDate" type="date" name="fdate"  value={fdate} onChange={this.onChange} required  /> {/* METER FAULTY DATE */}
                    <select className="createType"  name="type" value={type} onChange={this.onChange} required>  {/* TYPE */}
                        <option value="">Select Type</option>
                        <option value="Damage">Damage</option>
                        <option value="Faulty">Faulty</option>
                        <option value="SF">Suspcted Faulty</option>
                    </select>

                <button className="createbtn" type="submit" >Submit</button>
              </form>
        </div>
        </>
      );
    }
  }
  
  export default Create;