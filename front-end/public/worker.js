// import readXlsxFile from "read-excel-file";
importScripts("https://unpkg.com/xlsx-style@0.8.13/dist/xlsx.full.min.js");

self.onmessage = e => {
  console.log(e, "--in web worker");

  const reader = new FileReader();

  reader.onload = event => {
    const data = reader.result;

    const workbook = XLSX.read(data, {
      type: "binary",
      raw: true,
      cellHTML: false,
      cellFormula: false
    });

    self.postMessage({
      workbook
    });
  };

  reader.readAsBinaryString(e.data.file);
};
