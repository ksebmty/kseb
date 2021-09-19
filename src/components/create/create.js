import React, { Component } from 'react';
import firebase from '../../base';
import './create.css';
import $ from 'jquery';
import GetData from './list'
import HomeContainer from '../homeContainer/homeConrainer'


class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('faultymeters');
    this.state = {
      cno: '',
      area: '',
      day: '',
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
        day: '',
        fdate:'',
        type:''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount() {
    $("document").ready(function(){
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();
      });
      
      $(".tab-slider--nav a").click(function() {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
        if($(this).attr("rel") === "tab4"){
          $('.navbar').addClass('slide');
        }else{
          $('.navbar').removeClass('slide');
        }
        $(".tab-slider--nav a").removeClass("active");
        $(this).addClass("active");
      });     
  }

  render() {

    const { cno, area, day, fdate, type } = this.state;


    return (
        <>
              <div className="tab-slider--nav">
                <div className="navbar" id="bottomNavbar">
                  <a className="tab-slider--trigger active" rel="tab3" id="homeIcon">
                  <svg width="17" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L16 6V18H11V11H5V18H0V6L8 0Z"/>
                  </svg>
                  </a> 
                  <a className="tab-slider--trigger" rel="tab1" id="addIcon">
                    <svg width="18" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"/>
                    </svg>       
                  </a>
                  <a className="tab-slider--trigger" rel="tab2" id="listIcon">
                  <svg width="18" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"/>
                  </svg>
                  </a>
                  <a className="tab-slider--trigger" rel="tab4" id="userIcon">
                  <svg width="25" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0V0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" />
                  </svg>
                  </a>
                </div>
              </div>


            <div className="container">
            <div className="tab-slider--container">
            <div id="tab3" className="tab-slider--body">
                  <div className="container">
                    <HomeContainer />
                  </div>
                </div>
              <div id="tab1" className="tab-slider--body">
                <form onSubmit={this.onSubmit}>
                <input type="text" className="form-control" name="cno" value={cno} onChange={this.onChange} placeholder="Consumer Number" required /><br />
                <select className="selectOption"  name="area" value={area} onChange={this.onChange} required>
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
                <select className="selectOption"  name="day" value={day} onChange={this.onChange} required>
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
                <input type="date" name="fdate" value={fdate} onChange={this.onChange} required />
                <select className="selectOption"  name="type" value={type} onChange={this.onChange} required>
                    <option value="">Select Type</option>
                    <option value="Damage">Damage</option>
                    <option value="Faulty">Faulty</option>
                    <option value="SF">Suspcted Faulty</option>
                </select><br /><br />
                <button type="submit" className="btn" id="submitButton">Submit</button>
            </form>
            </div>
            </div>
                <div id="tab2" className="tab-slider--body">
                  <div className="container">
                    <GetData />
                  </div>
                </div>
                <div id="tab4" className="tab-slider--body">
                  <div className="container">
                    a
                  </div>
                </div>
            </div>
      </>
    );
  }
}

export default Create;