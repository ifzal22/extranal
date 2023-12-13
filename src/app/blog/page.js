import CardList from "@src/Components/cardList/CardList";
const Page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <div>
        <div>
          <CardList page={page} />
        </div>
      </div>
    </div>
  );
};

export default Page;
