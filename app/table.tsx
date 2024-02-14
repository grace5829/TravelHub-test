import { Guest, GuestsContext } from "./page";
import styled from "styled-components";
import { useContext } from "react";

const TableWrapper = styled.span`
margin: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
const EachGuest = styled.div`
display: grid;
grid-template-columns: 200px 100px 100px 100px 100px;
`;
const EachGuestInfo = styled.span`
border: 1.5px solid black;
`;
export default function Table() {
    const { guests } = useContext(GuestsContext);

    return (
        <TableWrapper>
        <EachGuest>
          <EachGuestInfo>Name</EachGuestInfo>
          <EachGuestInfo>RSVP</EachGuestInfo>
          <EachGuestInfo>Age</EachGuestInfo>
          <EachGuestInfo>Gender</EachGuestInfo>
          <EachGuestInfo>Amount Due</EachGuestInfo>
        </EachGuest>

        {guests?.map((guest) => (
          <EachGuest key={guest.lastName + guest.firstName}>
            <EachGuestInfo>
              {guest.firstName} {guest.lastName}
            </EachGuestInfo>
            <EachGuestInfo>{guest.RSVP}</EachGuestInfo>
            <EachGuestInfo>{guest.age} </EachGuestInfo>
            <EachGuestInfo>{guest.gender}</EachGuestInfo>
            <EachGuestInfo>${guest.amountDue}</EachGuestInfo>
          </EachGuest>
        ))}
      </TableWrapper>
    );
  }
  