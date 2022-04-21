import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  budget?: FloatFilter;
  id?: StringFilter;
  name?: StringFilter;
};
