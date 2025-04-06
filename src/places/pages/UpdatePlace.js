import react from "react";
import { useParams } from "react-router";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./NewPlace.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj Mahal",
    description:
      "Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c3/53.jpg",
    location: {
      lat: 27.8727292,
      lng: 76.9927381,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj Mahal",
    description:
      "Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c3/53.jpg",
    location: {
      lat: 27.8727292,
      lng: 76.9927381,
    },
    creator: "u2",
  },
];

export default function UpdatePlace() {
  const placeId = useParams().placeId;
  console.log(placeId);
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
console.log(identifiedPlace);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  else{
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value = {identifiedPlace.title}
        valid = {true}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={() => {}}
        value = {identifiedPlace.description}
        valid = {true}
      />
      <Button type="submit" disabled = {true}> UPDATE PLACE</Button>
    </form>
  );
}
}
