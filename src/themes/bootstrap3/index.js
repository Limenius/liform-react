import StringWidget from './StringWidget';
import TextareaWidget from './TextareaWidget';
import EmailWidget from './EmailWidget';
import NumberWidget from './NumberWidget';
import MoneyWidget from './MoneyWidget';
import PercentWidget from './PercentWidget';
import ArrayWidget from './ArrayWidget';
import CheckboxWidget from './CheckboxWidget';

export default {
    string: StringWidget,
    textarea: TextareaWidget,
    email: EmailWidget,
    integer: NumberWidget,
    number: NumberWidget,
    money: MoneyWidget,
    percent: PercentWidget,
    array: ArrayWidget,
    boolean: CheckboxWidget,
}
