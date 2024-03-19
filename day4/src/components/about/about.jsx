import Back from "../common/Back"

import img from "../images/about.jpg"
import '../../assets/css/about.css'
import Heading from "../common/Heading";

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to our jobQuest! We've streamlined the process to make it easier than ever for talented individuals like you to join our team. Whether you're a seasoned professional or just starting your career journey, our jobQuest is designed to help you find the perfect opportunity. </p>
            <p>Explore our diverse range of open positions, submit your application with ease,and employees are empowered to grow and succeed. Join us on this exciting journey and take the next step toward building a rewarding career with us!</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
