interface IPostDTO {
  id?: string;
  title: string;
  description: string;
  phone_number: string;
  cep?: string;
  city?: string;
  district?: string;
  street?: string;
  house_number?: string;
  category_name?: string;
}

export default IPostDTO;
