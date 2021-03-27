import { useState } from "react";
import "./Form.css";
import Heading from "./Heading";
import axios from "axios";
import { Link } from "react-router-dom";
const Form = () => {
  const [userStreamDefault, setUserStreamDefault] = useState("");
  const [gender, setGender] = useState();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userDescription: "",
    userEmail: "",
    userPhoneNumber: "",
    userAddress: "",
    userDateOfBirth: "",
    userGender: "",
    userTenthSchoolName: "",
    userTenthPercentage: "",
    userTwelfthSchoolName: "",
    userTwelfthPercentage: "",
    userStream: "",
    message: "",
  });

  const formValue = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();
    event.target.reset();
    const body = JSON.stringify({
      userName: userDetails.userName,
      userDescription: userDetails.userDescription,
      userEmail: userDetails.userEmail,
      userPhoneNumber: userDetails.userPhoneNumber,
      userAddress: userDetails.userAddress,
      userDateOfBirth: userDetails.userDateOfBirth,
      userGender: gender,
      userTenthSchoolName: userDetails.userTenthSchoolName,
      userTenthPercentage: userDetails.userTenthPercentage,
      userTwelfthSchoolName: userDetails.userTwelfthSchoolName,
      userTwelfthPercentage: userDetails.userTwelfthPercentage,
      userStream: userStreamDefault,
    });

    const response = await axios.post("/api/register", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUserDetails({
      ...userDetails,
      message: response.data.message,
    });
  };

  return (
    <>
      <Heading
        title='University Registration Form'
        description='This form is only for the student who are interested in pursuing
            Bachelor of Technology'
      />
      <div className='row'>
        <div className='card form-card' style={{ width: "30rem" }}>
          <div className='card-body'>
            <form onSubmit={register}>
              <div className='col-auto mb-3'>
                <label htmlFor='userName' className='form-label'>
                  <b>Name</b>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your Name'
                  aria-describedby='userName'
                  id='userName'
                  name='userName'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3'>
                <label htmlFor='userDescription' className='form-label'>
                  <b>Describe yourself</b>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Describe yourself in few words'
                  aria-describedby='userDescription'
                  id='userDescription'
                  name='userDescription'
                  required
                  onChange={formValue}
                />
              </div>
              <div className=' col-auto mb-3'>
                <label htmlFor='userEmail' className='form-label'>
                  <b>Email</b>
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your Email'
                  aria-describedby='userEmail'
                  id='userEmail'
                  name='userEmail'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3'>
                <label htmlFor='userPhoneNumber' className='form-label'>
                  <b>Phone Number</b>
                </label>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Enter your Phone Number'
                  aria-describedby='userPhoneNumber'
                  id='userPhoneNumber'
                  name='userPhoneNumber'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3'>
                <label htmlFor='userAddress' className='form-label'>
                  <b>Residential Address</b>
                </label>
                <textarea
                  className='form-control'
                  type='text'
                  placeholder='Enter your Residential Address'
                  aria-describedby='userAddress'
                  id='userAddress'
                  name='userAddress'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3'>
                <label htmlFor='userDateOfBirth' className='form-label'>
                  <b>Date Of Birth</b>
                </label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='Enter your Date Of Birth'
                  aria-describedby='userDateOfBirth'
                  id='userDateOfBirth'
                  name='userDateOfBirth'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3 radio form-group'>
                <label htmlFor='userGender' className='form-label'>
                  <b>Gender:</b>
                </label>{" "}
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='Male'
                    id='userGender'
                    checked={gender === "Male"}
                    value='Male'
                    default
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className='form-check-label' htmlFor='userGenderMale'>
                    Male
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='Female'
                    default
                    id='userGender'
                    checked={gender === "Female"}
                    value='Female'
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label
                    className='form-check-label'
                    htmlFor='userGenderFemale'
                  >
                    Female
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='Other'
                    default
                    id='userGender'
                    checked={gender === "Other"}
                    value='Other'
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className='form-check-label' htmlFor='userGenderOther'>
                    Other
                  </label>
                </div>
              </div>

              <label htmlFor='educationalQualification' className='form-label'>
                <b>Educational Qualification</b>
              </label>
              <div className='col-auto mb-3'>
                <label htmlFor='userTenthPercentage' className='form-label'>
                  <b>10th Standard</b>
                </label>
                <input
                  type='text'
                  className='form-control mb-3'
                  placeholder='Enter your school board name'
                  aria-describedby='userTenthSchoolName'
                  id='userTenthSchoolName'
                  name='userTenthSchoolName'
                  required
                  onChange={formValue}
                />
                <input
                  type='number'
                  className='form-control mb-3'
                  placeholder='Enter your Percentage'
                  aria-describedby='userTenthPercentage'
                  id='userTenthPercentage'
                  name='userTenthPercentage'
                  required
                  onChange={formValue}
                />
              </div>
              <div className='col-auto mb-3'>
                <label htmlFor='userTwelfthPercentage' className='form-label'>
                  <b>12th Standard</b>
                </label>
                <input
                  type='text'
                  className='form-control mb-3'
                  placeholder='Enter your school board name'
                  aria-describedby='userTwelfthSchoolName'
                  id='userTwelfthSchoolName'
                  name='userTwelfthSchoolName'
                  required
                  onChange={formValue}
                />
                <input
                  type='number'
                  className='form-control mb-3'
                  placeholder='Enter your Percentage'
                  aria-describedby='userTwelfthPercentage'
                  id='userTwelfthPercentage'
                  name='userTwelfthPercentage'
                  required
                  onChange={formValue}
                />
              </div>
              <label htmlFor='bTechStream' className='form-label'>
                <b>Stream</b>
              </label>
              <select
                className='form-select'
                aria-label='Choose Your Stream'
                value={userStreamDefault}
                onChange={(e) => {
                  setUserStreamDefault(e.target.value);
                }}
              >
                <option>Choose Your Stream</option>
                <option
                  value='Mechanical Engineering'
                  id='userStream'
                  name='Mechanical Engineering'
                >
                  Mechanical Engineering
                </option>
                <option
                  value='Civil Engineering'
                  id='userStream'
                  name='Civil Engineering'
                >
                  Civil Engineering
                </option>
                <option
                  value='Electrical Engineering'
                  id='userStream'
                  name='Electrical Engineering'
                >
                  Electrical Engineering
                </option>
                <option
                  value='Computer Science & Engineering'
                  id='userStream'
                  name='Computer Science & Engineering'
                >
                  Computer Science & Engineering
                </option>
                <option
                  value='Electronics & Communication Engineering'
                  id='userStream'
                  name='Electronics & Communication Engineering'
                >
                  Electronics & Communication Engineering
                </option>
                <option
                  value='Information & Technology'
                  id='userStream'
                  name='Information & Technology'
                >
                  Information & Technology
                </option>
              </select>

              <br />
              <button type='submit' className='button btn btn-success mb-3'>
                Submit
              </button>
              <Link to='/' />
              {userDetails.message ? (
                <div className='alert alert-success' role='alert'>
                  {userDetails.message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
