export interface Related {
    boundary_url: string;
    representative_set_url: string;
}

export interface Office {
    postal: string;
    type: string;
    tel: string;
}

export interface Extra {
}

export interface RootObject {
    url: string;
    last_name: string;
    representative_set_name: string;
    personal_url: string;
    elected_office: string;
    gender: string;
    district_name: string;
    related: Related;
    source_url: string;
    email: string;
    offices: Office[];
    photo_url: string;
    extra: Extra;
    party_name: string;
    first_name: string;
    name: string;
}