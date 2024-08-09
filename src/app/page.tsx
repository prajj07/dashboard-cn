/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month"
    
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month"
   
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month"
    
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour"
    
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Prajwal",
    email: "prajwal@example.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Raj",
    email: "raj@example.com",
    saleAmount: "+$39.00"
  },
  {
    name: "vishnu",
    email: "vish@example.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Michael Davis",
    email: "michael@example.com",
    saleAmount: "+$39.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
