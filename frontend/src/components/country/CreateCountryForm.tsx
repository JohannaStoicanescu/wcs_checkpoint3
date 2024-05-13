import { Continent } from "@/graphql/generated/schema";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      id
      name
    }
  }
`;

const CREATE_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      emoji
      name
    }
  }
`;

export default function CreateCountryForm() {
  const { loading, error, data: continentsData } = useQuery(GET_CONTINENTS);
  const [addCountry] = useMutation(CREATE_COUNTRY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      emoji: e.target.emoji.value,
      code: e.target.code.value,
    };
    console.log({ data });
    await addCountry({ variables: { data } });

    e.target.reset();
  };

  return (
    <form
      className="create-country-form"
      onSubmit={(e) => handleOnSubmitForm(e)}
    >
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required maxLength={50} />
        </div>
        <div>
          <label htmlFor="emoji">Emoji</label>
          <input type="text" name="emoji" required maxLength={4} />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input type="text" name="code" required maxLength={3} minLength={2} />
        </div>
        <div>
          <label htmlFor="continent">Continent</label>
          <select name="continent" id="continent">
            {continentsData?.continents.map((continent: Continent) => (
              <option key={continent.name} value={continent.name}>
                {continent.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
