import FundingSourcesTable from "./FundingSourcesTable";
import { useFundingSources } from "./useFundingSources";
import { useEffect, useState } from "react";

const App = () => {
  const [fundingSources, setFundingSources, status] = useFundingSources();

  const handleDelete = (id: string) => {
    setFundingSources((prevSources) =>
      prevSources.filter((source) => source.id !== id)
    );
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Funding Sources
        </h1>
        <FundingSourcesTable
          fundingSources={fundingSources}
          onDelete={handleDelete}
        />
        <div className="flex flex-row justify-start mt-4 display-block">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
            onClick={(e) => {
              alert(
                "Either show a modal for user to enter info, or display as if it is an inline row on the table for a more consistent visual experience."
              );
            }}
          >
            Add new funding source
          </button>
        </div>
        {/* TODO Step 2. Time permitting, add the ability to add, edit, delete funding sources from the database.  */}
      </div>
    );
  }
};

export default App;
