import {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import {GridApi, GridReadyEvent} from "ag-grid-community";
import {ROWDATA} from "./Data";
import {getColumnDefs} from "./Columns";
import {TRANSLATIONS} from "./Transaltions";

function Grid(props: { language: string }) {
    const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);
    const [destroyed, setDestroyed] = useState(false);

    const rowData = ROWDATA;

    const defaultColDef = {
        filter: true,
        flex: 1,
    }
    const onGridReady = (params: GridReadyEvent): void => {
        setGridApi(params.api);
    };
    useEffect(() => {
        // if (!gridApi) {
        //     return;
        // }
        setDestroyed(true);
        setTimeout(() => setDestroyed(false));
    }, [props.language])

    return destroyed ? null : (
                    <div
                        id="myGrid"
                        style={{
                            height: '450px',
                            width: '1000px',
                            margin: 'auto'
                        }}
                        className="ag-theme-alpine-dark"
                    >
                        <AgGridReact
                            localeText={TRANSLATIONS[props.language]}
                            applyColumnDefOrder={true}
                            defaultColDef={defaultColDef}
                            onGridReady={onGridReady}
                            rowData={rowData}
                            columnDefs={getColumnDefs(props.language)}
                            sideBar={{
                                toolPanels: [
                                    {
                                        id: 'filters',
                                        labelDefault: 'Filters',
                                        labelKey: 'filters',
                                        iconKey: 'filter',
                                        toolPanel: 'agFiltersToolPanel',
                                        toolPanelParams: {
                                            suppressExpandAll: true,
                                            suppressFilterSearch: true,
                                        },
                                    },
                                ],
                            }}
                        />
                    </div>
    );
}

export {Grid};
