import { FundingSource } from "./types";

interface FundingSourcesTableProps {
  fundingSources: FundingSource[];
  onDelete: (id: string) => void;
}

export default function FundingSourcesTable(props: {
  fundingSources: FundingSource[];
  onDelete: (id: string) => void;
}) {
  const handleDelete = (id: string) => {
    try {
      fetch("http://localhost:3000/funding-sources/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }).then((response) => {
        props.onDelete(id);
      });
    } catch (error) {
      console.error("Error deleting funding source", error);
    }
  };

  const fundingSources = props.fundingSources;

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-7/8 display-block">
      <div className="flex flex-col display-block">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="block min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Source Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Cost
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Projected LTC Payout
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Projected Total Payout
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Projected ROI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {fundingSources.map((source) => (
                    <tr
                      className="hover:bg-gray-100 dark:hover:bg-neutral-700"
                      key={source.id}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {source.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {source.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {`${USDollar.format(source.cost)}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {`${USDollar.format(source.projectedLtcPayout)}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {`${USDollar.format(source.projectedTotalPayout)}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-300">
                        {`${source.projectedROI}%`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                          onClick={(e) => {
                            alert(
                              "I would enable inline editing of the row for the ideal UX"
                            );
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                          onClick={(e) => {
                            alert(
                              "Ideal: show a modal in which user confirms they want to delete. Show a message afterwards confirming deletion is successful."
                            );
                            handleDelete(source.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
