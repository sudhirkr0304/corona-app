import React , {useState , useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import styles from './Countrypicker.module.css'
import {fetchCountries} from './../../api/index'

const Countrypicker = ({handleCountryChange}) =>
{
    const [fetchedCountries , setfetchedCountries] = useState([]);
    useEffect( () =>
    {
        const fetchAPI = async () =>
        {
            setfetchedCountries(await fetchCountries() );
        }

        fetchAPI();
    },[setfetchedCountries])
    return (
        
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue = "" onChange = {(e) =>handleCountryChange(e.target.value)}>
            <option value="">global</option>
            {fetchedCountries.map((country,i) => <option key={i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default Countrypicker