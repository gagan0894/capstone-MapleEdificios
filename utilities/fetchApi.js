import axios from 'axios';

export const baseUrl = 'https://realty-in-ca1.p.rapidapi.com';

export const fetchApi = async url => {
    const { data } = await axios.get(url, {
      headers: {
  'X-RapidAPI-Key': '2dc10344c3msh098a0b3af6a5be1p104818jsn8c4e53d25912',
  'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
}
    });

    return data;
};
