import React from 'react'
import Header from '../../components/common/header'
import Taboptions from '../../components/common/taboptions'
import Footer from '../../components/common/foorter'

const HomePage = () => {

  const [activeTab , setActiveTab] =

  return (
    <div>
      <Header />
      <Taboptions />
      
      {getCorrectScreen()}
      <Footer />
      hello 
   </div>
  )
}

const getCorrectScreen=()=>{
    switch()
}

export default HomePage
