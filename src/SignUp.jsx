import React, { useState } from 'react'
import joinTheClub from "./assets/images/joinTheClub.png";
import Input from './components/TextInput';

const SignUp = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [dob, setDob] = useState(formattedDate)
    const [gender, setGender] = useState('')

    const checkEmailValidation = (email) => {
        if (email !== '' || email !== undefined) {
            //Do actual email validation here
            setEmail(email)
        } else {
            return
        }
    }

    const HandleSubmit = () => {

    }

    return (
        <>
            <div className="signup-body container">
                <div className='homepage'>
                    <img alt='Join the Club' src={joinTheClub} id='homepageImg' />
                </div>
                <div className='homepage-content'>
                <div className='row gap-250'>
                    <div className='signup-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi ut mi condimentum pharetra. Quisque non urna sit amet odio sollicitudin eleifend ac non ligula. Nulla facilisi. Morbi in justo vel ipsum sollicitudin rutrum. Nulla facilisi. Proin vel neque nec nulla tincidunt volutpat. Pellentesque nec augue ac ipsum dictum congue. Aliquam euismod blandit enim, in ullamcorper ipsum dictum non. Aenean ut tortor velit.
                    </div>

                    <form id="signup-form" className='signup-paragraph' onSubmit={HandleSubmit}>
                        <div>
                            <label for="title">Title:</label>
                            <select className='text-input' id="title" name="title" required>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>
                        <Input type="text" label="First Name" id="first-name" value={firstName} onChange={(event) => {setFirstName(event.target.value)}}/>
                        <Input type="text" label="Last Name" id="last-name" value={lastName} onChange={(event) => {setLastName(event.target.value)}}/>
                        <Input type="text" label="Email" id="email" value={email} onChange={(event) => {checkEmailValidation(event.target.value)}} />
                        <Input type="tel" label="Phone" id="phone" value={phone} onChange={(event) => {setPhone(event.target.value)}} required />
                        <div>
                            <label for="dob">Date of Birth:</label>
                            <input className='text-input' type="date" id="dob" name="dob" value={dob} onChange={(event) => {setDob(event.target.value)}} required />
                        </div>
                        <div>
                            <label>Gender:</label>
                        </div>
                        <div className='row gap-20'>
                            <input type="radio" id="male" name="gender" value="Male" onSelect={(event) => {setGender(event.target.value)}} required />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" onSelect={(event) => {setGender(event.target.value)}} required />
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value="Other" onSelect={(event) => {setGender(event.target.value)}} required />
                            <label for="other">Other</label>
                        </div>
                        <div>
                            <button type="submit" className='submit-button'>Book Now</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp