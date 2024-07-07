import React from 'react';
import './style.css';

const RegistrationForm = () => {
  return (
    <div id="SurveyForm">
      <header>
        <h1 id="title">
          Registration Form
        </h1>
        <p id="description">Fill The details below to Register</p>
      </header>
      <form id="survey-form">
        <div className="input-headings">
          <label htmlFor="name" id="name-label" className="line"> Name </label>
          <input id="name" type="text" name="name" placeholder="Baljinder Singh" className="form-inputs" required />
          <br />

          <label htmlFor="email" id="email-label" className="line"> Email </label>
          <input id="email" type="email" name="email" placeholder="jojojojo01012003@gmail.com" className="form-inputs" required />
          <br />

          <label htmlFor="number" id="number-label" className="line"> Age </label>
          <input id="number" type="number" name="age" min="0" max="100" placeholder="69" className="form-inputs" required />
          <br />

          <label htmlFor="dropdown" id="gender" style={{ width: '90vw' }}> Select gender</label>
          <select id="dropdown">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <br />
          <label htmlFor="type" id="type">
            <b>Registration Type:</b>
          </label>
          <br />
          <input id="type-regular" type="radio" name="type" value="regular" />
          <label htmlFor="type-regular"> regular </label>
          <br />
          <input id="type-qota" type="radio" name="type" value="Qota" />
          <label htmlFor="type-qota"> Qota </label>
          <br />
          <input id="type-vip" type="radio" name="type" value="VIP" />
          <label htmlFor="type-vip"> VIP </label>
          <br />
          <br />
          <label htmlFor="Courses">
            <b>Courses</b>
          </label>
          <br />
          <input id="checkbox-bca" type="checkbox" name="Courses" value="BCA" />
          <label htmlFor="checkbox-bca">Bachelor's in Computer Application</label>
          <br />
          <input id="checkbox-btech" type="checkbox" name="Courses" value="B.tech" />
          <label htmlFor="checkbox-btech">Bachelor's in Technology</label>
          <br />
          <br />
          <label htmlFor="textarea" className="line textbox">Additional instructions:</label>
          <br />
          <textarea id="textarea" name="instructions" rows="5" cols="60"></textarea>
          <br />
          <input id="submit" type="submit" value="Register" className="submit-button" />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
