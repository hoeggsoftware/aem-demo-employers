import Image from 'next/image'
import styles from '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Layout from '../components/Layout'
import Carousel from '@/components/carousel'
import { aemHeadlessClient } from '@/aem-headless'
import './App.css'

export default function Home() {
  return (
   <Layout>
      <div className="home-content">
      {/* <h1 className="home-header">Central Office of Unemployment</h1> */}
      <Carousel />
      </div>
   </Layout>
  )
}
