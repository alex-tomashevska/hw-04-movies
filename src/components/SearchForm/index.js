/** @format */

import { memo, useState } from "react";
import styles from "./SearchForm.module.css";

export const SearchForm = memo(({ handleSubmit, value, handleChangeValue }) => (
  <div className={styles.wrapper}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <button type="submit" className={styles.button}>
        <span className={styles.label}>Search</span>
      </button>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChangeValue}
        placeholder="Search movie"
      />
    </form>
  </div>
));
