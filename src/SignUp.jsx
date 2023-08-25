import React from 'react'
import joinTheClub from "./assets/images/joinTheClub.png";

const SignUp = () => {

    return (
        <>
            <div className="signup-body container">
                <div className='homepage'>
                    <img src={joinTheClub} id='homepageImg' />
                </div>
                <div className='homepage-content'>
                <div className='row'>
                    <div className='signup-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi ut mi condimentum pharetra. Quisque non urna sit amet odio sollicitudin eleifend ac non ligula. Nulla facilisi. Morbi in justo vel ipsum sollicitudin rutrum. Nulla facilisi. Proin vel neque nec nulla tincidunt volutpat. Pellentesque nec augue ac ipsum dictum congue. Aliquam euismod blandit enim, in ullamcorper ipsum dictum non. Aenean ut tortor velit.
                    </div>

                    <form id="signup-form" className='signup-paragraph column-singup'>
                        <div>
                            <label for="title">Title:</label>
                            <select id="title" name="title" required>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>
                        <div>
                            <label for="first-name">First Name:</label>
                            <input type="text" id="first-name" name="first-name" required />
                        </div>
                        <div>
                            <label for="last-name">Last Name:</label>
                            <input type="text" id="last-name" name="last-name" required />
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label for="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div>
                            <label for="dob">Date of Birth:</label>
                            <input type="date" id="dob" name="dob" required />
                        </div>
                        <div>
                            <label>Gender:</label>
                            <input type="radio" id="male" name="gender" value="Male" required />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" required />
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value="Other" required />
                            <label for="other">Other</label>
                        </div>
                        <div>
                            <button type="submit">Book Now</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp