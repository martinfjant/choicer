declare module namespace {
  export interface Address {
    streetAddress: string;
    postalCode: string;
    city: string;
    country: string;
    countryCode: string;
  }

  export interface ContactDetails {
    phoneNumber: string;
    frontDeskEmailId: string;
  }

  export interface Location {
    latitude?: number;
    longitude?: number;
  }

  export interface Manager {
    name: string;
    phoneNumber: string;
    emailAddress: string;
  }

  export interface Hotel {
    name: string;
    propertyCode: string;
    orgNumber: string;
    brandCode: string;
    brandName: string;
    regionCode: string;
    regionName: string;
    destinationCode: string;
    destinationName: string;
    address: Address;
    contactDetails: ContactDetails;
    location: Location;
    manager: Manager;
    roomCapacity?: number;
    statusCode: string;
    statusLevel: string;
    openingDate: string;
    closingDate: string;
    currency: string;
  }

  export interface HotelDataType {
    hotels: Hotel[];
  }
}
