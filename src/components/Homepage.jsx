import React from 'react';
import homepageImg from '../assets/images/homePage.png'
import NowShowing from './NowShowing';
import popcornImg from '../assets/images/snacks.png'
import dealImage from '../assets/images/filmPromo.png'

const Homepage = () => {
    return (
        <div className='container'>
            <div className='homepage'>
                <img alt='homepageImage' src={homepageImg} id='homepageImg'/>
            </div>
            <div className='homepage-content'>
                <div className='row'>
                    <div className='divider'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum lectus in dignissim rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel justo vitae eros tincidunt mattis in cursus justo. In quis erat vitae lacus cursus fringilla ut in augue. Sed ligula mi, porttitor quis nisl quis, ultrices iaculis felis. 
                        </p>
                        <img alt='popcorn' src={popcornImg} className='snack-image'/>
                    </div>
                    <div className='divider'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum lectus in dignissim rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel justo vitae eros tincidunt mattis in cursus justo. In quis erat vitae lacus cursus fringilla ut in augue. Sed ligula mi, porttitor quis nisl quis, ultrices iaculis felis. Pellentesque id aliquam diam, sit amet euismod turpis. Nullam quis gravida urna. Nam a ultrices justo. Fusce ac felis nec nisi faucibus tempus. Nunc a sem lectus. Nam tincidunt sem a ultrices faucibus. Cras id justo eget arcu consectetur congue ut non metus. Vivamus id lacus sit amet mauris elementum fermentum. Praesent id lorem metus. Aliquam ultrices consequat sodales. Vivamus tempor, metus eu volutpat scelerisque, mi sem dignissim dui, at mollis eros lacus vel ligula.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum lectus in dignissim rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel justo vitae eros tincidunt mattis in cursus justo. In quis erat vitae lacus cursus fringilla ut in augue. Sed ligula mi, porttitor quis nisl quis, ultrices iaculis felis. Pellentesque id aliquam diam, sit amet euismod turpis. Nullam quis gravida urna. Nam a ultrices justo. Fusce ac felis nec nisi faucibus tempus. Nunc a sem lectus. Nam tincidunt sem a ultrices faucibus.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='divider'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum lectus in dignissim rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel justo vitae eros tincidunt mattis in cursus justo. In quis erat vitae lacus cursus fringilla ut in augue. Sed ligula mi, porttitor quis nisl quis, ultrices iaculis felis. Pellentesque id aliquam diam, sit amet euismod turpis. Nullam quis gravida urna. Nam a ultrices justo. Fusce ac felis nec nisi faucibus tempus. Nunc a sem lectus. Nam tincidunt sem a ultrices faucibus. Cras id justo eget arcu consectetur congue ut non metus. Vivamus id lacus sit amet mauris elementum fermentum. Praesent id lorem metus. Aliquam ultrices consequat sodales. Vivamus tempor, metus eu volutpat scelerisque, mi sem dignissim dui, at mollis eros lacus vel ligula.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum lectus in dignissim rutrum.
                        </p>
                        
                    </div>
                    <div className='divider'>
                        <img alt='popcorn' src={dealImage} className='snack-image'/>
                    </div>
                </div>
            </div>
            <NowShowing />
        </div>
    )
}

export default Homepage