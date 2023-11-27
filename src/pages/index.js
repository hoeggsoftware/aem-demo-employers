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
      <Carousel />
   </Layout>
  )
}
