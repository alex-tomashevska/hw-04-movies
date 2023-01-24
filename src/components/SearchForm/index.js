/** @format */

import {memo, useState} from 'react'
import styles from './SearchForm.module.css'

export const SearchForm = memo(({onSearch}) => {
  const [input, setInput] = useState('');
  
  const handleSearchInput = e => {
    const {value} = e.currentTarget;
    setInput(value)
  }
  const resetForm = () => setInput('')
  
  const handleSubmit = e => {
    e.preventDefault();
    
    onSearch(input);
    resetForm();
  }
  
  
 return  (
   <div className={styles.wrapper}>
     <form className={styles.form} onSubmit={handleSubmit}>
       <button type="submit" className={styles.button}>
         <span className={styles.label}>
           Search
         </span>
       </button>
       <input
        className={styles.input}
        type="text"
        value={input}
        onChange={handleSearchInput}
        autoComplete="off"
        placeholder="Search movie"
        // required={}
       />
     </form>
   </div>
  )
 
})