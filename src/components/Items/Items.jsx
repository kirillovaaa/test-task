import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Items = ({ data }) => {
  return (
    <div className={styles.promoItems} id="items">
      {data.map((item) => (
        <div key={item.id} className={styles.promoItem} data-types={item.types}>
          <Image
            className={styles.promoItemImage}
            src={item.img}
            width={
              item.types === "types__2" || item.types === "types__4" ? 688 : 344
            }
            height={344}
            alt={item.title}
          />
          <h2 className={styles.promoItemTitle}>{item.title}</h2>
          <span className={styles.promoItemDate}>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Items;
