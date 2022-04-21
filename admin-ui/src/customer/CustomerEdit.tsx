import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput label="Budget" source="budget" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
