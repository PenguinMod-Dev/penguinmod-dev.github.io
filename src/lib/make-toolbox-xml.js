import LazyScratchBlocks from './tw-lazy-scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const translate = (id, english) => {
    if (LazyScratchBlocks.isLoaded()) {
        const ScratchBlocks = LazyScratchBlocks.get();
        return ScratchBlocks.ScratchMsgs.translate(id, english);
    }
    return english;
};

/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId) {
    const stageSelected = translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        <block type="motion_movesteps"></block>
        <block type="motion_movebacksteps"></block>
        <block type="motion_moveupdownsteps"></block>
        <block type="motion_turnright"></block>
        <block type="motion_turnleft"></block>
        ${blockSeparator}
        <block type="motion_goto"></block>
        <block type="motion_gotoxy"></block>
        <block type="motion_changebyxy"></block>
        <block type="motion_glideto" id="motion_glideto"></block>
        <block type="motion_glidesecstoxy"></block>
        ${blockSeparator}
        <block type="motion_pointindirection"></block>
        <block type="motion_pointtowards"></block>
        <block type="motion_pointtowardsxy"></block>
        <block type="motion_turnaround"/>
        ${blockSeparator}
        <block type="motion_changexby"></block>
        <block type="motion_setx"></block>
        <block type="motion_changeyby"></block>
        <block type="motion_sety"></block>
        ${blockSeparator}
        <block type="motion_ifonedgebounce"/>
        <block type="motion_ifonspritebounce"></block>
        ${blockSeparator}
        <block type="motion_setrotationstyle"/>
        ${blockSeparator}
        <block type="motion_move_sprite_to_scene_side"/>
        ${blockSeparator}
        <block id="${targetId}_xposition" type="motion_xposition"/>
        <block id="${targetId}_yposition" type="motion_yposition"/>
        <block id="${targetId}_direction" type="motion_direction"/>`}
        ${categorySeparator}
    </category>
    `;
};

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};

const looks = function (isInitialSetup, isStage, targetId, costumeName, backdropName) {
    const hello = translate('LOOKS_HELLO', 'Hello!');
    const hmm = translate('LOOKS_HMM', 'Hmm...');
    return `
    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">
        ${isStage ? '' : `
        <block type="looks_sayforsecs"></block>
        <block type="looks_say"></block>
        <block type="looks_thinkforsecs"></block>
        <block type="looks_think"></block>
        <block type="looks_stoptalking"/>
        ${blockSeparator}
        <block type="looks_setFont"></block>
        <block type="looks_setColor"></block>
        <block type="looks_setShape"></block>
        <block type="looks_sayWidth"></block>
        <block type="looks_sayHeight"></block>
        ${blockSeparator}
        `}
        ${isStage ? `
            <block type="looks_switchbackdropto"></block>
            <block type="looks_switchbackdroptoandwait"></block>
            <block type="looks_nextbackdrop"/>
            <block type="looks_previousbackdrop"/>
            <block type="looks_getinputofcostume"></block>
        ` : `
            <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto"></block>
            <block type="looks_nextcostume"/>
            <block type="looks_previouscostume"/>
            ${blockSeparator}
            <block type="looks_switchbackdropto"></block>
            <block type="looks_nextbackdrop"/>
            <block type="looks_previousbackdrop"/>
            <block type="looks_getinputofcostume"></block>
            ${blockSeparator}
            <block type="looks_changesizeby"></block>
            <block type="looks_setsizeto"></block>
            ${blockSeparator}
            <block type="looks_setStretch"></block>
            <block type="looks_stretchGetX"></block>
            <block type="looks_stretchGetY"></block>
        `}
        ${blockSeparator}
        <block type="looks_changeeffectby"></block>
        <block type="looks_seteffectto"></block>
        <block type="looks_setTintColor"></block>
        <block type="looks_cleargraphiceffects"/>
        <block type="looks_getEffectValue"/>
        <block type="looks_tintColor"/>
        ${blockSeparator}
        ${isStage ? '' : `
            <block type="looks_show"/>
            <block type="looks_hide"/>
            <block type="looks_getSpriteVisible"/>
            ${blockSeparator}
            <block type="looks_changeVisibilityOfSpriteShow"></block>
            <block type="looks_changeVisibilityOfSpriteHide"></block>
            <block type="looks_getOtherSpriteVisible"></block>
            ${blockSeparator}
            <block type="looks_gotofrontback"/>
            <block type="looks_goforwardbackwardlayers"></block>
            <block type="looks_layersSetLayer"></block>
            <block type="looks_layersGetLayer"></block>
            ${blockSeparator}
        `}
        ${isStage ? `
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
        ` : `
            <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
            <block id="${targetId}_size" type="looks_size"/>
        `}
        ${categorySeparator}
    </category>
    `;
};

const sound = function (isInitialSetup, isStage, targetId, soundName) {
    return `
    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">
        <block id="${targetId}_sound_playuntildone" type="sound_playuntildone"></block>
        <block id="${targetId}_sound_play_at_seconds_until_done" type="sound_play_at_seconds_until_done"></block>
        ${blockSeparator}
        <block id="${targetId}_sound_play" type="sound_play"></block>
        <block id="${targetId}_sound_play_at_seconds" type="sound_play_at_seconds"></block>
        <block id="${targetId}_sound_stop" type="sound_stop"></block>
        <block type="sound_playallsounds"/>
        <block type="sound_stopallsounds"/>
        ${blockSeparator}
        <block id="${targetId}_sound_set_stop_fadeout_to" type="sound_set_stop_fadeout_to"></block>
        ${blockSeparator}
        <block id="${targetId}_sound_isSoundPlaying" type="sound_isSoundPlaying"></block>
        ${blockSeparator}
        <block id="${targetId}_sound_getLength" type="sound_getLength"></block>
        ${blockSeparator}
        <block type="sound_changeeffectby"></block>
        <block type="sound_seteffectto"></block>
        <block type="sound_cleareffects"/>
        <block type="sound_getEffectValue"/>
        ${blockSeparator}
        <block type="sound_changevolumeby"></block>
        <block type="sound_setvolumeto"></block>
        <block id="${targetId}_volume" type="sound_volume"/>
        ${categorySeparator}
    </category>
    `;
};

const events = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
        <block type="event_whenstopclicked"/>
        ${blockSeparator}
        <block type="event_always"></block>
        <block type="event_whenanything"></block>
        ${blockSeparator}
        <block type="event_whenkeypressed"></block>
        <block type="event_whenkeyhit"></block>
        <block type="event_whenmousescrolled"></block>
        ${isStage ? `
            <block type="event_whenstageclicked"/>
        ` : `
            <block type="event_whenthisspriteclicked"/>
        `}
        <block type="event_whenbackdropswitchesto">
        </block>
        ${blockSeparator}
        <block type="event_whengreaterthan"></block>
        ${blockSeparator}
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast"></block>
        <block type="event_broadcastandwait"></block>
        ${categorySeparator}
    </category>
    `;
};

const control = function (isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait"></block>
        <block type="control_waitsecondsoruntil"></block>
        ${blockSeparator}
        <block type="control_repeat"></block>
        <block id="forever" type="control_forever"/>
        <block type="control_exitLoop"/>
        ${blockSeparator}
        <block type="control_switch"/>
        <block type="control_switch_default"/>
        <block type="control_exitCase"/>
        <block type="control_case_next"></block>
        <block type="control_case"></block>
        ${blockSeparator}
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block id="wait_until" type="control_wait_until"/>
        <block id="repeat_until" type="control_repeat_until"/>
        <block id="while" type="control_while"/>
        <block id="for_each" type="control_for_each"></block>
        <block type="control_if_return_else_return"></block>
        ${blockSeparator}
        <block type="control_all_at_once"/>
        ${blockSeparator}
        <block type="control_backToGreenFlag"></block>
        <block type="control_stop_sprite"></block>
        <block type="control_stop"/>
        ${blockSeparator}
        <block type="control_run_as_sprite"></block>
        ${blockSeparator}
        ${isStage ? `
            <block type="control_create_clone_of"></block>
            <block type="control_delete_clones_of"></block>
        ` : `
            <block type="control_start_as_clone"/>
            <block type="control_create_clone_of"></block>
            <block type="control_delete_clones_of"></block>
            <block type="control_delete_this_clone"/>
        `}
        ${LazyScratchBlocks.isNameUrMom() ? '<block type="your_mom"/>' : ''}
        ${categorySeparator}
    </category>
    `;
};

const sensing = function (isInitialSetup, isStage) {
    const name = translate('SENSING_ASK_TEXT', 'What\'s your name?');
    return `
    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        ${isStage ? '' : `
            <block type="sensing_touchingobject"></block>
            <block type="sensing_objecttouchingobject"></block>
            <block type="sensing_touchingcolor"></block>
            <block type="sensing_coloristouchingcolor"></block>
            ${blockSeparator}
            <block type="sensing_getxyoftouchingsprite"></block></block>
            <block type="sensing_distanceTo"></block>
            <block type="sensing_directionTo"></block>
            ${blockSeparator}
        `}
        ${isInitialSetup ? '' : `
            <block id="askandwait" type="sensing_askandwait"></block>
        `}
        <block id="answer" type="sensing_answer"/>
        <block type="sensing_thing_is_text"></block>
        <block type="sensing_thing_is_number"></block>
        ${blockSeparator}
        <block type="sensing_keypressed"></block>
        <block type="sensing_keyhit"></block>
        <block type="sensing_mousescrolling"></block>
        ${blockSeparator}
        <block type="sensing_mousedown"/>
        <block type="sensing_mouseclicked"/>
        <block type="sensing_mousex"/>
        <block type="sensing_mousey"/>
        ${blockSeparator}
        <block type="sensing_setclipboard"></block>
        <block type="sensing_getclipboard"/>
        ${isStage ? '' : `
            ${blockSeparator}
            <block type="sensing_setdragmode" id="sensing_setdragmode"></block>
            <block type="sensing_getdragmode" id="sensing_getdragmode"></block>
            ${blockSeparator}
        `}
        ${blockSeparator}
        <block id="loudness" type="sensing_loudness"/>
        ${blockSeparator}
        <block type="sensing_resettimer"/>
        <block id="timer" type="sensing_timer"/>
        ${blockSeparator}
        <block type="sensing_set_of"></block>
        <block id="of" type="sensing_of"></block>
        ${blockSeparator}
        <block id="current" type="sensing_current"/>
        <block type="sensing_dayssince2000"/>
        ${blockSeparator}
        <block type="sensing_mobile"></block>
        <block type="sensing_fingerdown"></block>
        <block type="sensing_fingertapped"></block>
        <block type="sensing_fingerx"></block>
        <block type="sensing_fingery"></block>
        ${blockSeparator}
        <block type="sensing_username"/>
        ${categorySeparator}
    </category>
    `;
};

const operators = function (isInitialSetup) {
    const apple = translate('OPERATORS_JOIN_APPLE', 'apple');
    const banana = translate('OPERATORS_JOIN_BANANA', 'banana');
    const letter = translate('OPERATORS_LETTEROF_APPLE', 'a');
    return `
    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">
        <block type="operator_add"></block>
        <block type="operator_subtract"></block>
        <block type="operator_multiply"></block>
        <block type="operator_divide"></block>
        <block type="operator_advMath"></block>
        ${blockSeparator}
        <block type="operator_random"></block>
        <block type="operator_constrainnumber"></block>
        <block type="operator_lerpFunc"></block>
        ${blockSeparator}
        <block type="operator_gt"></block>
        <block type="operator_gtorequal"></block>
        <block type="operator_lt"></block>
        <block type="operator_ltorequal"></block>
        <block type="operator_equals"></block>
        <block type="operator_notequal"></block>
        ${blockSeparator}
        <block type="operator_trueBoolean"></block>
        <block type="operator_falseBoolean"></block>
        ${blockSeparator}
        <block type="operator_and"/>
        <block type="operator_or"/>
        <block type="operator_not"/>
        ${blockSeparator}
        ${isInitialSetup ? '' : `
            <block type="operator_newLine"></block>
            <block type="operator_tabCharacter"></block>
            ${blockSeparator}
            <block type="operator_join">
                <value name="STRING1">
                    <shadow type="text">
                        <field name="TEXT">${apple} </field>
                    </shadow>
                </value>
                <value name="STRING2">
                    <shadow type="text">
                        <field name="TEXT">${banana}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_join3">
                <value name="STRING1">
                    <shadow type="text">
                        <field name="TEXT">${apple} </field>
                    </shadow>
                </value>
                <value name="STRING2">
                    <shadow type="text">
                        <field name="TEXT">${banana} </field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="operator_indexOfTextInText"></block>
            <block type="operator_lastIndexOfTextInText"></block>
            ${blockSeparator}
            <block type="operator_letter_of">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_getLettersFromIndexToIndexInText"></block>
            <block type="operator_length">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            ${blockSeparator}
            <block type="operator_contains" id="operator_contains">
              <value name="STRING1">
                <shadow type="text">
                  <field name="TEXT">${apple}</field>
                </shadow>
              </value>
              <value name="STRING2">
                <shadow type="text">
                  <field name="TEXT">${letter}</field>
                </shadow>
              </value>
            </block>
            <block type="operator_textStartsOrEndsWith" id="operator_textStartsOrEndsWith"></block>
            ${blockSeparator}
            <block type="operator_replaceAll"></block>
            <block type="operator_replaceFirst"></block>
            <block type="operator_regexmatch"></block>
            ${blockSeparator}
            <block type="operator_toUpperLowerCase"></block>
        `}
        ${blockSeparator}
        <block type="operator_mod"></block>
        <block type="operator_round"></block>
        ${blockSeparator}
        <block type="operator_mathop"></block>
        ${blockSeparator}
        <block type="operator_stringify"></block>
        <block type="operator_boolify"></block>
        ${categorySeparator}
    </category>
    `;
};

const variables = function () {
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="#FF8C1A"
        secondaryColour="#DB6E00"
        custom="VARIABLE">
    </category>
    `;
};

const lists = function () {
    return `
    <category
        name="Lists"
        id="lists"
        colour="#FF661A"
        secondaryColour="#FF5500"
        custom="LIST">
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};

const liveTests = function () {
    return `
    <category name="Live Tests" id="liveTests" colour="#FF0000" secondaryColour="#FF0000">
        <block type="procedures_call">
            <mutation proccode="tw:debugger;" argumentids="[]" warp="false" returns="null" edited="true" optype="null"></mutation>
        </block>
        ${blockSeparator}
        <block type="looks_setVertTransform"></block>
        <block type="looks_setHorizTransform"></block>
        ${blockSeparator}
        <block type="control_fieldbutton"></block>
        <block type="operators_expandablejoininputs"></block>
        <block type="motion_mutatorCheckboxTest"></block>
    </category>
    `;
};

/* eslint-enable no-unused-vars */

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 * @param {?boolean} isLiveTest - whether or not we should display the live tests categpory
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', isLiveTest = false) {
    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);

    categoriesXML = categoriesXML.slice();
    const moveCategory = categoryId => {
        const index = categoriesXML.findIndex(categoryInfo => categoryInfo.id === categoryId);
        if (index >= 0) {
            // remove the category from categoriesXML and return its XML
            const [categoryInfo] = categoriesXML.splice(index, 1);
            return categoryInfo.xml;
        }
        // return `undefined`
    };
    const motionXML = moveCategory('motion') || motion(isInitialSetup, isStage, targetId);
    const looksXML = moveCategory('looks') || looks(isInitialSetup, isStage, targetId, costumeName, backdropName);
    const soundXML = moveCategory('sound') || sound(isInitialSetup, isStage, targetId, soundName);
    const eventsXML = moveCategory('event') || events(isInitialSetup, isStage, targetId);
    const controlXML = moveCategory('control') || control(isInitialSetup, isStage, targetId);
    const sensingXML = moveCategory('sensing') || sensing(isInitialSetup, isStage, targetId);
    const operatorsXML = moveCategory('operators') || operators(isInitialSetup, isStage, targetId);
    const variablesXML = moveCategory('variables') || variables(isInitialSetup, isStage, targetId);
    const listsXML = moveCategory('lists') || lists(isInitialSetup, isStage, targetId);
    const myBlocksXML = moveCategory('procedures') || myBlocks(isInitialSetup, isStage, targetId);
    const liveTestsXML = moveCategory('liveTests') || liveTests(isLiveTest);

    const everything = [
        xmlOpen,
        motionXML, gap,
        looksXML, gap,
        soundXML, gap,
        eventsXML, gap,
        controlXML, gap,
        sensingXML, gap,
        operatorsXML, gap,
        variablesXML, gap,
        listsXML, gap,
        myBlocksXML, gap,
        isLiveTest ? [liveTestsXML, gap] : ''
    ];

    for (const extensionCategory of categoriesXML) {
        everything.push(gap, extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
