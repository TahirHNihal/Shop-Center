import CategorySideBar from "@/components/CategorySideBar";
import PageHeader from "@/components/PageHeader";

const layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <CategorySideBar/>
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
