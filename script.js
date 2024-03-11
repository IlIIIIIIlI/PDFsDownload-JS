// ------------------------- direct download ZIP for browser ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const url =
    "https://www.kaggle.com/datasets/ayushparwal2026/shopping-dataset/download?datasetVersionNumber=1";

  // Fetch JSON data
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching JSON: ", error));
  // Function to trigger download on click
  window.clickB = function () {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = "index.pdf";
    document.body.appendChild(aTag); // Ensure the element is in the document
    aTag.click();
    document.body.removeChild(aTag); // Clean up
  };
});

// ------------------------- direct download PDF for browser ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const url =
    "https://algorx-staging-storage.s3.ap-southeast-2.amazonaws.com/pdfs/p4092426.pdf";

  // Fetch PDF data
  fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Host: "algorx-staging-storage.s3.ap-southeast-2.amazonaws.com",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching the PDF: ", error));

  // Function to trigger download on click
  window.clickA = function () {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = "index.pdf";
    document.body.appendChild(aTag); // Ensure the element is in the document
    aTag.click();
    document.body.removeChild(aTag); // Clean up
  };
});
