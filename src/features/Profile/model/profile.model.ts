interface Profile {
  businessName: string;
  companyNumber?: string;
  contact: string;
  img?: string;
  address?: string;
  homepage?: string;
  introduce?: string;
}

export interface EditProfile extends Profile {
  sectorId: number;
  image: string;
}

export interface GetProfile extends Profile {
  sectorName: string;
}
