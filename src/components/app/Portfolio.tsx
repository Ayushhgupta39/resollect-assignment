import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import LoanTable from "./LoanTable";
import { useState, useRef } from "react";
import { uploadDocument } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

function Portfolio() {
  const tags = [
    "All",
    "Pre Sarfaesi",
    "NPA",
    "13(3) Responses",
    "Symbolic Possession",
    "DM Order",
    "Physical Possessions",
    "Auctions",
  ];

  const { toast } = useToast();
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    documentName: "",
    documentType: "",
    documentRemarks: "",
    file: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  const handleUpload = async () => {
    // Validate form data
    if (!formData.documentName || !formData.documentType || !formData.file) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields and select a file",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);

      const fileFormData = new FormData();
      fileFormData.append("file", formData.file);
      fileFormData.append("documentName", formData.documentName);
      fileFormData.append("documentType", formData.documentType);
      fileFormData.append("documentRemarks", formData.documentRemarks || "");

      const response: any = await uploadDocument(fileFormData);

      toast({
        title: "Success",
        description: response.message,
      });

      setFormData({
        documentName: "",
        documentType: "",
        documentRemarks: "",
        file: null,
      });

      if (sheetCloseRef.current) {
        sheetCloseRef.current.click();
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description:
          (error as Error).message || "An error occurred during upload",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-2 md:p-4">
      <div>
        <p className="text-lg md:text-xl py-2 md:py-4 font-bold">Portfolio</p>
      </div>

      {/* Scrollable tags container for mobile */}
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-row items-center my-2 mb-4 gap-1 md:gap-2 whitespace-nowrap">
          {tags.map((tag, index) => (
            <div className="border rounded-md p-1 md:p-2 px-2 md:px-3" key={index}>
              <p className="text-gray-800 font-medium text-xs md:text-sm">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and filters section */}
      <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
        <div className="w-full md:w-auto">
          <Input className="w-full" type="text" placeholder="Search Loan Number" />
        </div>

        <div className="flex flex-row items-center flex-wrap gap-2">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select Columns" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="value1">Value 1</SelectItem>
              <SelectItem value="value2">Value 2</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-blue-600 text-xs md:text-sm">
            <Filter className="mr-1 h-4 w-4" />
            More filters
          </Button>

          <div className="w-full md:w-auto md:mr-4">
            <Sheet>
              <SheetTrigger className="bg-black rounded-lg p-2 text-white px-3 w-full md:w-auto text-xs md:text-sm">
                Upload
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Upload Document</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p>Document Name</p>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("documentName", value)
                          }
                          value={formData.documentName}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select document name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="document1">
                              Document 1
                            </SelectItem>
                            <SelectItem value="document2">
                              Document 2
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <p>Document Type</p>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("documentType", value)
                          }
                          value={formData.documentType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select document type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="type1">Type 1</SelectItem>
                            <SelectItem value="type2">Type 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <p>Document Remarks</p>
                        <Input
                          type="text"
                          placeholder="Add remarks (optional)"
                          value={formData.documentRemarks}
                          onChange={(e) =>
                            handleInputChange("documentRemarks", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <p>Select File</p>
                        <Input type="file" onChange={handleFileChange} />
                        {formData.file && (
                          <p className="text-sm text-gray-500 mt-1">
                            Selected: {formData.file.name}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-row justify-end">
                        <SheetClose ref={sheetCloseRef} asChild>
                          <Button
                            variant="outline"
                            className="mr-2 text-xs md:text-sm"
                            onClick={() =>
                              setFormData({
                                documentName: "",
                                documentType: "",
                                documentRemarks: "",
                                file: null,
                              })
                            }
                          >
                            Cancel
                          </Button>
                        </SheetClose>
                        <Button
                          className="bg-blue-500 text-xs md:text-sm"
                          onClick={handleUpload}
                          disabled={isUploading}
                        >
                          {isUploading ? "Uploading..." : "Submit"}
                        </Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <LoanTable />
      </div>
    </div>
  );
}

export default Portfolio;
