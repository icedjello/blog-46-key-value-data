import {DAY_OPTION, DATE_OPTION, TRANSLATIONS} from "./Transaltions";
import {ValueGetterParams, ValueFormatterParams} from 'ag-grid-community';


const translate = (value: string, language: string): string => {
    return TRANSLATIONS[language][value];
};

const translateDateTime = (date: Date, language: string, options: {}): string => {
    return date.toLocaleDateString(language, options);
};

const translatePrice = (value: number, language: string): string => {
    let fixedValue = value.toFixed(2);
    return language === 'en-GB'
        ? '£' + fixedValue
        : '€' + fixedValue.replace('.', ',');
};

interface WithValueGetter {
    valueGetterFn(language: string): (params: ValueGetterParams) => string
}


const DAY_VALUEGETTER: WithValueGetter = {
    valueGetterFn: (language) => (params) => translateDateTime(params.data.date, language, DAY_OPTION),
};
const DATE_VALUEGETTER: WithValueGetter = {
    valueGetterFn: language => (params) => translateDateTime(params.data.date, language, DATE_OPTION),
};
const TEXT_VALUEGETTER: WithValueGetter = {
    valueGetterFn: language => (params) => {
        let field = params.column.getColDef().field as string;
        return translate(params.data[field], language);
    },
};

interface WithValueFormatter {
    valueFormatterFn(language: string): (params: ValueFormatterParams) => string
}

const PRICE_VALUEFORMATTER: WithValueFormatter = {
    valueFormatterFn: (language) => (params) => translatePrice(params.data.price, language),
};

const translatableContentColumnFactory = (
    colId: string,
    field: string,
    filterType: string,
    language: string,
    valueFormatter?: WithValueFormatter,
    valueGetter?: WithValueGetter,
    other?: object
) => {
    let column = columnFactory(colId, field, filterType, language, valueFormatter, valueGetter);

    Object.assign(column, other);
    return column;
};

const columnFactory = (
    colId: string,
    field: string,
    filterType: string,
    language: string,
    valueFormatterFn?: WithValueFormatter,
    valueGetterFn?: WithValueGetter,
) => {
    return {
        colId,
        field,
        headerName: translate(colId.toUpperCase(), language),
        filter: filterType,
        ...valueFormatterFn == null ? undefined : {valueFormatter: valueFormatterFn.valueFormatterFn(language)},
        ...valueGetterFn == null ? undefined : {valueGetter: valueGetterFn.valueGetterFn(language)},
    };
};

const getColumnDefs = (language: string) => [
    // Day of week.
    translatableContentColumnFactory(
        'day',
        'date',
        'agSetColumnFilter',
        language,
        undefined,
        DAY_VALUEGETTER,
    ),
    // Date of day.
    translatableContentColumnFactory(
        'date',
        'date',
        'agDateColumnFilter',
        language,
        undefined,
        DATE_VALUEGETTER,
        {
            filterParams: {
                suppressAndOrCondition: true,
                filterOptions: ['contains'],
            },
        }
    ),
    // Occasion.
    translatableContentColumnFactory(
        'mealTime',
        'mealTime',
        'agSetColumnFilter',
        language,
        undefined,
        TEXT_VALUEGETTER,
        {
            filterParams: {
                suppressSelectAll: true,
                suppressMiniFilter: true,
            },
        }
    ),
    translatableContentColumnFactory(
        'food',
        'food',
        'agTextColumnFilter',
        language,
        undefined,
        TEXT_VALUEGETTER,
        {filterParams: {filterOptions: ['contains']}}
    ),
    translatableContentColumnFactory(
        'price',
        'price',
        'agNumberColumnFilter',
        language,
        PRICE_VALUEFORMATTER,
        undefined,
        {
            filterParams: {
                filterOptions: ['equals', 'lessThan', 'greaterThan'],
                buttons: ['apply', 'reset'],
                suppressAndOrCondition: true,
                allowedCharPattern: '\\d\\,\\.',
                numberParser: (value?: string) => {
                    if (value == null) {
                        return null;
                    }
                    let filterVal = value.replace(',', '.');
                    return Number(filterVal);
                },
            },
        }
    ),
];

export {getColumnDefs}
