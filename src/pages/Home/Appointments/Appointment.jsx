import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Button from '../../components/Button';
import bgImg from '../../../assets/images/appointment.png'
const Appointment = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-24' style={{ background: `url(${bgImg})` }}>
            <div className='w-1/2 mx-auto hidden lg:block'>
                <img className='mt-[-120px] w-[606px] h-[636px]' src={doctor} alt="" />
            </div>
            <div className='text-white mx-12 lg:mx-0 lg:mt-10 lg:mr-8 py-8'>
                <h4 className='font-bold text-primary'>Appointment</h4>
                <h2 className='text-4xl font-bold'>Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default Appointment;