import { Command } from "../interfaces/Command";
import { OracleList } from "./oracles/oracleList";
import { getChar } from "./getChar";
import { ironswordCheck } from "./ironswornCheck";
import { oracleAction } from "./oracles/oracleAction";
import { oracleChallengeRank } from "./oracles/oracleChallegeRank";
import { oracleCharacterDescriptor } from "./oracles/oracleCharacterDescriptor";
import { oracleCharacterGoal } from "./oracles/oracleCharacterGoal";
import { oracleCharacterRole } from "./oracles/oracleCharacterRole";
import { oracleCoastalWaterLocation } from "./oracles/oracleCoastalWaterLocation";
import { oracleCombatAction } from "./oracles/oracleCombatAction";
import { oracleElfName } from "./oracles/oracleElfNames";
import { oracleGiantName } from "./oracles/oracleGiantName";
import { oracleIronlanderName2 } from "./oracles/oracleIronlanderName2";
import { oracleIronlanderName } from "./oracles/oracleIronlanderName";
import { oracleLocalDescriptor } from "./oracles/oracleLocalDescriptor";
import { oracleLocation } from "./oracles/oracleLocation";
import { oracleMajorPlotTwist } from "./oracles/oracleMajorPlotTwist";
import { oracleMysticBacklash } from "./oracles/oracleMysticBacklash";
import { oracleRegion } from "./oracles/oracleRegion";
import { oracleSettlementName } from "./oracles/oracleSettlementName";
import { oracleSettlementTrouble } from "./oracles/oracleSettlementTrouble";
import { oracleTheme } from "./oracles/oracleTheme";
import { oracleTrollName } from "./oracles/oracleTrollName";
import { oracleVarouName } from "./oracles/oracleVarouName";
import { rollEdge } from "./rollEdge";
import { rollHeart } from "./rollHeart";
import { rollIron } from "./rollIron";
import { rollShadow } from "./rollShadow";
import { rollWits } from "./rollWits";
import { oracleSQuickettlementName } from "./oracles/oracleQuickSettlementName";
import { rollClashEdge } from "./moves/m-clashe";
import { rollClashIron } from "./moves/m-clashi";
import { rollPaythePrice } from "./moves/m-payThePrice";
import { Collect } from "./collect";
import { rollFaceDangerEdge } from "./moves/m-face-e";
import { rollFaceDangerIron } from "./moves/m-face-i";
import { rollFaceDangerHeart } from "./moves/m-face-h";
import { rollFaceDangerShadow } from "./moves/m-face-s";
import { rollSecureAdvantageEdge } from "./moves/m-secure-e";
import { rollSecureAdvantageIron } from "./moves/m-secure-i";
import { rollSecureAdvantageHeart } from "./moves/m-secure-h";
import { rollSecureAdvantageShadow } from "./moves/m-secure-s";
import { rollFaceDangerWits } from "./moves/m-face-w";
import { rollSecureAdvantageWits } from "./moves/m-secure-w";
import { rollGatherInformation } from "./moves/m-gather";
import { rollStrikeEdge } from "./moves/m-strike-e";
import { rollStrikeIron } from "./moves/m-strike-i";
import { rollAskTheOracle } from "./moves/m-askTheOracle";
import { rollHeal } from "./moves/m-heal";
import { rollResupply } from "./moves/m-resupply";
import { rollMakeCamp } from "./moves/m-makeCamp";
import { rollUndetakeJourney } from "./moves/m-undertakeJourney";
import { rollEndureHarm } from "./moves/m-endureHarm";
import { zeroHalthTable } from "./oracles/zeroHealthTable";
import { updateHealth } from "./statsUpdate/updateHealth";
import { updateMomentum } from "./statsUpdate/updateMomentum";
import { updateSpirit } from "./statsUpdate/updateSpirit";
import { updateSupply } from "./statsUpdate/updateSupply";

export const CommandList: Command[] = [
    OracleList,
    ironswordCheck,
    oracleAction, oracleChallengeRank, oracleCharacterDescriptor, oracleCharacterGoal, oracleCharacterRole, 
    oracleCoastalWaterLocation, oracleCombatAction, oracleElfName, oracleGiantName, oracleIronlanderName2,
    oracleIronlanderName, oracleLocalDescriptor, oracleLocation, oracleMajorPlotTwist, oracleMysticBacklash,
    oracleSQuickettlementName, oracleRegion, oracleSettlementName, oracleSettlementTrouble, oracleTheme,  
    oracleTrollName, oracleVarouName, 
    getChar, Collect,
    updateHealth, updateMomentum, updateSpirit, updateSupply,
    rollGatherInformation, rollPaythePrice, rollAskTheOracle, rollHeal, rollResupply, rollMakeCamp, rollUndetakeJourney,
    rollFaceDangerEdge,rollFaceDangerIron, rollFaceDangerHeart, rollFaceDangerShadow, rollFaceDangerWits,
    rollSecureAdvantageEdge, rollSecureAdvantageIron, rollSecureAdvantageHeart, rollSecureAdvantageShadow, rollSecureAdvantageWits,
    rollClashEdge, rollClashIron, rollStrikeEdge, rollStrikeIron, rollEndureHarm, zeroHalthTable,
    rollEdge, rollHeart, rollIron, rollShadow, rollWits,
]