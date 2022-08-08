import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import Icon from "../../../components/Icon/Icon";
import chocolate from "../../../assets/chocolate.jpg";
import tplogo from "../../../assets/tplogo.png";
import tplogosmall from "../../../assets/tplogosmall.png";
import './EditorPage.scss';
import CloseComponent from '../../../components/CloseComponent/CloseComponent';
import { TextField } from '@material-ui/core';
import VariationComponent from './VariationComponent/VariationComponent';
import { DataGrid } from '@mui/x-data-grid';
interface EditorPageProps {

}
interface RoundButtonProps {
    tooltip: string;
    icon: string;
    class?: string;
    action: () => void;
    tooltipDirection?: string;
}
const RoundButton = (props: RoundButtonProps) => {
    return (
        <div className={'tprc-button round small ' + (props.class ?? 'cancel')}  onClick={props.action} data-tip={props.tooltip}>
            <Icon icon={props.icon ?? 'Check'} fontSize={16} />
        </div>
    );
};
const EditorPage = (props: EditorPageProps) => {
    const [selectedEditorPage, setSelectedEditorPage] = useState('Editor');
    const [selectedFacebookPage, setSelectedFacebookPage] = useState<string | undefined>(undefined);
    const [editCampaign, setEditCampaign] = useState(false);
    const [campaignTitle, setCampaignTitle] = useState('Campaign Title');
    const [theme, setTheme] = useState('light');
    const [isV2, setIsV2] = useState(true);
    const [editorData, setEditorData] = useState({
        topHeadline: 'Get the Playbook!',
        topBody: 'Learn how Retail and Consumer Product Brands can benefit from global-to-local social advertising. Get the Playbook!',
        image: 'This is image',
        bottomURL: 'justingiist.github.io',
        bottomHeadline: 'Get the Playbook! This one has a warning because it is tooooo long',
        bottomBody: 'Test Test Test ',
        cta: 'Book Now'
    });
    const handleEditorChange = (field: string, value: string) => {
        setEditorData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    useEffect(() => {
        setSelectedFacebookPage(undefined);
    }, [selectedEditorPage]);
    return (
        <div className={`tprc-test ${theme}`}>
            {<SidebarComponent />}
            <div className='tprc-editor-page'>
                <div className='tprc-top-nav'>
                    <div className='tprc-breadcrumbs'>
                        <div className='subHeadlineBold'>Templates</div>
                        <div className='subHeadlineBold current'><Icon icon="ChevronRight" fontSize={16}/> {campaignTitle}</div>
                    </div>
                    <div className='flex'>
                        <div className='tprc-button square option' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            <Icon icon={theme === 'light' ? 'Moon' : 'Sun'} />
                        </div>
                        <div className='account-menu'>
                            <Icon icon='Account' />
                        </div>
                    </div>
                    
                </div>
                <div className='tprc-editor'>
                    <div className='tprc-editor-title flexSB'>
                        {editCampaign ? (
                            <div className='flex noWrap'>
                                <input className='tprc-facebook-input headline three' type='text' value={campaignTitle} onChange={(e) => setCampaignTitle(e.target.value)}/>
                                <RoundButton action={() => setEditCampaign(false)} class='cancel' icon='X' tooltip='Cancel &amp; undo changes' />
                                <RoundButton action={() => setEditCampaign(false)} class='success' icon='Check' tooltip='Save &amp; Close' />
                            </div>
                        ) : (
                            <h3 onClick={() => setEditCampaign(true)} className="text-headline">{campaignTitle}</h3>
                        )}
                        <div className='flex noWrap'>
                            <button className='tprc-button secondary'><div className='button-text'>Save</div><div className='button-hover-icon'><Icon icon='Check'/></div></button>
                            <button className='tprc-button primary'><div className='button-text'>Publish</div><div className='button-hover-icon'><Icon icon='Check'/></div></button>
                        </div>
                    </div>
                    <div className='flexSB' style={{ padding: '0 16px'}}>
                        <div style={{ minWidth: 120 }} />
                        <div className='tprc-editor-options'>
                            {editorOptions.map(option => <h5 key={`editor-option-${option}`} onClick={() => setSelectedEditorPage(option)} className={'tprc-editor-button ' + (option === selectedEditorPage ? ' selected' : '')}>{option}</h5>)}
                        </div>
                        <div className='flex noWrap' style={{ justifyContent: 'flex-end' }}>
                            <div className='textSubHeadline subHeadlineLight'>Status:</div>
                            <div className='textBody subHeadlineBold success'>Published</div>
                        </div>
                    </div>
                    
                    {selectedEditorPage === editorOptions[0] && !isV2 && (
                        <div className={'tprc-editor-content animateIn' + (selectedFacebookPage === undefined ? '' : ' panelOpen')}>
                            <div className='flexColumn'>
                                <div className={'descriptionBold ' + (selectedFacebookPage === undefined ? 'fadeIn' : 'fadeOut')}>Please select a region you want to edit</div>
                                <div className='tprc-editor-facebook'>
                                    <div className='facebookHeader unselectable'>
                                        <div className='flex noWrap'>
                                            <div className='grey-icon' />
                                            <div className='flexColumn'>
                                                <div className='subHeadlineBlock'></div>
                                                <div className='descriptionBlock'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'facebookTop panel' + ('Top' === selectedFacebookPage ? ' selected' : '')} onClick={() => setSelectedFacebookPage(facebookOptions[0])}>
                                        <div className='textBody'>{editorData.topHeadline}</div>
                                        <div className='textBody'>{editorData.topBody}</div>
                                    </div>
                                    <div className={'facebookAssets panel' + ('Asset' === selectedFacebookPage ? ' selected' : '')} onClick={() => setSelectedFacebookPage(facebookOptions[1])}>
                                        <img src={chocolate} />
                                    </div>
                                    <div className={'facebookBottom panel' + ('Bottom' === selectedFacebookPage ? ' selected' : '')} onClick={() => setSelectedFacebookPage(facebookOptions[2])}>
                                        <div className='textSubHeadline'>{editorData.bottomHeadline}</div>
                                        <div className='textBody'>{editorData.bottomBody}</div>
                                    </div>
                                    <div className='facebookFooter unselectable'>
                                        <div className='flex'>
                                            <div className='grey-icon small' />
                                            <div className='subHeadlineBlock small'></div>
                                        </div>
                                        <div className='flex'>
                                            <div className='grey-icon small' />
                                            <div className='subHeadlineBlock small'></div>
                                        </div>
                                        <div className='flex'>
                                            <div className='grey-icon small' />
                                            <div className='subHeadlineBlock small'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tprc-editor-panel'>
                                
                                <div className='flex noWrap'>
                                    {facebookOptions.map(option => <div key={`facebook-option-${option}`} onClick={() => setSelectedFacebookPage(option)} className={'tab' + (option === selectedFacebookPage ? ' selected' : '')}>{option}</div>)}
                                </div>
                                <div className='panel-content'>
                                    <CloseComponent action={() => setSelectedFacebookPage(undefined)}/>
                                    <h4 className='textSubHeadline'>{selectedFacebookPage + ' Section'}</h4>
                                    {facebookOptions[0] === selectedFacebookPage && (
                                        <div className='Down panel-inputs'>
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('topHeadline', value) }} value={editorData.topHeadline} warning={['Messenger Inbox Placement is not allowed for one or more of the Audience Locations selected. If you wish to use Messenger Inbox, please remove locations in United States, Canada, Australia, and France.']} label={'Headline'} lockToggle={() => {}} lockValue={true} placeholder={'Headline Here...'} />
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('topBody', value) }} value={editorData.topBody} label={'Description'} lockToggle={() => {}} lockValue={false} placeholder={'Description Here...'} />
                                        </div>
                                    )}
                                    {facebookOptions[1] === selectedFacebookPage && (
                                        <div className='Down panel-inputs'>
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('image', value) }} value={editorData.image} label={'Image'} lockToggle={() => {}} lockValue={true} placeholder={'Image Here...'} />
                                        </div>
                                    )}
                                    {facebookOptions[2] === selectedFacebookPage && (
                                        <div className='Down panel-inputs'>
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('bottomHeadline', value) }} value={editorData.bottomHeadline} label={'Headline'} lockToggle={() => {}} lockValue={true} placeholder={'Headline Here...'} />
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('bottomBody', value) }} value={editorData.bottomBody} label={'Description'} lockToggle={() => {}} lockValue={false} placeholder={'Description Here...'} />
                                            <FacebookInputElement onChange={(value: string) => { handleEditorChange('cta', value) }} value={editorData.cta} label={'Call To Action'} lockToggle={() => {}} lockValue={false} placeholder={'CTA Here...'} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedEditorPage === editorOptions[0] && isV2 && (
                        <div className={'tprc-editor-content animateIn' + (selectedFacebookPage === undefined ? '' : ' panelOpen')}>
                            <div className='flexColumn'>
                                <div className={'descriptionBold'}>{selectedFacebookPage === undefined ? <div key={'regionSelection'} className='fadeIn'>Please select a region you want to edit</div> :  <div key={'variationControl'} className='fadeIn'><VariationComponent /></div>}</div>
                                <EditorV2 handleEditorChange={handleEditorChange} editorData={editorData} selectedFacebookPage={selectedFacebookPage} setSelectedFacebookPage={setSelectedFacebookPage}/>
                            </div>
                        </div>
                    )}
                    {selectedEditorPage === editorOptions[1] && (
                        <InputsMockup label={editorOptions[1]} inputArray={AudienceInputs} />
                    )}
                    {selectedEditorPage === editorOptions[2] && (
                        <InputsMockup label={editorOptions[2]} inputArray={ObjectiveInputs} />
                    )}
                    {selectedEditorPage === editorOptions[3] && (
                        <InputsMockup label={editorOptions[3]} inputArray={SettingsInputs} />
                    )}
                    {selectedEditorPage === editorOptions[4] && (
                        <>
                            <div style={{marginTop: 24}} key={'variationControl'} className='fadeIn'><div style={{height: 24}}/></div>
                            <div className='tprc-editor-content settings'>
                                <h2 className='textHeadlineSecondary'>History</h2>
                                <DataGrid 
                                    rows={[
                                        {
                                            id: '1',
                                            label: 'Tried to publish',
                                            reason: 'Campaign name is too long',
                                            type: 'Error',
                                            adjusted_by: 'Bob Govia',
                                            date_submitted: new Date(1),
                                        },
                                        {
                                            id: '2',
                                            label: 'Edited',
                                            reason: '',
                                            type: 'Log',
                                            adjusted_by: 'Justin Gist',
                                            date_submitted: new Date(2),
                                        },
                                        {
                                            id: '3',
                                            label: 'Publish',
                                            reason: 'Publish Action',
                                            type: 'Log',
                                            adjusted_by: 'Justin Gist',
                                            date_submitted: new Date(3),
                                        },
                                        {
                                            id: '4',
                                            label: 'Facebook Campaign failed',
                                            reason: 'Campaign name is too long',
                                            type: 'Facebook Error',
                                            adjusted_by: 'Facebook',
                                            date_submitted: new Date(4),
                                        },
                                        {
                                            id: '5',
                                            label: 'Edit',
                                            reason: '',
                                            type: 'Log',
                                            adjusted_by: 'Justin Gist',
                                            date_submitted: new Date(5),
                                        },
                                        {
                                            id: '3',
                                            label: 'Publish',
                                            reason: 'Publish Action',
                                            type: 'Log',
                                            adjusted_by: 'Justin Gist',
                                            date_submitted: new Date(6),
                                        },
                                    ]}
                                    columns={[
                                        {
                                            field: 'label',
                                            headerName: 'Label',
                                            flex: 1,
                                        },
                                        {
                                            field: 'reason',
                                            headerName: 'Reason',
                                            flex: 2,
                                        },
                                        {
                                            field: 'type',
                                            headerName: 'Report Type',
                                            flex: 1,
                                        },
                                        {
                                            field: 'adjusted_by',
                                            headerName: 'Adjusted By',
                                            flex: 1,
                                        },
                                        {
                                            field: 'date_submitted',
                                            headerName: 'Date Logged',
                                            flex: 1,
                                        },
                                    ]}
                                />
                            </div>
                        </>
                        
                    )}
                    {selectedEditorPage === editorOptions[5] && (
                        <PreviewPage editorData={editorData}/>
                    )}
                </div>
                
            </div>
        </div>
    );
};
export default EditorPage;
interface SidebarProps {
}
const SidebarComponent = (props: SidebarProps) => {
    const [collapse, setCollapse] = useState(true);
    const [selectedSideBar, setSelectedSidebar] = useState('Customers');
    return (
        <div className={`tprc-sidebar ${collapse ? 'collapse' : ''}`}>
            {collapse ? <img key='tplogosmall' src={tplogosmall} className='fadeIn' style={{ marginBottom: 32}}/> : <img key='tplogo' src={tplogo} className='fadeIn' style={{ marginBottom: 32}}/>}
            {sidebarOptions.map((option: string) => (
                <div 
                key={`side-bar-button-${option}`}
                onClick={() => setSelectedSidebar(option)} 
                className={"tprc-sidebar-button flex noWrap" + (option === selectedSideBar ? ' selected' : '')}>
                    {collapse ? (
                        <Icon icon={option} fontSize={20} data-tip={option} />
                    ) : (
                        <Icon icon={option} fontSize={20} />
                    )}
                    <h4>{option}</h4>
                </div>
            ))}
            <div className='tprc-sidebar-button pushToBottom' onClick={() => setCollapse(!collapse)}>
                <Icon icon={collapse ? 'SidebarOpen' : 'SidebarClose'} fontSize={20}/>
            </div>
        </div>
    );
};
const AudienceInputs = [
    'Use Location Preffered Audience',
    'Country',
    'Locations',
    'Age',
    'Gender',
    'Language',
    'Detailed Target',
    'Excluded Detailed Targeting'
];
const ObjectiveInputs = [
    'Objective',
    'Desktop News Feed',
    'Mobile News Feed',
    'Instagram Feed',
    'Marketplace',
    'Instagram Stores',
    'Facebook Stores',
    'Automatic Placements',
    'Special Ad Category'
];
const SettingsInputs = [
    'Template Name',
    'Campaign Name',
    'Funding Option',
    'Budget',
    'Dates',
    'Use Advanced Ad Scheduling'
];
const InputsMockup = (props: { label: string; inputArray: string[]; }) => {
    return (
        <>
            <div style={{marginTop: 24}} key={'variationControl'} className='fadeIn'><VariationComponent /></div>
            <div className='tprc-editor-content settings'>
                <h2 className='textHeadlineSecondary'>{props.label}</h2>
                <div className='inputsSection flexFull'>
                    {props.inputArray.map((input, i) => {
                        const delay = Math.floor(i / 2) + 1;
                        return (
                            <div 
                                key={`animated-${input}`}
                                className={i % 2 === 0 ? 'Right' : 'Left'} 
                                style={{ animationDelay: `0.${delay}67s`}} 
                            >
                                <SettingsInputElement label={input}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
        
    );
}
const SettingsInputElement = (props: {
    label: string;
}) => {
    const [value, setValue] = useState('');
    return (
        <div className='flexColumn'>
            <div className='subHeadlineBold textInputLabel'>{props.label}</div>
            <input type='text' className='tprc-facebook-input' value={value} placeholder={props.label + '...'} onChange={e => setValue(e.target.value)}/>
        </div>
    );
};
const FacebookInputElement = (props: {
    value: string;
    label: string;
    lockToggle: (value: boolean) => void;
    lockValue: boolean;
    placeholder: string;
    warning?: any[];
    onChange?: (value: string) => void;
}) => {
    const isMultiline = props.label === 'Description';
    const handleChange = (e: any) => {
        if (props.onChange) props.onChange(e.target.value);
    };
    return (
        <div className='flexColumn' key={props.label}>
            <div className='flexSB'>
                <div className='textSubHeadline textInputLabel flex'>
                    {props.label}{props.warning && <Icon icon='Warning' data-tip={props.warning} />}
                </div>
                {!props.lockToggle ? <div /> : <Icon data-tip='This is a lock' icon={!props.lockValue ? 'LockOpen' : 'Lock'} />}
            </div>
            <TextField className='tprc-input' onChange={handleChange} variant='outlined' value={props.value} placeholder={props.placeholder} multiline={isMultiline}/>
        </div>
    );
};
const sidebarOptions = [
    'Customers',
    'Templates',
    'Campaigns',
    'Reports',
    'Admin'
];
const editorOptions = [
    'Editor',
    'Audience',
    'Objective',
    'Settings',
    'History',
    'Preview',
];
const facebookOptions = [
    'Top',
    'Asset',
    'Bottom'
];
interface EditorV2Props {
    editorData: any;
    selectedFacebookPage: string | undefined;
    setSelectedFacebookPage: Dispatch<SetStateAction<string | undefined>>;
    handleEditorChange: any;
}
interface InputObj {
    editorString: string;
    value: string;
    lockToggle: any;
    lockValue: boolean;
    label: string;
    element?: any;
    multiline?: boolean;
    warnings?: string[];
    errors?:string[];
}

const EditorV2 = (props: EditorV2Props) => {
    const onClick = useCallback((facebookOption) => {
        if (facebookOption === props.selectedFacebookPage) {

        } else {
            props.setSelectedFacebookPage(facebookOption);
        }
    }, [props.setSelectedFacebookPage, props.selectedFacebookPage]);
    const topInputs: InputObj[] = [
        {
            label: 'Headline',
            lockValue: true,
            editorString: 'topHeadline',
            value: props.editorData.topHeadline,
            lockToggle: () => {},
        },
        {
            label: 'Body',
            lockValue: false,
            editorString: 'topBody',
            value: props.editorData.topBody,
            lockToggle: () => {},
            multiline: true,
        },
    ];
    const assetInputs: InputObj[] = [
        {
            label: 'Assets',
            lockValue: true,
            element: <AssetInputElement isSelected={props.selectedFacebookPage === facebookOptions[1]}/>,
            editorString: 'image',
            value: props.editorData.image,
            lockToggle: () => {},
        }
    ];
    const bottomInputs: InputObj[] = [
        {
            label: 'URL',
            lockValue: true,
            editorString: 'bottomURL',
            value: props.editorData.bottomURL,
            lockToggle: () => {},
        },
        {
            label: 'Headline',
            lockValue: true,
            editorString: 'bottomHeadline',
            value: props.editorData.bottomHeadline,
            lockToggle: () => {},
            warnings: [
                'Headline may not be over 30 characters',
                'This is a test for multiple warnings',
            ],
        },
        {
            label: 'Body',
            lockValue: false,
            editorString: 'bottomBody',
            value: props.editorData.bottomBody,
            lockToggle: () => {},
            multiline: true,
            warnings: [
                'May not contain the word \'Test\'',
            ],
        },
    ];
    return (
        <>
            <div className='tprc-editor-facebook V2'>
                <div className='facebookHeader unselectable'>
                    <div className='flex noWrap'>
                        <div className='grey-icon' />
                        <div className='flexColumn'>
                            <div className='subHeadlineBlock'></div>
                            <div className='descriptionBlock'></div>
                        </div>
                    </div>
                </div>
                <PanelEditor 
                    onClick={onClick}
                    facebookClass='facebookTop' 
                    Inputs={topInputs} 
                    handleEditorChange={props.handleEditorChange}
                    selectedFacebookPage={props.selectedFacebookPage} 
                    setSelectedFacebookPage={props.setSelectedFacebookPage} 
                    facebookOption={facebookOptions[0]}
                />
                <PanelEditor 
                    onClick={onClick}
                    facebookClass='facebookAssets' 
                    Inputs={assetInputs} 
                    handleEditorChange={props.handleEditorChange}
                    selectedFacebookPage={props.selectedFacebookPage} 
                    setSelectedFacebookPage={props.setSelectedFacebookPage} 
                    facebookOption={facebookOptions[1]} 
                    toggleImageMenu
                    />
                <PanelEditor 
                    onClick={onClick}
                    facebookClass='facebookBottom' 
                    Inputs={bottomInputs} 
                    handleEditorChange={props.handleEditorChange}
                    selectedFacebookPage={props.selectedFacebookPage} 
                    setSelectedFacebookPage={props.setSelectedFacebookPage} 
                    facebookOption={facebookOptions[2]} 
                    toggleCTA
                    />
                <div className='facebookFooter unselectable'>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                </div>
            </div>
        </>
    );
};
const FacebookInputElementV3 = (panelProps: {
    facebookOption: string; 
    editorString: string; 
    value: string;
    selectedFacebookPage: string | undefined;
    handleEditorChange: any;
    multiline?: boolean;
}) => (
    panelProps.facebookOption === panelProps.selectedFacebookPage ? (
        <>
            {panelProps.multiline && <textarea className='tprc-facebook-input' value={panelProps.value} onChange={(e) => panelProps.handleEditorChange(panelProps.editorString, e.target.value)}/>}
            {!panelProps.multiline && <input className='tprc-facebook-input' type='text' value={panelProps.value} onChange={(e) => panelProps.handleEditorChange(panelProps.editorString, e.target.value)}/> }
        </>
    ) : (
        <>
            <div className='textBody'>{panelProps.value}</div>
        </>
    )
);

interface V2PanelEditorProps {
    selectedFacebookPage: string | undefined;
    setSelectedFacebookPage: Dispatch<SetStateAction<string | undefined>>;
    facebookOption: string;
    facebookClass: string;
    Inputs: InputObj[];
    handleEditorChange: any;
    onClick: any;
    toggleCTA?: boolean;
    toggleImageMenu?: boolean;
}
const RightPanelItems = ['Options'];
const AssetTypes = ['image', 'video', 'carousel'];
const PanelEditor = (props: V2PanelEditorProps) => {
    const [rightPanelSelected, setRightPanelSelected] = useState('Options');
    const [showCTA, setShowCTA] = useState(false);
    const [selectedAssetType, setSelectedAssetType] = useState(AssetTypes[0]);
    const [cta, setCta] = useState<string | undefined>(undefined);
    const isSelected = props.selectedFacebookPage === props.facebookOption;
    const contentElements = useMemo(() => {
        return (props.Inputs.map(input => {
            if (input.element) return input.element;
            return <FacebookInputElementV3 key={`content-input-${input.label}`} multiline={input.multiline} handleEditorChange={props.handleEditorChange} selectedFacebookPage={props.selectedFacebookPage} editorString={input.editorString} value={input.value} facebookOption={props.facebookOption} />
    }));
    }, [props.Inputs]);
    const leftElements = useMemo(() => {
        return (props.Inputs.map(input => (
            <div key={`left-input-${input.label}`} className='panel-editor-input-element'>
                {input.warnings &&
                        <div className='circleIcon warning' data-tip={input.warnings}><div className='bodyBold'>{input.warnings.length}</div></div>
                }
                {input.errors &&
                        <div className='circleIcon error' data-tip={input.errors}><div className='bodyBold'>{input.errors.length}</div></div>
                }
                <div className='subHeadlineBold'>{input.label}</div>
                {!input.lockToggle ? <div /> : (
                        <Icon icon={!input.lockValue ? 'LockOpen' : 'Lock'} fontSize={20} data-tip={`Toggle ${input.label} Lock to Allow/Unallow (Lock/Unlock) a Location or End Advertiser to be able to edit this field within their Location Control.`}/>
                )}
            </div>
        )));
    }, [props.Inputs]);
    const leftPanel = useMemo(() => (
        <div className='panel-editor left'>
            {leftElements}
        </div>
    ), [isSelected]);
    const rightPanel = useMemo(() => {
        return (
            <div className='panel-editor right'>
                <div className='panel-editor-tabs'>
                    {RightPanelItems.map(item => (
                        <div 
                            key={`right-panel-${item}`}
                            onClick={() => setRightPanelSelected(item)} 
                            className={`panel-editor-tab ${item === rightPanelSelected ? 'selected' : ''} ${item === 'Options' ? 'info' : 'info'}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className={`panel-editor-side-content flexColumn ${rightPanelSelected === 'Options' ? 'info' : 'info'}`}>
                    <div className='flex noWrap'>
                        <input className='tprc-input' style={{ width: 16, height: 16 }} type='checkbox' />
                        <div className='bodyNormal'>Option 1</div>
                    </div>
                    <div className='flex noWrap'>
                        <input className='tprc-input' style={{ width: 16, height: 16 }} type='checkbox' />
                        <div className='bodyNormal'>Option 2</div>
                    </div>
                </div>
            </div>
        );
    }, [rightPanelSelected]);
    const imageMenu = AssetTypes.map(assetType => (
            <div 
            data-tip={`Click to use ${assetType} Asset`}
            key={`tooltip-component-${assetType}`}
            className={`${selectedAssetType === assetType ? 'selected' : ''} tprc-pill `} 
            onClick={() => {
                setSelectedAssetType(assetType);
            }}>
                {assetType}
            </div>
   ));
    return (
        <div className={`tprc-panel-editor-v2 ${isSelected ? 'selected' : ''}`}>
            {isSelected && leftPanel}
            <div className='panel-editor-middle'>
                {isSelected && (
                    <div className='panel-editor-header flexSB'>
                        <div  data-tip={`This is the ${props.selectedFacebookPage} Section. Here you will fill out the fields to complete your facebook ad.`} className='subHeadlineBold textHeadlineSecondary'>{props.selectedFacebookPage} Section</div>
                        {props.toggleCTA && (
                            <div 
                            data-tip={showCTA ? 'Click to hide CTA field' : 'Click to show CTA field'}
                            className={`${showCTA ? 'selected' : ''} tprc-pill `} 
                            onClick={() => {
                                setShowCTA(!showCTA);
                                setCta('Apply Now');
                                }}>CTA <Icon icon={showCTA ? 'Eye' : 'EyeOff'} fontSize={16} />
                            </div>
                        )}
                        {props.toggleImageMenu && (
                            <div className='flex noWrap image-menu'>
                                {imageMenu}
                            </div>
                        )}
                    </div>
                )}
                <div className='panel-editor-content'>
                    <div className={`${props.facebookClass} panel ${props.facebookOption === props.selectedFacebookPage ? ' selected' : ''}`} onClick={() => props.onClick(props.facebookOption)}>
                        <div className='flexColumn'>{contentElements}</div>
                        {props.toggleCTA && <div className={`tprc-cta-select ${showCTA ? 'show' : 'hide'}`}>
                            {isSelected ? (
                                <>
                                    <div className='flex noWrap'>
                                        <div className='bodyBold textSubHeadline'>Call To Action</div>
                                    </div>
                                    <select className='tprc-input' name="CTA" id="cta" value={cta} onChange={(e) => setCta(e.target.value)}>
                                        <option value="Apply Now">Apply Now</option>
                                        <option value="Book Now">Book Now</option>
                                        <option value="Buy Now">Buy Now</option>
                                        <option value="Call Now">Call Now</option>
                                        <option value="Contact Us">Contact Us</option>
                                    </select>
                                </>
                            ) : (
                                <div className='tprc-cta'>{cta}</div>
                            )}
                        </div>}
                    </div>
                </div>
                {isSelected && (
                    <div className='panel-editor-footer flexSB'>
                        <div />
                        <div className='panel-editor-actions flex noWrap'>
                            <RoundButton tooltipDirection='above' action={() => props.setSelectedFacebookPage(undefined)} class='cancel' icon='X' tooltip='Cancel &amp; undo changes' />
                            <RoundButton tooltipDirection='above' action={() => props.setSelectedFacebookPage(undefined)} class='success' icon='Check' tooltip='Save &amp; Close' />
                        </div>
                    </div>
                )}
            </div>
            {isSelected && rightPanel}
        </div>
    )
}
interface PreviewPageProps {
    editorData: any;
}
const PreviewPage = (props: PreviewPageProps) => {
    const facebookPreview = useCallback((type: string) => {
        return (
            <div className={'tprc-editor-facebook preview ' + (type)}>
                <div className='facebookHeader'>
                    <div className='flex noWrap'>
                        <div className='grey-icon' />
                        <div className='flexColumn'>
                            <div className='subHeadlineBlock'></div>
                            <div className='descriptionBlock'></div>
                        </div>
                    </div>
                </div>
                <div className='facebookTop'>
                    <div className='textBody'>{props.editorData.topHeadline}</div>
                    <div className='textSubBody'>{props.editorData.topBody}</div>
                </div>
                <div className='facebookAssets'>
                    <img src={chocolate} />
                </div>
                <div className='facebookBottom'>
                    <div className='flex noWrap'>
                        <div className='flexColumn' style={{ flex: 1 }}>
                            <div className='textSubBody'>{props.editorData.bottomURL}</div>
                            <div className='textBody'>{props.editorData.bottomHeadline}</div>
                            <div className='textSubBody'>{props.editorData.bottomBody}</div>
                        </div>
                        <div className='tprc-cta'>{props.editorData.cta}</div>
                    </div>
                    
                </div>
                <div className='facebookFooter'>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                    <div className='flex'>
                        <div className='grey-icon small' />
                        <div className='subHeadlineBlock small'></div>
                    </div>
                </div>
            </div>
        );
    }, [props.editorData]);
    return (
        <>
            <div style={{marginTop: 24}} key={'variationControl'} className='fadeIn'><VariationComponent /></div>
            <div className='trpc-preview-page animateIn'>
                <div className='flex'>
                    <div className='flexColumn' style={{textAlign: 'center'}}>
                        <div className='textSubHeadline'>{'Web'}</div>
                        <div className='preview-container preview-laptop'>
                            <div className='preview-content'>
                                {facebookPreview('laptop')}
                            </div>
                        </div>
                    </div>
                    <div className='flexColumn' style={{textAlign: 'center'}}>
                        <div className='textSubHeadline'>{'Phone'}</div>
                        <div className='preview-container preview-phone'>
                            <div className='preview-content'>
                                {facebookPreview('phone')}
                            </div>
                        </div>
                    </div>
                    <div className='flexColumn' style={{textAlign: 'center'}}>
                        <div className='textSubHeadline'>{'Tablet'}</div>
                        <div className='preview-container preview-tablet'>
                            <div className='preview-content'>
                                {facebookPreview('tablet')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};
interface AssetInputElementProps {
    isSelected: boolean;
}
const AssetInputElement = (props: AssetInputElementProps) => {
    return props.isSelected ? (
        <div className='tprc-asset-input'>
            <div className='upload input' data-tip={'Upload an image'}>
                <Icon icon='Upload' fontSize={120} />
            </div>
            <h3 className='textBody'>OR</h3>
            <div className='photo input' data-tip={'Take a photo'}>
                <Icon icon='Camera' fontSize={120} />
            </div>
        </div>
    ): (
        <img src={chocolate} />
    );
}