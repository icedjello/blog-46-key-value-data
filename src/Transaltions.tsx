const DAY_OPTION: { weekday: string } = {weekday: 'long'};

const DATE_OPTION: { year: string, month: string, day: string } = {year: 'numeric', month: 'long', day: 'numeric'};

type translationsType = Record<string, Record<string, string>>

const TRANSLATIONS: translationsType = {
    'en-GB': {
        SELECT_ALL: '(Select All)',
        DAY: 'Day',
        DATE: 'Date',
        MEALTIME: 'Mealtime',
        FOOD: 'What was easten?',
        PRICE: 'Price',
        BREAKFAST: 'Breakfast',
        LUNCH: 'Lunch',
        DINNER: 'Dinner',
        PORRIDGE: 'porridge',
        OMLETTE: 'omlette',
        SANDWICH: 'sandwich',
        SOUP: 'soup',
        PROTEINSHAKE: 'protein shake',
        CHOCOLATEBAR: 'chocolate bar',
        SAUSAGES: 'sausages',
        STEAK: 'steak',
        LAMBCHOPS: 'lamb chops',

        // Start of ag-Grid locale translations
        selectAll: '(Select All)',
        searchOoo: 'Search...',
        blanks: '(Blanks)',
        noMatches: 'No matches',

        // Number Filter & Text Filter
        filterOoo: 'Filter...',
        equals: 'Equals',
        notEqual: 'Not equal',
        empty: 'Choose One',

        // Number Filter
        lessThan: 'Less than',
        greaterThan: 'Greater than',

        // Text Filter
        contains: 'Contains',

        // Date Filter
        dateFormatOoo: 'yyyy-mm-dd',

        // Filter Buttons
        applyFilter: 'Apply',
        resetFilter: 'Reset',

        // Filter Titles
        textFilter: 'Text Filter',
        numberFilter: 'Number Filter',
        dateFilter: 'Date Filter',
        setFilter: 'Set Filter',

        // Side Bar
        columns: 'Columns',
        filters: 'Filters',

        // Other
        loadingOoo: 'Loading...',
        noRowsToShow: 'No Rows To Show',
        enabled: 'Enabled',

        // Menu
        pinColumn: 'Pin Column',
        pinLeft: 'Pin Left',
        pinRight: 'Pin Right',
        noPin: 'No Pin',

        autosizeThiscolumn: 'Autosize This Column',
        autosizeAllColumns: 'Autosize All Columns',
        resetColumns: 'Reset Columns',
        copy: 'Copy',
        ctrlC: 'Ctrl+C',
        copyWithHeaders: 'Copy With Headers',
        paste: 'Paste',
        ctrlV: 'Ctrl+V',
        export: 'Export',
        csvExport: 'CSV Export',
        excelExport: 'Excel Export (.xlsx)',
        excelXmlExport: 'Excel Export (.xml)',
    },
    'es-ES': {
        DAY: 'd??a',
        DATE: 'fecha',
        MEALTIME: 'hora de comer',
        FOOD: '??que se comi???',
        PRICE: 'precio',
        BREAKFAST: 'Desayuno',
        LUNCH: 'Almuerzo',
        DINNER: 'Cena',
        PORRIDGE: 'gachas de avena',
        OMLETTE: 'tortilla frita',
        SANDWICH: 's??ndwich',
        SOUP: 'sopa',
        PROTEINSHAKE: 'batido de prote??nas',
        CHOCOLATEBAR: 'barra de chocolate',
        SAUSAGES: 'salchichas',
        STEAK: 'bistec',
        LAMBCHOPS: 'chuletas de cordero',
        // Start of ag-Grid locale translations
        selectAll: '(seleccionar todo)',
        searchOoo: 'buscar...',
        blanks: '(espacios en blanco)',
        noMatches: 'no hay coincidencias',

        // Number Filter & Text Filter
        filterOoo: 'filtrar...',
        equals: 'igual',
        notEqual: 'no es igual',
        empty: 'elige uno',

        // Number Filter
        lessThan: 'menos que',
        greaterThan: 'mas grande que',

        // Text Filter
        contains: 'contiene',

        // Date Filter
        dateFormatOoo: 'yyyy-mm-dd',

        // Filter Buttons
        applyFilter: 'aplicar',
        resetFilter: 'Reiniciar',

        // Filter Titles
        textFilter: 'filtro de texto',
        numberFilter: 'filtro de n??mero',
        dateFilter: 'filtro de fecha',
        setFilter: 'filtro de valores',

        // Side Bar
        columns: 'columnas',
        filters: 'filtros',

        // Other
        loadingOoo: 'cargando...',
        noRowsToShow: 'no hay filas para mostrar',
        enabled: 'habilitado',

        // Menu
        pinColumn: 'alfiler columna',
        pinLeft: 'pin a la izquierda',
        pinRight: 'pin a la derecha',
        noPin: 'no Pin',

        autosizeThiscolumn: 'tama??o autom??tico de esta columna',
        autosizeAllColumns: 'tama??o autom??tico de todas las columnas',
        resetColumns: 'restablecer columnas',
        copy: 'Copiar',
        ctrlC: 'Ctrl+C',
        copyWithHeaders: 'copiar con encabezados',
        paste: 'pegar',
        ctrlV: 'Ctrl+V',
        export: 'exportar',
        csvExport: 'CSV exportar',
        excelExport: 'Excel exportar (.xlsx)',
        excelXmlExport: 'Excel exportar (.xml)',
    },
    'de-DE': {
        DAY: 'Tag',
        DATE: 'Datum',
        MEALTIME: 'Essenszeit',
        FOOD: 'was wurde gegessen?',
        PRICE: 'Preis',
        BREAKFAST: 'Fr??hst??ck',
        LUNCH: 'Mittagessen',
        DINNER: 'Abendessen',
        PORRIDGE: 'Brei',
        OMLETTE: 'Omlette',
        SANDWICH: 'Sandwich',
        SOUP: 'Suppe',
        PROTEINSHAKE: 'Protein-Shake',
        CHOCOLATEBAR: 'Schokoriegel',
        SAUSAGES: 'W??rstchen',
        STEAK: 'Steak',
        LAMBCHOPS: 'Lammkoteletts',

        // Start of ag-Grid locale translations
        selectAll: '(W??hlen Sie Alle)',
        searchOoo: 'Suche...',
        blanks: '(Leerzeichen)',
        noMatches: 'Keine Treffer',

        // Number Filter & Text Filter
        filterOoo: 'Filter...',
        equals: 'Gleich',
        notEqual: 'Nicht gleich',
        empty: 'W??hle ein',

        // Number Filter
        lessThan: 'Weniger als',
        greaterThan: 'Gr????er als',

        // Text Filter
        contains: 'enth??lt',

        // Date Filter
        dateFormatOoo: 'yyyy-mm-dd',

        // Filter Buttons
        applyFilter: 'Anwenden',
        resetFilter: 'zur??cksetzen',

        // Filter Titles
        textFilter: 'Textfilter',
        numberFilter: 'Zahlenfilter',
        dateFilter: 'Datumsfilter',
        setFilter: 'Set Filter',

        // Side Bar
        columns: 'S??ulen',
        filters: 'Filter',

        // Other
        loadingOoo: 'Wird Geladen...',
        noRowsToShow: 'Keine Zeilen zu zeigen',
        enabled: 'aktiviert',

        // Menu
        pinColumn: 'Stecke diese S??ule',
        pinLeft: 'Stecke Links',
        pinRight: 'Pin Rechts',
        noPin: 'Nicht Stecken',

        autosizeThiscolumn: 'Automatische Gr????en??nderung dieser Spalte',
        autosizeAllColumns: 'Automatische Gr????en??nderung aller Spalten',
        resetColumns: 'Spalten zur??cksetzen',
        copy: 'Kopieren',
        ctrlC: 'Ctrl+C',
        copyWithHeaders: 'Kopie mit ??berschriften',
        paste: 'Einf??gen',
        ctrlV: 'Ctrl+V',
        export: 'Export',
        csvExport: 'CSV Export',
        excelExport: 'Excel Export (.xlsx)',
        excelXmlExport: 'Excel Export (.xml)',
    },
};

const LANGUAGE_OPTIONS: { EN: string, ES: string, DE: string } = {
    EN: 'en-GB',
    ES: 'es-ES',
    DE: 'de-DE'
}
export {DATE_OPTION, DAY_OPTION, TRANSLATIONS, LANGUAGE_OPTIONS}
