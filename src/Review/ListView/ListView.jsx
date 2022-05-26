import React from "react";
import ListElement from "./ListElement";
import styles from "../../../style/review_style/ListView.module.css";
export default function ListView() {
  return (
    <div className={styles.listview}>
      <ListElement />
    </div>
  );
}