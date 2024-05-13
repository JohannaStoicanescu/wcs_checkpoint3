import { useRouter } from "next/router";

const { gql, useQuery } = require("@apollo/client");
import { GET_COUNTRIES } from "@/components/country/CountryList";
import { Country } from "@/graphql/generated/schema";

export default function CountryDetails() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const country = data?.countries.find(
    (country: Country) => country.id.toString() === router.query.id
  );

  return (
    <div className="country-details">
      <div className="country-details-container">
        <div className="country-emoji">{country?.emoji}</div>
        <p className="country-text">
          Name : {country?.name}({country?.code})
        </p>
        <p className="country-text">Continent : {country?.continent?.name}</p>
      </div>
    </div>
  );
}
