import React from 'react'
import Cards from './components/cards/Cards'
import Charts from './components/chart/Charts'
import Countrypickers from './components/countrypicker/Countrypickers'
import Footer from './components/footer/Footer'
import styles from './App.module.css'
import {fetchData} from './api/index'
import coronamage from './images/image.png'

class App extends React.Component
{

  state = {

    data : {

    },

    country : '' ,
  }


  handleCountryChange = async (country) =>
  {
    console.log(country);
    //fetch the data
    //set the state

    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData , country : country});


  }
  async componentDidMount()
  {
    const fetchedData = await fetchData()
    
    console.log(fetchedData)
    this.setState({data : fetchedData})
  }


  render()
  {

    const {data} = this.state;
    const {country} = this.state;

    return(
      <div className={styles.container}>
          <img className={styles.image} alt="COVID-19" src={coronamage} />
          <Cards data = {data}/>
          <Countrypickers handleCountryChange = {this.handleCountryChange} />
          <Charts data = {data} country = {country}/>
          
      </div>
   
    )
  }
}


export default App
