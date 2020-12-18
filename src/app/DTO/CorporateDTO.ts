export class CorporateDTO {
  name: string;
  url: string;
  description: string;
  noOfEmployees: string;
  logo: string;
  contactDetails: {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
  };
  adminDetails: {
    firstName: string;
    lastName: string;
    email: string;
  };
}
