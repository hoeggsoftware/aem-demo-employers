import * as React from 'react'
import Layout from '@/components/Layout'
import './App.css'
import Benefits from '../components/benefits'



const JobSeeker = () => {


    return (
        <Layout>
        <div className="sub-menu">
            <div className="sub-menu-container">
                <div className="container">
                    <h1 className="sub-menu-header">Job Seekers</h1>
                    <ul className="sub-list">
                        <li className="sub-list-item">Placeholder 1: replace with card (possibly tabbed)</li>
                        <li className="sub-list-item">Placeholder 2: replace with card (possibly tabbed)</li>
                    </ul>
                </div>
            </div>
            <Benefits />
        </div>
        </Layout>
    )
}

export default JobSeeker