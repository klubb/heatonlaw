import React from "react"
import { Link } from "gatsby"
import './page-styles/practice-area.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import column from '../images/lawfirm-column.jpg'
import dispute from '../images/lawfirm-dispute.jpg'
import injury from '../images/lawfirm-injury.jpg'
import auto from '../images/lawfirm-auto.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="practice-areas" />

      <main>
        <div>
        <div className="card">
            <div className="card-info">
            <strong className='card-header borderr'> Criminal Law </strong>
            <img src={column} alt=""/>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus iure perspiciatis corporis vitae totam ratione, dolorum minima, cumque vero ut! Neque ullam quo ea fuga minima eum rerum animi.
            </p>
            </div>
            
        </div>

        <div className="card">
            <div className="card-info">
            <strong className='card-header borderr'> Auto Accident </strong>
            <img src={auto} alt=""/>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus iure perspiciatis corporis vitae totam ratione, dolorum minima, cumque vero ut! Neque ullam quo ea fuga minima eum rerum animi.
            </p>
            </div>
        </div>

        <div className="card">
            <div className="card-info">
            <h1><strong className='card-header borderr'> Personal Injury </strong></h1>
            <img src={injury} alt=""/>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus iure perspiciatis corporis vitae totam ratione, dolorum minima, cumque vero ut! Neque ullam quo ea fuga minima eum rerum animi.
            </p>
            </div>
        </div>

        <div className="card">
            <div className="card-info">
            <strong className='card-header borderr'> Divorce </strong>
            <img src={dispute} alt=""/>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus iure perspiciatis corporis vitae totam ratione, dolorum minima, cumque vero ut! Neque ullam quo ea fuga minima eum rerum animi.
            </p>
            </div>
        </div>

        <div className="card">
            <div className="card-info">
            <strong className='card-header borderr'> Disputes </strong>
            <img src={dispute} alt=""/>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero temporibus iure perspiciatis corporis vitae totam ratione, dolorum minima, cumque vero ut! Neque ullam quo ea fuga minima eum rerum animi.
            </p>
            </div>
        </div>
        </div>
      </main>


  </Layout>
)

export default SecondPage
