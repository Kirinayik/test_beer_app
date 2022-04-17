export interface IBeer {
  beer: {
    name: string;
    brand: string;
    style: string;
    yeast: string;
    alcohol: string;
    malts: string;
  } | null;
  isLoading: boolean;
}

export interface BeerResponse {
  name: string;
  brand: string;
  style: string;
  yeast: string;
  alcohol: string;
  malts: string;
  blg: string;
  hop: string;
  ibu: string;
  id: number;
  uid: string;
}

export interface IUser {
  user: UserResponse | null;
  isLoading: boolean;
}

export interface UserResponse {
  address: IAddress;
  avatar: string | null;
  credit_card: {
    cc_number: string;
  };
  date_of_birth: string;
  email: string;
  employment: IEmployment;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
  password: string;
  phone_number: string;
  social_insurance_number: string;
  subscription: ISubscription;
  uid: string;
  username: string;
}

interface IAddress {
  city: string;
  coordinates: string;
  country: string;
  state: string;
  street_address: string;
  street_name: string;
  zip_code: string;
}

interface ISubscription {
  payment_method: string;
  plan: string;
  status: string;
  term: string;
}

interface IEmployment {
  title: string;
  key_skill: string;
}
