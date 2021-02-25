import React from "react"
import Banner from '../components/Banner'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import '../components/scss/index/index.scss'
import Head from '../components/head'
export default function Home() {
  return <div>
  <Head/>
  <Banner/>
  <Page2/>
  <Page3/>
  <Page4/>
  <Page5/>
  </div>
}
