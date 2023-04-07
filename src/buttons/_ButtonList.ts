import { Button } from "../interfaces/Command";
import { buttonCoastalWaterLocation } from "./bt-coastalWaterLocation";
import { buttonLocationDescriptor } from "./bt-locationDescriptor";
import { buttonLocation } from "./bt-location";
import { buttonLocations } from "./bt-locations";
import { buttonRegion } from "./bt-region";
import { buttonTheme } from "./bt-theme";
import { buttonSettlementTrouble } from "./bt-settlementTrouble";
import { buttonSettlementName } from "./bt-settlementName";
import { buttonQuickSettlementName } from "./bt-quickSettlementName";
import { buttonAction } from "./bt-action";
import { buttonActionTheme } from "./bt-actionTheme";
import { buttonCharacter } from "./bt-character";
import { buttonCharacterRole } from "./bt-characterRole";
import { buttonCharacterGoal } from "./bt-characterGoal";
import { buttonCharacterDescriptor } from "./bt-characterDescriptor";
import { buttonName } from "./bt-name";
import { buttonIronlanderName } from "./bt-ironlanderName";
import { buttonIronlanderName2 } from "./bt-ironlanderName2";
import { buttonElfName } from "./bt-elfName";
import { buttonGiantName } from "./bt-giantName";
import { buttonTrollName } from "./bt-trollName";
import { buttonVarouName } from "./bt-varouName";
import { buttonCombatAction } from "./bt-combatAction";
import { buttonMysticBacklash } from "./bt-mysticBacklash";
import { buttonMajorPlotTwist } from "./bt-majorPlotTwist";
import { buttonChallengeRank } from "./bt-challengeRank";
import { buttonAtOAlmostCertain } from "./bt-askAlmostCertain";
import { buttonAtOLikely } from "./bt-askLikely";
import { buttonAtO5050 } from "./bt-ask5050";
import { buttonAtOSmallChance } from "./bt-askSmallChance";
import { buttonAtOUnlikely } from "./bt-askUncertain";

export const ButtonList :Button[] = [
    buttonTheme, buttonAction, buttonActionTheme,
    buttonAtOAlmostCertain, buttonAtOLikely, buttonAtO5050, buttonAtOUnlikely, buttonAtOSmallChance,
    buttonCharacter, buttonCharacterRole, buttonCharacterGoal, buttonCharacterDescriptor,
    buttonLocations, buttonLocation, buttonRegion, buttonCoastalWaterLocation, buttonLocationDescriptor, buttonSettlementTrouble, buttonSettlementName, buttonQuickSettlementName,
    buttonName, buttonIronlanderName, buttonIronlanderName2, buttonElfName, buttonGiantName, buttonTrollName, buttonVarouName,
    buttonCombatAction, buttonMysticBacklash, buttonMajorPlotTwist, buttonChallengeRank

    ]