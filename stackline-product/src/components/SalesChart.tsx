import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ProductComponentsProp } from "../APIResponseTypes/Product";

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
}

const transformDataToMonthly = (salesData: SalesData[]) => {
  const monthlyData: {
    [key: string]: {
      retailSales: number;
      wholesaleSales: number;
      count: number;
    };
  } = {};
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  salesData.forEach(({ weekEnding, retailSales, wholesaleSales }) => {
    const date = new Date(weekEnding);
    const month = date.toLocaleString("default", { month: "short" });
    if (!monthlyData[month]) {
      monthlyData[month] = { retailSales: 0, wholesaleSales: 0, count: 0 };
    }
    monthlyData[month].retailSales += retailSales;
    monthlyData[month].wholesaleSales += wholesaleSales;
    monthlyData[month].count += 1;
  });

  return monthOrder.map((month) => {
    if (monthlyData[month]) {
      return {
        month,
        retailSales: monthlyData[month].retailSales / monthlyData[month].count,
        wholesaleSales:
          monthlyData[month].wholesaleSales / monthlyData[month].count,
      };
    }
    return { month, retailSales: 0, wholesaleSales: 0 }; // Ensures all months are present
  });
};

export default function SalesChart({ product }: ProductComponentsProp) {
  const monthlySales = transformDataToMonthly(product?.sales || []);
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-md mb-4 font-secondary">Retail Sales</h2>
        <div className="h-80">
          <ResponsiveContainer width="95%" height="100%">
            <LineChart data={monthlySales}>
              <XAxis
                dataKey="month"
                className="py-3 px-4 font-secondary font-light text-sm text-gray-400"
                interval="preserveStartEnd"
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="retailSales"
                stroke="#4680ff"
                strokeWidth={4}
              />
              <Line
                type="monotone"
                dataKey="wholesaleSales"
                stroke="#a0aec0"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
