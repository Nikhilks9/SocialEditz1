import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import YoutubeEmbed from "../components/YoutubeEmbed";
import YoutubeEmbed1 from "../components/YoutubeEmbed1";
import YoutubeEmbed2 from "../components/YoutubeEmbed2";
import YoutubeEmbed3 from "../components/YoutubeEmbed3";
import YoutubeEmbed4 from "../components/YoutubeEmbed4";
const Project = () => {
  return (
    <div>
      <NavBar/>
      <YoutubeEmbed embedId="AyEuu6hg_Ws" />
      <h1>Sample 1</h1>
      <YoutubeEmbed embedId="wid-_yKvpxM" />
      <h1>Sample 2</h1>
      <YoutubeEmbed embedId="q9_jpEB_nH8" />
      <h1>Sample 3</h1>
      <YoutubeEmbed embedId="3CpcXT1u31U" />
      <h1>Sample 4</h1>
      <YoutubeEmbed embedId="jwTgI8L9sLU" />
      <h1>Sample 5</h1>
      <Footer/>
    </div>
  )
}

export default Project