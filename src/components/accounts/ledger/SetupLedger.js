import React, { useState } from 'react';
import { connect } from 'react-redux';
import Theme from './PageTheme.css';
import InstructionsModal from './InstructionsModal';
import LedgerIcon from '../../svg/LedgerIcon';
import FormButton from '../../common/FormButton';
import { Translate } from 'react-localize-redux';

const SetupLedger = () => {

    const [showInstructions, setShowInstructions] = useState(false);
    const toggleShowInstructions = () => setShowInstructions(!showInstructions);

    return (
        <Theme>
            <h1><Translate id='setupLedger.header'/></h1>
            <LedgerIcon/>
            <p><Translate id='setupLedger.one'/></p>
            <p><Translate id='setupLedger.two'/> <span className='link' onClick={toggleShowInstructions}><Translate id='setupLedger.twoLink'/></span>.</p>
            <FormButton><Translate id='button.connectLedger'/></FormButton>
            <button className='link'><Translate id='button.cancel'/></button>
            {showInstructions && 
                <InstructionsModal open={showInstructions} onClose={toggleShowInstructions}/>
            }
        </Theme>
    );
}

const mapDispatchToProps = {

}

const mapStateToProps = ({ account }) => ({
    ...account
})

export const SetupLedgerWithRouter = connect(mapStateToProps, mapDispatchToProps)(SetupLedger);