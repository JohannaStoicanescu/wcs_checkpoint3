import { CountriesQuery } from "@/graphql/generated/schema";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const GET_COUNTRIES = gql`
  query countries {
    countries {
      code
      continent {
        name
      }
      emoji
      id
      name
    }
  }
`;

export default function CountryList() {
  const { loading, error, data, refetch } =
    useQuery<CountriesQuery>(GET_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  console.log(data, error);
  return (
    <div className="country-list">
      {data?.countries &&
        data.countries.map((country) => (
          <Link
            key={country.id}
            className="country-container"
            href={`/country/${country.id}`}
          >
            <div className="country-emoji">{country.emoji}</div>
            <div className="country-text">{country.name}</div>
          </Link>
        ))}
    </div>
  );
}
