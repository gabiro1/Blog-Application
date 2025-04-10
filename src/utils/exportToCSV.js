// src/utils/exportToCSV.js
export const exportToCSV = (data) => {
    const headers = ["ID", "Name", "Email", "Status"];
    const rows = data.map((item) => [item.id, item.name, item.email, item.status]);
  
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
  };
  