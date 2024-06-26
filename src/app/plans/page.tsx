import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import PlansServerSideSection from "@/component/landing/plansSection/PlansServerSideSection";

const PlansPage = () => {
  return (
    <PageProvider title="Plans | TenSurf">
      <DefaultLayout>
        <div className="py-20 w-full flex justify-center ">
          <PlansServerSideSection />
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

PlansPage.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default PlansPage;
