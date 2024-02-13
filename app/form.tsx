import { ChangeEvent, FormEvent, useState } from "react";

interface Guest {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  age: number;
  amountDue: number;
}
export default function Form() {
  const [guests, setGuests] = useState<Array<Guest>>([
    {
      firstName: "Person",
      lastName: "1",
      gender: "female",
      age: 27,
      amountDue: 100,
    },
    {
      firstName: "Person",
      lastName: "2",
      gender: "male",
      age: 23,
      amountDue: 0,
    },
  ]);
  const [newGuest, setNewGuest] = useState<Guest>({
    firstName: "",
    lastName: "",
    gender: "female",
    age: 0,
    amountDue: 0,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewGuest((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuests((values) => [...values, newGuest]);
  };

  return (
    <div>
      {guests.map((guest) => (
        <div key={guest.lastName + guest.firstName}>
          {guest.firstName} {guest.lastName} {guest.age} {guest.gender} {guest.amountDue}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={newGuest.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="firstName"
            name="lastName"
            value={newGuest.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            id="age"
            name="age"
            value={newGuest.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="amountDue">
          Amount Due:
          <input
            type="number"
            id="amountDue"
            name="amountDue"
            value={newGuest.amountDue}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
