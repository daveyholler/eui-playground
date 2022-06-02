import { useEffect, useState } from 'react';
import axios from 'axios';

import { EuiBasicTable } from '@elastic/eui';

interface PeopleProps {
  alias: string;
  city: string;
  country: string;
  created_at: string;
  date_of_birth: string;
  first_name: string;
  id: number;
  last_name: string;
  occupation: string;
  updated_at: string;
}

export const Table:React.FC = () => {
  const [data, setData] = useState<PeopleProps[]>([]);
  
  const columns = [
    {
      field: 'first_name',
      name: 'First Name',
      sortable: true,
    },
    {
      field: 'last_name',
      name: 'Last Name',
      sortable: true,
    },
    {
      field: 'alias',
      name: 'Nickname',
    },
    {
      field: 'city',
      name: 'City',
    },
    {
      field: 'country',
      name: 'Country',
    },
    {
      field: 'occupation',
      name: 'Occupation',
    }
  ]

  const fetchData = async () => {
    try {
      const response = await axios.get('https://lost-data.herokuapp.com/people');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <EuiBasicTable columns={columns} items={data} />
}