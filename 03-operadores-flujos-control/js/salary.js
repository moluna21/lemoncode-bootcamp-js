// Base imponible hasta 12.449,00€: 9,5% de IRPF
// Base imponible desde 12.450,00€ hasta 20.199,00€: 12% de IRPF
// Base imponible desde 20.200,00€ hasta 35.199,00€: 15% de IRPF
// Base imponible desde 35.200,00€ hasta 59.999,00€: 18,5% de IRPF
// Base imponible desde 60.000,00€ hasta 299.999,00: 22,5% de IRPF
// Base imponible más 300.000,00€: 24,5% de IRPF

const employee = {
  grossSalary: 14500,
  children: 2,
  wages: 12,
}

const userGrossSalary = document.getElementById("gross-salary");
userGrossSalary.innerHTML = employee.grossSalary + '€';

const userChildren = document.getElementById("children");
userChildren.innerHTML = employee.children;

const userWages = document.getElementById("wages");
userWages.innerHTML = employee.wages;


// Calcular el neto anual en nómina
let annualNetSalary;
let incomeTax = 0;
let totalIncomeTax
let monthlyNetSalary;

function getTotalTax(grossSalary = employee.grossSalary, incomeTax = 0, children = employee.children) {
  if (grossSalary < 12000) {
    incomeTax = 0.095;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  } else if (grossSalary < 20200) {
    incomeTax = 0.12;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  } else if (grossSalary < 35200) {
    incomeTax = 0.15;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  } else if (grossSalary < 60000) {
    incomeTax = 0.185;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  } else if (grossSalary < 300000) {
    incomeTax = 0.225;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  } else {
    incomeTax = 0.245;
    return children > 0 ? incomeTax - 0.2 : incomeTax;
  }
}

getTotalTax();

totalIncomeTax = employee.grossSalary * getTotalTax();
document.getElementById('total-income-tax').innerHTML = totalIncomeTax;

annualNetSalary = employee.grossSalary - totalIncomeTax;
document.getElementById('annual-net-salary').innerHTML = annualNetSalary;


if (employee.wages === 14) {
  monthlyNetSalary = annualNetSalary / 14 + "€";
} else if (employee.wages === 12) {
  monthlyNetSalary = annualNetSalary / 12 + "€";
} else {
  monthlyNetSalary = 'Error: por favor, elija entre 14 o 12 pagas';
}

document.getElementById('monthly-net-salary').innerHTML = monthlyNetSalary;


function printEmployeeSalary() {
  const gross = employee.grossSalary;
  const childrens = employee.children >0 ? true : false;
  const totalTax = totalIncomeTax;
  const net = annualNetSalary;
  const netMonthly = monthlyNetSalary;

  console.log("Sueldo BRUTO:", gross + "€");
  console.log("Hijos:", childrens);
  console.log("Impuestos:", totalTax + "€");
  console.log("Sueldo NETO - Anual:", net + "€");
  console.log('Sueldo NETO - Mensual:', netMonthly);
}

printEmployeeSalary();
