import { Sale } from "../APIResponseTypes/Product";
import { ChevronDown } from "lucide-react";

export default function SalesTable({ sales }: { sales: Sale[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            {[
              "weekEnding",
              "retailSales",
              "wholesaleSales",
              "unitsSold",
              "retailerMargin",
            ].map((col) => (
              <th
                key={col}
                className="pb-2 px-4 cursor-pointer font-secondary text-sm font-normal border-b border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <span>{col.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
                  <div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sales.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <td className="py-3 px-4 font-secondary font-light text-sm text-gray-400">
                {row.weekEnding}
              </td>
              <td className="py-3 px-4 font-secondary font-light text-sm text-gray-400">
                ${row.retailSales.toLocaleString()}
              </td>
              <td className="py-3 px-4 font-secondary font-light text-sm text-gray-400">
                ${row.wholesaleSales.toLocaleString()}
              </td>
              <td className="py-3 px-4 font-secondary font-light text-sm text-gray-400">
                {row.unitsSold}
              </td>
              <td className="py-3 px-4 font-secondary font-light text-sm text-gray-400">
                ${row.retailerMargin.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
