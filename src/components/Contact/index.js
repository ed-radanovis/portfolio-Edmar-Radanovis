import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_31fl6bn',
        'template_ecj8gim',
        refForm.current,
        'JkxAKJDF3qefdfRYU'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contate-me!'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Estou em busca de minha primeira oportunidade em alguma conceituada
            empresa - especialmente em projetos grandes e ambiciosos.
            No entanto, se você estiver interessado em outras solicitações, bem 
            como em algum projeto freelancer por exemplo, ou se tem perguntas, não
            hesite em entrar em contato comigo usando o formulário abaixo.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} autoComplete="off">
              <ul className="half">
                <li className="half">
                  <input type="text" name="name" placeholder="Nome:" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="e-mail:"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto:"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensagem:"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Edmar Radanovis
          <br />
          <br />
          Rua Boa Vista nº570,
          <br />
          Monte Sião - MG
          <br />
          Brasil
          <span>edradanovis@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-22.40312, -46.4886]} zoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-22.40312, -46.4886]}>
              <Popup>
                Eu resido aqui ... sinta-se a vontade para vir tomar um café !!!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
