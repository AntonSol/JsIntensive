let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let copypassportWithAddress = structuredClone(passportWithAddress);
copypassportWithAddress.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(copypassportWithAddress.address.city);
