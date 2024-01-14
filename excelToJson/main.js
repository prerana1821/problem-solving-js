const fs = require("fs");
// import { writeFile } from "fs";
var selectedFile;
document
  .getElementById("fileUpload")
  .addEventListener("change", function (event) {
    selectedFile = event.target.files[0];
  });
document.getElementById("uploadExcel").addEventListener("click", function () {
  if (selectedFile) {
    console.log("hi");
    var fileReader = new FileReader();
    fileReader.onload = function (event) {
      var data = event.target.result;

      var workbook = XLSX.read(data, {
        type: "binary",
      });
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        const json = rowObject.reduce((acc, value) => {
          return Object.assign(acc, {
            [value.email]: {
              firstName: value.firstName,
              lastName: value.lastName,
            },
          });
        }, {});
        console.log(json);
        let jsonObject = JSON.stringify(json);
        fs.writeFile("userData.js", data, (err) => {
          if (err) {
            throw err;
          }
          console.log("JSON data is saved.");
        });

        document.getElementById("jsonData").innerHTML = jsonObject;
        // console.log(jsonObject);
      });
    };
    fileReader.readAsBinaryString(selectedFile);
  }
});
