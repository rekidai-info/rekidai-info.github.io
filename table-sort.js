/* 
table-sort-js
Author: Lee Wannacott
Licence: MIT License Copyright (c) 2021 Lee Wannacott 
    
GitHub Repository: https://github.com/LeeWannacott/table-sort-js
npm package: https://www.npmjs.com/package/table-sort-js
Demo: https://leewannacott.github.io/Portfolio/#/GitHub
Install:
Frontend: <script src="https://leewannacott.github.io/table-sort-js/table-sort.js"></script> or
Download this file and add <script src="table-sort.js"></script> to your HTML 
Backend: npm install table-sort-js and use require("../node_modules/table-sort-js/table-sort.js") 
Instructions:
  Add class="table-sort" to tables you'd like to make sortable
  Click on the table headers to sort them.
*/

function tableSortJs(domDocumentWindow = document) {
  function getHTMLTables() {
    const getTagTable = document.getElementsByTagName("table");
    return [getTagTable];
  }

  const [getTagTable] = getHTMLTables();
  const columnIndexAndTableRow = {};
  for (let table of getTagTable) {
    if (table.classList.contains("table-sort")) {
      makeTableSortable(table);
    }
  }

  function makeTableSortable(sortableTable) {
    let createTableHead;
    let tableBody;
    if (sortableTable.getElementsByTagName("thead").length === 0) {
      createTableHead = document.createElement("thead");
      createTableHead.appendChild(sortableTable.rows[0]);
      sortableTable.insertBefore(createTableHead, sortableTable.firstChild);
      if (sortableTable.querySelectorAll("tbody").length > 1) {
        tableBody = sortableTable.querySelectorAll("tbody")[1];
      } else {
        tableBody = sortableTable.querySelector("tbody");
      }
    } else {
      tableBody = sortableTable.querySelector("tbody");
    }

    const tableHead = sortableTable.querySelector("thead");
    const tableHeadHeaders = tableHead.querySelectorAll("th");
    tableHead.style.cursor = "pointer";

    for (let [columnIndex, th] of tableHeadHeaders.entries()) {
      makeEachColumnSortable(th, columnIndex, tableBody, sortableTable);
    }
  }

  function makeEachColumnSortable(th, columnIndex, tableBody, sortableTable) {
    let desc = th.classList.contains("order-by-desc");
    let tableArrows = sortableTable.classList.contains("table-arrows");
    const arrowUp = " ▲";
    const arrowDown = " ▼";

    if (desc && tableArrows) {
      th.insertAdjacentText("beforeend", arrowDown);
    } else if (tableArrows) {
      th.insertAdjacentText("beforeend", arrowUp);
    }

    function sortDataAttributes(tableRows, columnData) {
      for (let [i, tr] of tableRows.entries()) {
        const dataAttributeTd = tr.querySelectorAll("td").item(columnIndex)
          .dataset.sort;
        columnData.push(`${dataAttributeTd}#${i}`);
        columnIndexAndTableRow[columnData[i]] = tr.innerHTML;
      }
    }

    let timesClickedColumn = 0;
    let columnIndexesClicked = [];

    function rememberSort(timesClickedColumn, columnIndexesClicked) {
      columnIndexesClicked.push(columnIndex);
      if (timesClickedColumn === 1 && columnIndexesClicked.length > 1) {
        const lastColumnClicked =
          columnIndexesClicked[columnIndexesClicked.length - 1];
        const secondLastColumnClicked =
          columnIndexesClicked[columnIndexesClicked.length - 2];
        if (lastColumnClicked !== secondLastColumnClicked) {
          timesClickedColumn = 0;
          columnIndexesClicked.shift();
        }
      }
    }

    function getTableData(tableRows, columnData, isDataAttribute) {
      for (let [i, tr] of tableRows.entries()) {
        // inner text for column we click on
        let tdTextContent = tr
          .querySelectorAll("td")
          .item(columnIndex).textContent;
        if (tdTextContent.length === 0) {
          tdTextContent = "";
        }
        if (tdTextContent.trim() !== "") {
          if (!isDataAttribute) {
            columnData.push(`${tdTextContent}#${i}`);
            columnIndexAndTableRow[`${tdTextContent}#${i}`] = tr.innerHTML;
          }
        } else {
          // Fill in blank table cells dict key with filler value.
          columnData.push(`!X!Y!Z!#${i}`);
          columnIndexAndTableRow[`!X!Y!Z!#${i}`] = tr.innerHTML;
        }
      }

      function naturalSortAescending(a, b) {
        if (a.includes("X!Y!Z!#")) {
          return 1;
        } else if (b.includes("X!Y!Z!#")) {
          return -1;
        } else {
          return a.localeCompare(
            b,
            navigator.languages[0] || navigator.language,
            { numeric: true, ignorePunctuation: true }
          );
        }
      }

      function naturalSortDescending(a, b) {
        return naturalSortAescending(b, a);
      }

      function clearArrows(arrowUp = "▲", arrowDown = "▼") {
        th.innerText = th.innerText.replace(arrowUp, "");
        th.innerText = th.innerText.replace(arrowDown, "");
      }

      // Sort naturally; default aescending unless th contains 'order-by-desc'
      // as className.
      if (columnData[0] === undefined) {
        return;
      }

      if (timesClickedColumn === 1) {
        if (desc) {
          if (tableArrows) {
            clearArrows(arrowUp, arrowDown);
            th.insertAdjacentText("beforeend", arrowDown);
          }
          columnData.sort(naturalSortDescending, {
            numeric: true,
            ignorePunctuation: true,
          });
        } else {
          if (tableArrows) {
            clearArrows(arrowUp, arrowDown);
            th.insertAdjacentText("beforeend", arrowUp);
          }
          columnData.sort(naturalSortAescending);
        }
      } else if (timesClickedColumn === 2) {
        timesClickedColumn = 0;
        if (desc) {
          if (tableArrows) {
            clearArrows(arrowUp, arrowDown);
            th.insertAdjacentText("beforeend", arrowUp);
          }
          columnData.sort(naturalSortAescending, {
            numeric: true,
            ignorePunctuation: true,
          });
        } else {
          if (tableArrows) {
            clearArrows(arrowUp, arrowDown);
            th.insertAdjacentText("beforeend", arrowDown);
          }
          columnData.sort(naturalSortDescending);
        }
      }
    }

    function updateTable(tableRows, columnData) {
      for (let [i, tr] of tableRows.entries()) {
        tr.innerHTML = columnIndexAndTableRow[columnData[i]];
      }
    }

    th.addEventListener("click", function () {
      const columnData = [];
      const tableRows = Array.prototype.filter.call(tableBody.querySelectorAll("tr"), e => {
        return e.style.display != 'none';
      });

      let isDataAttribute = th.classList.contains("data-sort");
      // Check if using data-sort attribute; if so sort by value of data-sort
      // attribute.
      if (isDataAttribute) {
        sortDataAttributes(tableRows, columnData);
      }

      // Checking if user has clicked different column from the first column if
      // yes reset times clicked.
      let isRememberSort = sortableTable.classList.contains("remember-sort");
      if (!isRememberSort) {
        rememberSort(timesClickedColumn, columnIndexesClicked);
      }

      timesClickedColumn += 1;

      getTableData(tableRows, columnData, isDataAttribute);
      updateTable(tableRows, columnData);
    });
  }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  tableSortJs();
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tableSortJs, false);
}
if (typeof module == "object") {
  module.exports = tableSortJs;
}
