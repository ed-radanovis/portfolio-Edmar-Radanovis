import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Sobre  mim  :'.split('')}
              idx={15}
            />
          </h1>
          <p className="p1">
            Sou profissional na área de tecnologia desde Janeiro de 2022, com
            know-how diversificado e promissor, sólido aprendizado e com
            excelentes habilidades de comunicação para colaborar como parte de
            uma equipe heterogênea e produtiva. Familiarizado com as mais
            recentes ferramentas, técnicas e procedimentos de desenvolvimento.
          </p>
          <p className="p2">
            Tenho capacidade de mudar de contexto e fornecer soluções
            inovadoras. Procuro dar vida às ideias e entregar resultados
            atraentes antes do previsto. Tudo isso enquanto mantenho o olhar
            aguçado para o design, acessibilidades e um código bem estruturado.
          </p>
          <p className="p3">
            Estou me especializando na criação de sites para indivíduos e pequenas
            empresas. Você não deveria se contentar com soluções baratas ou
            modelos genéricos. Eu forneço projetos personalizados a preços
            acessíveis.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespiner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#e54c21" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#44b4ff" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#497ad7" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#83cd29" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#f05030" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
