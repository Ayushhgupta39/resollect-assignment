import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";

interface LoanData {
  id: string;
  loanNo: string;
  loanType: string;
  borrower: string;
  borrowerAddress: string;
  coBorrower1Name: string;
  coBorrower1Address: string;
  currentDPD: number;
  sanctionAmount: number;
  region: string;
  state: string;
}

const loansData: LoanData[] = [
  {
    id: "1",
    loanNo: "L28U3247",
    loanType: "Home Loan",
    borrower: "Vedika Sachar",
    borrowerAddress: "83 Yogi Ganj, Kadapa-058720",
    coBorrower1Name: "Divit Vora",
    coBorrower1Address: "24/543, Acharya Path Ongole-052360",
    currentDPD: 91,
    sanctionAmount: 1934068,
    region: "West",
    state: "UP",
  },
  {
    id: "2",
    loanNo: "L28U3243",
    loanType: "Car Loan",
    borrower: "Hrishita Agrawal",
    borrowerAddress: "86/622, Deo Path, Berhampur 841186",
    coBorrower1Name: "Mahika Tak",
    coBorrower1Address: "58 Telia Road, Sultan Pur Majra 919878",
    currentDPD: 100,
    sanctionAmount: 1842143,
    region: "North",
    state: "MH",
  },
  {
    id: "3",
    loanNo: "L28U3250",
    loanType: "Car Loan",
    borrower: "Priyansh Soman",
    borrowerAddress: "H.No. 152 Andra Street Amritsar-417162",
    coBorrower1Name: "Zaina Dara",
    coBorrower1Address: "H.No. 42, Srivastava Marg, Junagadh-191124",
    currentDPD: 100,
    sanctionAmount: 4537889,
    region: "East",
    state: "TN",
  },
  {
    id: "4",
    loanNo: "L28U3248",
    loanType: "Home Loan",
    borrower: "Priyansh Chanda",
    borrowerAddress: "24, Ray Chowk Guntakal 509332",
    coBorrower1Name: "Zain Ghosh",
    coBorrower1Address: "H.No. 59, Dugar Street Kolhapur-543900",
    currentDPD: 100,
    sanctionAmount: 2681712,
    region: "West",
    state: "AP",
  },
  {
    id: "5",
    loanNo: "L28U3260",
    loanType: "Home Loan",
    borrower: "Hrishita Sen",
    borrowerAddress: "94/36 Barad, Hubli-Dharwad-408790",
    coBorrower1Name: "Shray Kala",
    coBorrower1Address: "63/66, Bhardwaj Street Bokaro 662204",
    currentDPD: 100,
    sanctionAmount: 4456808,
    region: "West",
    state: "RJ",
  },
  {
    id: "6",
    loanNo: "L28U3265",
    loanType: "Personal Loan",
    borrower: "Vivaan Virk",
    borrowerAddress: "H.No. 653 Dada Ganj Ichalkaranji 279923",
    coBorrower1Name: "Elakshi Chahal",
    coBorrower1Address: "16/45 Diwan Road Jabalpur 982051",
    currentDPD: 76,
    sanctionAmount: 3863514,
    region: "West",
    state: "MP",
  },
  {
    id: "7",
    loanNo: "L28U3264",
    loanType: "Car Loan",
    borrower: "Nirvaan Mander",
    borrowerAddress: "543 Singhal Street, Bhalswa Jahangir Pur-348320",
    coBorrower1Name: "Vihaan Dua",
    coBorrower1Address: "H.No. 115, Saha Road Singrauli 049374",
    currentDPD: 90,
    sanctionAmount: 1256683,
    region: "South",
    state: "KA",
  },
  {
    id: "8",
    loanNo: "L28U3266",
    loanType: "Personal Loan",
    borrower: "Nirvi Sahni",
    borrowerAddress: "41/42, Dua, Amroha-741195",
    coBorrower1Name: "Dhanuk Lalla",
    coBorrower1Address: "48/41, Garde Path Uluberia 709956",
    currentDPD: 75,
    sanctionAmount: 2687368,
    region: "East",
    state: "WB",
  },
  {
    id: "9",
    loanNo: "L28U3267",
    loanType: "Personal Loan",
    borrower: "Samaira Jain",
    borrowerAddress: "79/10 Barad Zila Thoothukudi 606938",
    coBorrower1Name: "Chirag Tripathi",
    coBorrower1Address: "23/11 Ravel Street, Panchkula-008035",
    currentDPD: 76,
    sanctionAmount: 3617146,
    region: "South",
    state: "GJ",
  },
  {
    id: "10",
    loanNo: "L28U3269",
    loanType: "Personal Loan",
    borrower: "Aradhya Jayaraman",
    borrowerAddress: "410, Vohra Zila Moradabad 963541",
    coBorrower1Name: "Shaan Hora",
    coBorrower1Address: "35/41, Bajaj Nagar Nagaon-504713",
    currentDPD: 76,
    sanctionAmount: 1383439,
    region: "South",
    state: "AP",
  },
];

const LoanTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = React.useState(0);
  const [sortColumn, setSortColumn] = React.useState<keyof LoanData | null>(
    null
  );
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc"
  );

  const rowsPerPage = 10;
  const totalPages = Math.ceil(loansData.length / rowsPerPage);

  // Toggle selection of a single row
  const toggleRowSelection = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  // Toggle all rows on current page
  const toggleAllRows = () => {
    const currentPageIds = paginatedData.map((row) => row.id);
    const newSelected = new Set(selectedRows);

    // Check if all current page rows are selected
    const allSelected = currentPageIds.every((id) => selectedRows.has(id));

    if (allSelected) {
      // Remove all current page ids
      currentPageIds.forEach((id) => newSelected.delete(id));
    } else {
      // Add all current page ids
      currentPageIds.forEach((id) => newSelected.add(id));
    }

    setSelectedRows(newSelected);
  };

  // Sort data
  const handleSort = (column: keyof LoanData) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return loansData;

    return [...loansData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [loansData, sortColumn, sortDirection]);

  // Get paginated data
  const paginatedData = React.useMemo(() => {
    const start = currentPage * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Check if all rows on current page are selected
  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => selectedRows.has(row.id));

  // Check if some but not all rows are selected
  const isSomeSelected =
    paginatedData.some((row) => selectedRows.has(row.id)) && !isAllSelected;

  return (
    <div className="w-full">
      <div className="border-[1.5px] w-full p-2 mb-2 rounded-lg">
        <p className="text-base text-gray-400">
          {selectedRows.size} loans selected
        </p>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">
                <Checkbox
                  checked={
                    isAllSelected || (isSomeSelected ? false : undefined)
                  }
                  // Remove the indeterminate prop since it doesn't exist in Shadcn's Checkbox
                  onCheckedChange={() => toggleAllRows()}
                  aria-label="Select all rows"
                  className={isSomeSelected ? "opacity-70" : ""}
                />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("loanNo")}
                  className="font-medium"
                >
                  Loan No.
                  {sortColumn === "loanNo" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("loanType")}
                  className="font-medium"
                >
                  Loan Type
                  {sortColumn === "loanType" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("borrower")}
                  className="font-medium"
                >
                  Borrower
                  {sortColumn === "borrower" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("borrowerAddress")}
                  className="font-medium"
                >
                  Borrower Address
                  {sortColumn === "borrowerAddress" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("coBorrower1Name")}
                  className="font-medium"
                >
                  Co Borrower 1 Name
                  {sortColumn === "coBorrower1Name" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("coBorrower1Address")}
                  className="font-medium"
                >
                  Co Borrower 1 Address
                  {sortColumn === "coBorrower1Address" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("currentDPD")}
                  className="font-medium"
                >
                  Current DPD
                  {sortColumn === "currentDPD" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("sanctionAmount")}
                  className="font-medium"
                >
                  Sanction Amount
                  {sortColumn === "sanctionAmount" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("region")}
                  className="font-medium"
                >
                  Region
                  {sortColumn === "region" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("state")}
                  className="font-medium"
                >
                  State
                  {sortColumn === "state" && (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((loan) => (
                <TableRow
                  key={loan.id}
                  className={selectedRows.has(loan.id) ? "bg-muted/50" : ""}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(loan.id)}
                      onCheckedChange={() => toggleRowSelection(loan.id)}
                      aria-label={`Select row ${loan.id}`}
                    />
                  </TableCell>
                  <TableCell className="text-blue-500">{loan.loanNo}</TableCell>
                  <TableCell>{loan.loanType}</TableCell>
                  <TableCell>{loan.borrower}</TableCell>
                  <TableCell>{loan.borrowerAddress}</TableCell>
                  <TableCell>{loan.coBorrower1Name}</TableCell>
                  <TableCell>{loan.coBorrower1Address}</TableCell>
                  <TableCell>{loan.currentDPD}</TableCell>
                  <TableCell>
                    ₹ {loan.sanctionAmount.toLocaleString()}
                  </TableCell>
                  <TableCell>{loan.region}</TableCell>
                  <TableCell>{loan.state}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">Total 100 row(s).</div>
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={currentPage >= totalPages - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanTable;
