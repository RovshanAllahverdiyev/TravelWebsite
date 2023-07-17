import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './main.css'
import './main.scss'

import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'


import img from '../../assets/img(1).jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'


const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$550',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$550',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$350',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta doloremque odit, dolor soluta culpa quidem rerum asperiores quo, maxime labore. Rerum ipsa nostrum non modi atque quia ullam tempora! Commodi numquam ut unde totam?',
  },

]

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section id='packages' className='main container section'>

      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos='fade-up' key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

              <div className="cardInfo">
                <h4 className='destTitle'
                >{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">

                  <div className="grade">
                    <span>{grade} <small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>

                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>

              </div>

              </div>
            )
          })
        }

      </div>


    </section>
    )
}

export default Main