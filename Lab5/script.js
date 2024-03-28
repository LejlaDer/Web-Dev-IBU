document.addEventListener("DOMContentLoaded", function() {
        const sortByNameLink = document.getElementById("sortByName");
        const sortByCountryLink = document.getElementById("sortByCountry");
        let nameSortOrder = 1;
        let countrySortOrder = 1;

        sortByNameLink.addEventListener("click", function(e) {
            e.preventDefault();
            sortTable(1, nameSortOrder);
            nameSortOrder *= -1;
        });

        sortByCountryLink.addEventListener("click", function(e) {
            e.preventDefault();
            sortTable(2, countrySortOrder);
            countrySortOrder *= -1;
        });

        function sortTable(columnIndex, sortOrder) {
            const table = document.querySelector('.table');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));

            rows.sort((a, b) => {
                const aValue = a.children[columnIndex].textContent.trim().toLowerCase();
                const bValue = b.children[columnIndex].textContent.trim().toLowerCase();
                return aValue.localeCompare(bValue) * sortOrder;
            });

            tbody.innerHTML = "";
            rows.forEach(row => tbody.appendChild(row));
        }
    });

//modal

function openModal(n) {
    var table = document.getElementById("table");
    var username = document.getElementById("username");
    
    var row = table.rows[n + 1];    
    var name = row.cells[1].innerText.trim();
    
    console.log("Name:", name);
  
    var modal = document.getElementById("myModal");
  
    var span = document.getElementsByClassName("close")[0];

    username.textContent = name;
    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }


