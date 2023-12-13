import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

const getData = async () => {
  const res = await fetch("https://blog-api-vercel.onrender.com/api/tags", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item?.image && (
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
