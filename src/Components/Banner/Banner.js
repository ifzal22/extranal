"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          <Link href="/Header">
            <h1>Muslim</h1>
          </Link>

          {/* <br className="max-md:hidden" /> */}
          <span className="orange_gradient text-center"> Network</span>
        </h1>
        <p className="desc text-center">
          slamic blogs are online platforms where individuals or organizations
          share content related to Islam, including articles, essays, personal
          experiences, religious teachings, and discussions on various Islamic
          topics.
        </p>
      </section>
    </>
  );
};

export default Banner;
