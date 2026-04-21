calculateBtn.addEventListener("click", function () {
  const miles = parseFloat(document.getElementById("miles").value) || 0;
  const gallons = parseFloat(document.getElementById("gallons").value) || 0;
  const price = parseFloat(document.getElementById("price").value) || 0;
  const wearTear = parseFloat(document.getElementById("wearTear").value) || 0;
  const reimbursement = parseFloat(document.getElementById("reimbursement").value) || 0;

  let mpg = "N/A";
  if (gallons > 0 && miles > 0) {
    mpg = (miles / gallons).toFixed(2);
  }

  const totalFuelCost = gallons * price;
  const wearTearTotal = miles * wearTear;
  const totalOperatingCost = totalFuelCost + wearTearTotal;
  const totalReimbursement = miles * reimbursement;
  const profit = totalReimbursement - totalOperatingCost;

  let fuelCostPerMile = "N/A";
  if (miles > 0) {
    fuelCostPerMile = (totalFuelCost / miles).toFixed(2);
  }

  let totalCostPerMile = "N/A";
  if (miles > 0) {
    totalCostPerMile = (totalOperatingCost / miles).toFixed(2);
  }

  let profitPerMile = "N/A";
  if (miles > 0) {
    profitPerMile = (profit / miles).toFixed(2);
  }

  document.getElementById("mpgResult").textContent = mpg;
  document.getElementById("fuelCostResult").textContent = `$${totalFuelCost.toFixed(2)}`;
  document.getElementById("fuelCostPerMileResult").textContent = fuelCostPerMile === "N/A" ? "N/A" : `$${fuelCostPerMile}`;
  document.getElementById("wearTearTotalResult").textContent = `$${wearTearTotal.toFixed(2)}`;
  document.getElementById("totalOperatingCostResult").textContent = `$${totalOperatingCost.toFixed(2)}`;
  document.getElementById("totalCostPerMileResult").textContent = totalCostPerMile === "N/A" ? "N/A" : `$${totalCostPerMile}`;
  document.getElementById("reimbursementTotalResult").textContent = `$${totalReimbursement.toFixed(2)}`;
  document.getElementById("profitResult").textContent = `$${profit.toFixed(2)}`;
  document.getElementById("profitPerMileResult").textContent = profitPerMile === "N/A" ? "N/A" : `$${profitPerMile}`;

  const profitElement = document.getElementById("profitResult");
  profitElement.style.color = profit >= 0 ? "green" : "red";
});