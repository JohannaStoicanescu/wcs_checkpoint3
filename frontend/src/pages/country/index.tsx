import CountryList from "@/components/country/CountryList";
import CreateCountryForm from "@/components/country/CreateCountryForm";

export default function index() {
  return (
    <div className="main-container">
      <CreateCountryForm />
      <CountryList />
    </div>
  );
}
