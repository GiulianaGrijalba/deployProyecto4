import CardList from "@/components/CardList";

const HomeViews = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-wide font-serif">
  Productos más vendidos
</h1>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default HomeViews;
