import React, { useState, useEffect, Fragment, useContext } from 'react';
import firebase from '../../base';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../auth/auth';
import './create.css';
import $ from 'jquery';
// import { Row, Col, Container } from 'react-bootstrap'

function SnapshotFirebaseAdvanced() {
  const { currentUser } = useContext(AuthContext);
  // const currentUserId = currentUser ? currentUser.uid : null;
  const [faultymeters, setFaultymeters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cno, setCno] = useState('');
  const [area, setArea] = useState('');
  const [day, setDay] = useState('');
  const [fdate, setFdate] = useState('');
  const [type, setType] = useState('');

  const ref = firebase.firestore().collection('faultymeters');

  //REALTIME GET FUNCTION
  function getSchools() {
    setLoading(true);
    ref
      // .where('owner', '==', currentUserId)
      // .where('cno', '==', 'School1') // does not need index
      // .where('fdate', '<=', 10)    // needs index
      // .orderBy('owner', 'asc')
      // .limit(3)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setFaultymeters(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function addSchool() {
    const owner = currentUser ? currentUser.uid : 'unknown';
    const ownerEmail = currentUser ? currentUser.email : 'unknown';
    const newSchool = {
      cno,
      area,
      day,
      fdate,
      type,
      id: uuidv4(),
      owner,
      ownerEmail,
    };
    ref
      .doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.error(err);
      });      
  }


  //DELETE FUNCTION
  function deleteSchool(faultymeters) {
    ref
      .doc(faultymeters.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }


  


  $("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });
  
  $(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    if($(this).attr("rel") === "tab2"){
      $('.tab-slider--tabs').addClass('slide');
    }else{
      $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
  });




  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable .row").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


$('.clearbtn').click(function() {
  window.location.reload()
});

  return (
    <Fragment>
            <div className="container">
              <div className="tab-slider--nav">
                <ul className="tab-slider--tabs">
                  <li className="tab-slider--trigger active" rel="tab1">Create</li> 
                  <li className="tab-slider--trigger" rel="tab2">View</li>
                </ul>
              </div>
              </div>
              
              <div className="container">
            <div className="tab-slider--container">
              <div id="tab1" className="tab-slider--body">

                          <div className="inputBox">
                            <input className="createCon" type="text" name="cno" placeholder="C# number" value={cno} onChange={(e) => setCno(e.target.value)} required />
                            <select className="createArea" value={area} name="area" onChange={(e) => setArea(e.target.value)} required >  {/* AREA CODE */}
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
                                        <select className="createDay"  name="day" value={day} onChange={(e) => setDay(e.target.value)} required>  {/* DAY CODE */}
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
                                        <input className="createDate" type="date" name="fdate"  value={fdate} onChange={(e) => setFdate(e.target.value)} required  /> {/* METER FAULTY DATE */}
                                        <select className="createType"  name="type" value={type} onChange={(e) => setType(e.target.value)} required>  {/* TYPE */}
                                            <option value="">Select Type</option>
                                            <option value="Damage">Damage</option>
                                            <option value="Faulty">Faulty</option>
                                            <option value="SF">Suspcted Faulty</option>
                                        </select>

                            <button onClick={() => addSchool()}  className="createbtn">Submit</button>
                            <button   className="clearbtn">Clear</button>
                          </div>
                          </div>
                          <div id="tab2" className="tab-slider--body">
                          <input id="myInput" type="text" placeholder="Search.." />
                                <div className="row row-cols-5" id="headTable">
                                  <div className="col"><span>C#</span></div>
                                  <div className="col"><span>Area/Day</span></div>
                                  <div className="col" id="dateID"><span>Date</span></div>
                                  <div className="col" id="typeID"><span>Type</span></div>
                                  <div className="col"><span>Delete</span></div>
                                </div>

                          {loading ? <h1>please wait...</h1> : null}
                          {faultymeters.map((meters) => (
                            <div className="school" key={meters.id}>
                              <div id="myTable">
                                {/* <tr> */}
                                <div className="row row-cols-5" id="contentTable">
                                  <div className="col"><span>{meters.cno}</span></div>
                                  <div className="col"><span>{meters.area}/{meters.day}</span></div>
                                  <div className="col" id="dateID"><span>{meters.fdate}</span></div>
                                  <div className="col" id="typeID"><span>{meters.type}</span></div>
                                  <div className="col">
                                    <span>
                                      <button onClick={() => deleteSchool(meters)}>
                                      <svg width="10" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="red"/>
                                      </svg>
                                      </button>
                                      </span>
                                  </div>
                                </div>
                                </div>                       
                              <div>
                                
                              </div>
                            </div>
                          ))}
                              </div>
                      </div>
                    </div>


                   
{/* <br /><br /> */}
{/* 
<table>
  <thead>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
  </tr>
  </thead>
  <tbody id="myTable">
  <tr>
    <td>kohn</td>
    <td>Doe</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Mary</td>
    <td>Moe</td>
    <td>mary@mail.com</td>
  </tr>
  <tr>
    <td>July</td>
    <td>Dooley</td>
    <td>july@greatstuff.com</td>
  </tr>
  <tr>
    <td>Anja</td>
    <td>Ravendale</td>
    <td>a_r@test.com</td>
  </tr>
  </tbody>
  </table> */}




    </Fragment>
  );
}

export default SnapshotFirebaseAdvanced;









