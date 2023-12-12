import React, {FC} from 'react';
import Heading from "./Heading";
import {ContactInfoType} from "../type/type";


const ContactProfile: FC<{
    contact: ContactInfoType
}> = ({contact}): React.ReactElement => {
const {name,username, address, phone} = contact || {}
const {street, city} = address || {}

if(!contact) {
    return <>
    <Heading tag={'h3'} text={'No contact info'}/>
    </>
}
    return (
        <div>
            <div>
                <strong>FullName: </strong>
                <p>{`${name} ${username}`}</p>
            </div>
            <div>
                <strong>Phone: </strong>
                <p>{phone}</p>
            </div>
            <div>
                <strong>Address: </strong>
                <p>{city} - {street}</p>
            </div>
        </div>
    );
};

export default ContactProfile;