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

$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });



