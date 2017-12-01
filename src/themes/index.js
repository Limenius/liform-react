import StringWidget from "./StringWidget";
import TextareaWidget from "./TextareaWidget";
import EmailWidget from "./EmailWidget";
import NumberWidget from "./NumberWidget";
import MoneyWidget from "./MoneyWidget";
import PercentWidget from "./PercentWidget";
import ArrayWidget from "./ArrayWidget";
import CheckboxWidget from "./CheckboxWidget";
import ObjectWidget from "./ObjectWidget";
import PasswordWidget from "./PasswordWidget";
import SearchWidget from "./SearchWidget";
import UrlWidget from "./UrlWidget";
import ColorWidget from "./ColorWidget";
import ChoiceWidget from "./ChoiceWidget";
import OneOfChoiceWidget from "./oneOfChoiceWidget";
import DateWidget from "./DateWidget";
import TimeWidget from "./TimeWidget";
import DateTimeWidget from "./DateTimeWidget";
import CompatibleDateWidget from "./CompatibleDateWidget";

export default {
  object: ObjectWidget,
  string: StringWidget,
  textarea: TextareaWidget,
  email: EmailWidget,
  integer: NumberWidget,
  number: NumberWidget,
  money: MoneyWidget,
  percent: PercentWidget,
  array: ArrayWidget,
  boolean: CheckboxWidget,
  password: PasswordWidget,
  search: SearchWidget,
  url: UrlWidget,
  color: ColorWidget,
  choice: ChoiceWidget,
  date: DateWidget,
  datetime: DateTimeWidget,
  time: TimeWidget,
  OneOfChoiceWidget: OneOfChoiceWidget,
  "compatible-date": CompatibleDateWidget
};
