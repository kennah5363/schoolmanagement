
function printDiv(divName) {
    var printContents = document.getElementById(divName).outerHTML;

    var printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
            <style>
                body {
                    zoom: 90%;
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    
                }
                    // table {
                    //     width: 100%;
                    //     border-collapse: collapse;
                    // }
                    // th, td {
                    //     border: 1px solid #000;
                    //     padding: 8px;
                    //     text-align: left;
                    // }
            </style>
        </head>
        <body>
        <h1>Students Table</h1>
            ${printContents}
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    printWindow.print();
    printWindow.close();
}

//   function printDiv(divName) {
//             var printContents = document.getElementById(divName).innerHTML;
//             var originalContents = document.body.innerHTML;
//             document.body.innerHTML = printContents;
//             document.body.style.zoom = '90%';
//             window.print();
//             document.body.innerHTML = originalContents;
//             document.body.style.zoom = '100%';

//         };