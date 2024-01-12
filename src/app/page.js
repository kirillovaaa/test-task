import Items from "@/components/Items/Items";
import Buttons from "@/components/Buttons/Buttons";
import styles from "./page.module.css";

const data = [
  {
    id: 1,
    types: "types__1",
    img: "https://celes.club/uploads/posts/2021-12/1640090749_5-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-6.jpg",
    title: "Как повысить удои коров",
    date: "12 февраля 2024",
  },
  {
    id: 2,
    types: "types__2",
    img: "https://celes.club/uploads/posts/2021-12/1640090810_4-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-4.jpg",
    title:
      "Как повысить удои коров: факторы, от которых зависит молочная продуктивность",
    date: "12 февраля 2024",
  },
  {
    id: 3,
    types: "types__3",
    img: "https://celes.club/uploads/posts/2021-12/1640090779_2-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-2.jpg",
    title: "Как повысить удои коров",
    date: "12 февраля 2024",
  },
  {
    id: 4,
    types: "types__4",
    img: "https://celes.club/uploads/posts/2021-12/1640090778_3-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-3.jpg",
    title:
      "Как повысить удои коров: факторы, от которых зависит молочная продуктивность",
    date: "12 февраля 2024",
  },
  {
    id: 5,
    types: "types__5",
    img: "https://celes.club/uploads/posts/2021-12/1640090732_1-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-1.jpg",
    title: "Как повысить удои коров",
    date: "12 февраля 2024",
  },
];

export default function Home() {
  return (
    <main className={styles.promo}>
      <h1 className={styles.promoHeading}>Полезные материалы</h1>
      <p className={styles.promoText}>
        Собрали для вас полезные исследования схемы кормления и другие
        материалы, которые пригодятся для лучших результатов на вашем хозяйстве
      </p>

      <Items data={data} />

      <Buttons />
    </main>
  );
}
