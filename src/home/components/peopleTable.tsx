import { useEffect, useState } from 'react';
import axios from 'axios';

import { EuiBasicTable, EuiText } from '@elastic/eui';

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  occupation: string;
  city: string;
  country: string;
  date_of_birth: string;
  alias: string;
  created_at: string;
  updated_at: string;
}

export const PeopleTable: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('https://lost-data.herokuapp.com/people');
      setPeople(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const columns = [
    {
      field: 'first_name',
      name: 'Full Name',
      render: (name: any, item: Person) => (
        <>{item.first_name} {item.last_name}</>
      )
    },
    {
      field: 'alias',
      name: 'Nickname',
      render: (alias: string, item: Person) => (
        <>
          {alias ? (
            <EuiText size="xs" color="subdued">{alias}</EuiText>
          ) : (
            <EuiText size="xs" color="accent"><em>Unloved</em></EuiText>
          )}
        </>
      )
    },
    {
      field: 'occupation',
      name: 'Occupation',
    },
    {
      field: 'city',
      name: 'City',
    },
    {
      field: 'country',
      name: 'Country',
    },
  ]

  return (
    <>
      {people.length > 0 && <EuiBasicTable compressed items={people} columns={columns} />}
    </>
  ) 
}
